import React, { useEffect, useState } from 'react'
import api from '../../services/api'

import { Title, Input, Card, Cards, Error } from './styles'

interface Pokemon {
  id: number
  url_image: string
  name: string
  types: string[]
  description: string
  abilities: string[]
}

const Dashboard: React.FC = () => {
  const [newPokemon, setNewPokemon] = useState('')
  const [inputError, setInputError] = useState('')
  const [pokemonsList, setPokemons] = useState<Pokemon[]>(() => {
    const storageRepository = localStorage.getItem('@Pokemons')

    if (storageRepository) {
      return JSON.parse(storageRepository)
    }

    fetchPokemons()
    return []
  })

  const searchPokemon = async () => {
    if (!newPokemon) {
      setInputError('Digite um Pokemon para pesquisar')
      return
    }

    try {
      const response = await api.get<Pokemon>(`pokemon/${newPokemon}`)
      const pokemon = response.data

      const responseTypes = await api.get(`pokemon-form/${pokemon.id}/`)
      const pokemonTypes = responseTypes.data

      const types = []
      for (let type of pokemonTypes.types) {
        types.push(type.type.name)
      }

      const responseDescription = await api.get(`characteristic/${pokemon.id}/`)
      const pokemonDescription = responseDescription.data

      const responseAbilities = await api.get(`pokemon/${pokemon.id}/`)
      const pokemonAbilities = responseAbilities.data

      const abilities = []
      for (let ability of pokemonAbilities.abilities) {
        abilities.push(ability.ability.name)
      }

      const pokemonData = {
        id: pokemon.id,
        url_image: `https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`,
        name: pokemon.name,
        types,
        description: pokemonDescription.descriptions[2].description,
        abilities
      }

      setPokemons([pokemonData, ...pokemonsList])
      setNewPokemon('')
    } catch (err) {
      setInputError('Pokemon não encontrado.')
      setNewPokemon('')
    }
  }

  async function fetchPokemons() {
    const response = await api.get('pokemon?limit=5')
    const pokemons = response.data

    const pokemonData = []
    let id = 1

    for (let pokemon of pokemons.results) {
      const responseTypes = await api.get(`pokemon-form/${id}/`)
      const pokemonTypes = responseTypes.data

      const types = []
      for (let type of pokemonTypes.types) {
        types.push(type.type.name)
      }

      const responseDescription = await api.get(`characteristic/${id}/`)
      const pokemonDescription = responseDescription.data

      const responseAbilities = await api.get(`pokemon/${id}/`)
      const pokemonAbilities = responseAbilities.data

      const abilities = []
      for (let ability of pokemonAbilities.abilities) {
        abilities.push(ability.ability.name)
      }

      pokemonData.push({
        id,
        url_image: `https://cdn.traction.one/pokedex/pokemon/${id}.png`,
        name: pokemon.name,
        types,
        description: pokemonDescription.descriptions[2].description,
        abilities
      })

      id++
    }

    setPokemons([...pokemonsList, ...pokemonData])
  }

  useEffect(() => {
    localStorage.setItem('@Pokemons', JSON.stringify(pokemonsList))
  }, [pokemonsList])

  return (
    <>
      <Title>
        <h1>Tudo que você precisa saber sobre os Pokémons está aqui!</h1>
      </Title>

      <Input>
        <input
          value={newPokemon}
          onChange={e => setNewPokemon(e.target.value.toLowerCase())}
          type="text"
          placeholder="Pesquise um Pokemon"
        />
        <button onClick={searchPokemon}>Pesquisar</button>
      </Input>

      {inputError && <Error>{inputError}</Error>}

      <Cards>
        {pokemonsList.map(pokemon => (
          <Card>
            <div className={`flip-card ${pokemon.types.slice(-1)}`}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={pokemon.url_image} alt={pokemon.name} />
                  <h2>{pokemon.name}</h2>
                  <p>{pokemon.types.join(' | ')}</p>
                </div>

                <div className="flip-card-back">
                  <div>
                    <h2>Descrição</h2>
                    <p>{pokemon.description}</p>
                  </div>
                  <span className="divider"></span>
                  <div>
                    <h2>Habilidade</h2>
                    <p>{pokemon.abilities.join(' | ')}</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </Cards>
    </>
  )
}

export default Dashboard
