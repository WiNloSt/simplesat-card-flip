import React from 'react'
import styled from 'styled-components'

import { Card } from './Card'
import { Maybe } from './Maybe'
import { StoreConsumer } from '../store'

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    position: absolute;
    z-index: 3;
  }

  > div:nth-child(2) {
    color: red;
    z-index: 2;
    transform: scale(0.9) translateY(-50px);
  }

  > div:nth-child(3) {
    color: blue;
    z-index: 1;
    transform: scale(0.8) translateY(-100px);
  }
`

export const Cards = () => (
  <StoreConsumer>
    {({ questions, currentQuestion }) => (
      <Container>
        <Card question={questions[currentQuestion]} />
        <Maybe question={questions[currentQuestion + 1]}>
          {({ question }) => <Card question={question} />}
        </Maybe>
        <Maybe question={questions[currentQuestion + 2]}>
          {({ question }) => <Card question={question} />}
        </Maybe>
      </Container>
    )}
  </StoreConsumer>
)
