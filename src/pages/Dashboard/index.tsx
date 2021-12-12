import React, { useEffect, useState } from 'react'
import api from '../../services/api'

import { Title, Input, Card, Cards, Error } from './styles'

interface Pokemon {
  url_image: string
  name: string
  types: string[]
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

    loadPokemons()
    return []
  })

  const searchPokemon = async () => {
    if (!newPokemon) {
      setInputError('Digite um Pokemon para pesquisar')
      return
    }

    try {
      const response = await api.get(`pokemon/${newPokemon}/`)
      const pokemon = response.data

      const types = pokemon.types.map((type: any) => {
        return type.type.name
      })

      const abilities = pokemon.abilities.map((ability: any) => {
        return ability.ability.name
      })

      const pokemonData = {
        url_image: `https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`,
        name: pokemon.name,
        types,
        abilities
      }

      setPokemons([pokemonData, ...pokemonsList])
      setNewPokemon('')
    } catch (err) {
      setInputError('Pokemon não encontrado.')
      setNewPokemon('')
    }
  }

  async function loadPokemons() {
    const pokemonData = []

    for (let id = 1; id <= 30; id++) {
      const response = await api.get(`pokemon/${id}/`)
      const pokemon = response.data

      const types = pokemon.types.map((type: any) => {
        return type.type.name
      })

      const abilities = pokemon.abilities.map((ability: any) => {
        return ability.ability.name
      })

      pokemonData.push({
        url_image: `https://cdn.traction.one/pokedex/pokemon/${id}.png`,
        name: pokemon.name,
        types,
        abilities
      })
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
