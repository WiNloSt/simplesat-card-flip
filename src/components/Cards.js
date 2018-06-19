import React from 'react'
import styled from 'styled-components'

import { Card } from './Card'
import { StoreConsumer } from '../store'

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Cards = () => (
  <StoreConsumer>
    {({ questions, currentQuestion }) => (
      <Container>
        <Card question={questions[currentQuestion]} />
      </Container>
    )}
  </StoreConsumer>
)
