import styled from 'styled-components'
import { shade } from 'polished'

export const Title = styled.div`
  margin-top: 1rem;
  padding: 1rem 2rem;

  @media (max-width: 480px) {
    & {
      width: 90%;
    }
  }
  img{
    width: 500px
  }
`

export const Input = styled.div`
  margin-top: 1.75rem;

  input,
  button {
    padding: 1.0rem 1rem;

    border: none;
    outline: none;

    font-size: 1.125rem;
  }

  input {
    width: 20.8125rem;
    border-radius: 10px 0 0 10px;
    
  }

  button {
    background-color: #ab071d;
    color: #ffffff;

    border-radius: 0 10px 10px 0;
  }


  @media (max-width: 480px) {
    input {
      width: 65%;
    }
  }
`

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3.5rem;

  margin-top: 5.375rem;
  margin-bottom: 3rem;
`

export const Card = styled.div`
  .flip-card {
    width: 15.625rem;
    height: 19.6875rem;

    border-radius: 4px;

    padding: 1.5rem;
    perspective: 67.5rem;
  }

  .flip-card-back {
    display: grid;
    place-items: center;

    color: white;
    transform: rotateY(180deg);
  }

  .flip-card-back h2 {
    font-weight: 700;
  }

  img {
    width: 100%;
  }

  .steel {
    background-color: #ffffff;
  }

  .fire {
    background-color: #ffffff;
  }

  .grass {
    background-color: #ffffff;
  }

  .electric {
    background-color: #ffffff;
  }

  .water,
  .ice {
    background-color: #ffffff;
  }

  .ground {
    background-color: #ffffff;
  }

  .rock {
    background-color: #ffffff;
  }

  .fairy {
    background-color: #ffffff;
  }

  .poison {
    background-color: #ffffff;
  }

  .bug {
    background-color: #ffffff;
  }

  .dragon {
    background-color: #ffffff;
  }

  .psychic {
    background-color: #ffffff;
  }

  .flying {
    background-color: #ffffff;
  }

  .fighting {
    background-color: #ffffff;
  }

  .normal {
    background-color: #ffffff;
  }
`

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 0.5rem;
`



