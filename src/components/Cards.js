import React from 'react'
import styled from 'styled-components'

import { Card } from './Card'
import { StoreConsumer } from '../store'

const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  * {
    transition: transform 1s;
  }

  > div {
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    > div {
      transform: scale(0.8) translateY(-100px);
    }

    &:nth-last-child(1) > div {
      transform: scale(1) translateY(0);
    }

    &:nth-last-child(2) > div {
      color: red;
      transform: scale(0.9) translateY(-50px);
    }

    &:nth-last-child(3) > div {
      color: blue;
      transform: scale(0.8) translateY(-100px);
    }
  }
`

export const Cards = () => (
  <StoreConsumer>
    {({ questions, currentQuestion }) => {
      const displayQuestions = questions
        .slice(currentQuestion, currentQuestion + 3)
        .reverse()
        .map(question => <Card key={question.id} question={question} />)

      console.log(displayQuestions)
      return <Container>{displayQuestions}</Container>
    }}
  </StoreConsumer>
)
