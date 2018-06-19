import React from 'react'
import styled from 'styled-components'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { Card } from './Card'
import { StoreConsumer } from '../store'

const transitionDuration = 300

const TransitionContainer = styled(TransitionGroup)`
  /* position: relative;
  height: 100%;
  width: 100%; */
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  > .fade-enter {
    opacity: 0;

    &-active {
      opacity: 1;
    }
  }

  > .fade-exit {
    opacity: 1;

    &-active {
      opacity: 0;
    }
  }

  > div {
    position: absolute;
    transition: all ${transitionDuration}ms;
    transform: scale(1) translateY(0);
  }

  > div:nth-child(1) {
    transform: scale(0.8) translateY(-100px);
  }

  > div:nth-child(2) {
    transform: scale(0.9) translateY(-50px);
  }

  > div:nth-child(3) {
    transform: scale(1) translateY(0);
  }
`

export const Cards = () => (
  <StoreConsumer>
    {({ questions, currentQuestion }) => {
      const displayQuestions = [...questions, null, null]
        .slice(currentQuestion, currentQuestion + 3)
        .reverse()
        .map((question, index) => (
          <CSSTransition
            timeout={transitionDuration}
            key={question ? question.id : index}
            classNames="fade">
            {question ? <Card question={question} /> : <div />}
          </CSSTransition>
        ))

      return <TransitionContainer>{displayQuestions}</TransitionContainer>
    }}
  </StoreConsumer>
)
