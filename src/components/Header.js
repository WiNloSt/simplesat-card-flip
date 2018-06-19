import React from 'react'
import styled from 'styled-components'
import { actions, StoreConsumer } from '../store'

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 1rem 2rem;
`

const Button = styled.button`
  all: unset;
  border: 1px solid black;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  cursor: pointer;

  &:hover {
    background: #eee;
  }

  &:active {
    background: #ddd;
    transform: translateY(1px);
  }
`

export const Header = props => {
  return (
    <StoreConsumer>
      {({ dispatch }) => {
        const clickPrevious = () => dispatch(actions.previousQuestion)
        const clickNext = () => dispatch(actions.nextQuestion)
        return (
          <Container>
            <Button onClick={clickPrevious}>{'< '}Previous</Button>
            Pronto Tools
            <Button onClick={clickNext}>Next{' >'}</Button>
          </Container>
        )
      }}
    </StoreConsumer>
  )
}
