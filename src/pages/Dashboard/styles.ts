import styled from 'styled-components'
import { shade } from 'polished'

export const Title = styled.div`
  margin-top: 48px;
  padding: 16px 32px;

  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0px 4px 20px -1px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(40px);
  border-radius: 16px;

  h1 {
    opacity: 1;
    font-weight: bold;
    font-size: 38px;
    text-align: center;

    color: #ffffff;
  }
`

export const Input = styled.div`
  margin-top: 60px;

  input,
  button {
    padding: 24px 32px;

    border: none;
    outline: none;

    font-size: 18px;
  }

  input {
    width: 605px;
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
`

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;

  margin-top: 70px;
  margin-bottom: 48px;
`

export const Card = styled.div`
  .flip-card {
    width: 250px;
    height: 315px;

    border-radius: 16px;

    padding: 24px;
    perspective: 1000px;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .flip-card:hover .flip-card-inner {
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
    font-size: 26px;
    text-align: center;
  }

  .flip-card-front p,
  .flip-card-back p {
    font-weight: 400;
    font-size: 16px;
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

  .flip-card-back .divider {
    width: 100%;
    height: 1px;
    background-color: #252525;
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
  margin-top: 8px;
`
