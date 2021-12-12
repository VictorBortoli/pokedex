import styled from 'styled-components'
import { shade } from 'polished'

export const Title = styled.div`
  margin-top: 3rem;
  padding: 1rem 2rem;

  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0px 4px 20px -1px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(40px);
  border-radius: 16px;

  h1 {
    opacity: 1;
    font-weight: bold;
    font-size: 2.375rem;
    text-align: center;

    color: #ffffff;
  }

  @media (max-width: 480px) {
    & {
      width: 90%;
    }
  }
`

export const Input = styled.div`
  margin-top: 3.75rem;

  input,
  button {
    padding: 1.5rem 2rem;

    border: none;
    outline: none;

    font-size: 1.125rem;
  }

  input {
    width: 37.8125rem;
    border-radius: 16px 0 0 16px;
  }

  button {
    background-color: #98d7a5;
    color: #ffffff;

    border-radius: 0 16px 16px 0;
  }

  button:hover {
    background: ${shade(0.1, '#98D7A5')};
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
  gap: 2rem;

  margin-top: 4.375rem;
  margin-bottom: 3rem;
`

export const Card = styled.div`
  .flip-card {
    width: 15.625rem;
    height: 19.6875rem;

    border-radius: 16px;

    padding: 1.5rem;
    perspective: 62.5rem;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .flip-card:hover .flip-card-inner,
  .flip-card:active .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }

  .flip-card-front h2,
  .flip-card-back h2 {
    color: #252525;

    font-weight: 400;
    font-size: 1.625rem;
    text-align: center;
  }

  .flip-card-front p,
  .flip-card-back p {
    font-weight: 400;
    font-size: 1rem;
    text-align: center;

    color: #828282;
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
    background-color: #f4f4f4;
  }

  .fire {
    background-color: #fddfdf;
  }

  .grass {
    background-color: #defde0;
  }

  .electric {
    background-color: #fcf7de;
  }

  .water,
  .ice {
    background-color: #def3fd;
  }

  .ground {
    background-color: #f4e7da;
  }

  .rock {
    background-color: #d5d5d4;
  }

  .fairy {
    background-color: #fceaff;
  }

  .poison {
    background-color: #98d7a5;
  }

  .bug {
    background-color: #f8d5a3;
  }

  .dragon {
    background-color: #97b3e6;
  }

  .psychic {
    background-color: #eaeda1;
  }

  .flying {
    background-color: #f5f5f5;
  }

  .fighting {
    background-color: #e6e0d4;
  }

  .normal {
    background-color: #f5f5f5;
  }
`

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 0.5rem;
`
