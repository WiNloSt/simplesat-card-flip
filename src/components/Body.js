import React from 'react'
import styled from 'styled-components'

import { Cards } from './Cards'

const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Body = () => (
  <Container>
    <Cards />
  </Container>
)
