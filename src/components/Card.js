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
  box-shadow: 0px 4px 16px -2px #555;
`

export const Card = ({ question, ...props }) => (
  <Container {...props}>
    <h1>{question.text}</h1>
  </Container>
)
