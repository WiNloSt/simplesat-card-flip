import React from 'react'
import styled from 'styled-components'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { Card } from './Card'
import { StoreConsumer } from '../store'

const transitionDuration = 500

const TransitionContainer = styled(TransitionGroup)`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  > div {
    position: absolute;
    transition: all ${transitionDuration}ms;
    transform: scale(1) translateY(0);
  }

  > div:nth-child(1) {
    /* Backmost card */
    transform: scale(0.8) translateY(-100px);
  }

  > div:nth-child(2) {
    transform: scale(0.9) translateY(-50px);
  }

  > div:nth-child(3) {
    /* Frontmost card */
    transform: scale(1) translateY(0);
  }

  .eka-exit {
    &:last-child {
      /* Frontmost card */
      animation: ekaExit ${transitionDuration}ms forwards;
    }

    &:first-child {
      /* Backmost card */
      /* opacity: 0; */
      transform: scale(0.8) translateY(-80px);
    }
  }

  .eka-enter {
    &:last-child {
      /* Frontmost card */
      animation: ekaEnter ${transitionDuration}ms forwards;
    }

    &:first-child {
      /* Backmost card */
      /* opacity: 0; */
      transform: scale(0.8) translateY(-80px);
    }

    &-active:first-child {
      /* Backmost card */
      /* opacity: 1; */
      transform: scale(0.8) translateY(-100px);
    }
  }

  @keyframes ekaExit {
    to {
      opacity: 0;
      transform: translate3d(-150%, 150%, 0) rotate3d(0, 0, 1, -20deg);
    }
  }

  @keyframes ekaEnter {
    from {
      opacity: 0;
      transform: translate3d(-150%, 150%, 0) rotate3d(0, 0, 1, -20deg);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0) rotate3d(0, 0, 0, 0);
    }
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
            classNames="eka">
            {question ? <Card question={question} /> : <div />}
          </CSSTransition>
        ))

      return <TransitionContainer>{displayQuestions}</TransitionContainer>
    }}
  </StoreConsumer>
)
