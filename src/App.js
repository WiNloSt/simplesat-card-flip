import React, { Component } from 'react'
import styled, { injectGlobal } from 'styled-components'
import { Header } from './components/Header'
import { Body } from './components/Body'
import { StoreProvider } from './store'

injectGlobal`
  * {
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    margin: 0;
    font-family: Lato;
    background: #0badc9;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

class App extends Component {
  render() {
    return (
      <StoreProvider>
        <Container>
          <Header />
          <Body />
        </Container>
      </StoreProvider>
    )
  }
}

export default App
