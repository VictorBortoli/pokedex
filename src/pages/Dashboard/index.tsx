import React from 'react'

import { Title, Input, Card, Cards } from './styles'

const Dashboard: React.FC = () => {
  return (
    <>
      <Title>
        <h1>Tudo que você precisa saber sobre os Pokémons está aqui!</h1>
      </Title>

      <Input>
        <input type="text" placeholder="Pesquise um Pokemon" />
        <button>Pesquisar</button>
      </Input>

      <Cards>
        <Card>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src="https://cdn.traction.one/pokedex/pokemon/1.png"
                  alt="Bulbasaur"
                />
                <h2>1. Bulbasaur</h2>
                <p>Grass | Poison</p>
              </div>

              <div className="flip-card-back">
                <div>
                  <h2>Descrição</h2>
                  <p>Proud of its power</p>
                </div>
                <span className="divider"></span>
                <div>
                  <h2>Habilidade</h2>
                  <p>Overgrow | Chlorophyll</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Cards>
    </>
  )
}

export default Dashboard
