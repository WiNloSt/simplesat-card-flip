import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 900px;
  max-height: 500px;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Card = ({ question }) => (
  <Container>
    <h1>{question.text}</h1>
  </Container>
)
