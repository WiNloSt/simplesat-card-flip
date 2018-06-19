import React from 'react'
import * as R from 'ramda'

const context = React.createContext()

export const actions = {
  previousQuestion: 'previousQuestion',
  nextQuestion: 'nextQuestion'
}

export class StoreProvider extends React.Component {
  state = {
    currentQuestion: 1,
    questions: [
      {
        id: 1,
        text: '1. first question'
      },
      {
        id: 2,
        text: '2. second question'
      },
      {
        id: 3,
        text: '3. third question'
      },
      {
        id: 4,
        text: '4. fourth question'
      },
      {
        id: 5,
        text: '5. fifth question'
      },
      {
        id: 6,
        text: '6. sixth question'
      }
    ]
  }

  stateReducer = (state, action) => {
    if (action === actions.previousQuestion) {
      const isFirstQuestion = state.currentQuestion === 0
      if (isFirstQuestion) {
        return state
      }

      return R.merge(state, { currentQuestion: state.currentQuestion - 1 })
    }

    if (action === actions.nextQuestion) {
      const isLastQuestion = state.currentQuestion === state.questions.length - 1
      if (isLastQuestion) {
        return state
      }

      return R.merge(state, { currentQuestion: state.currentQuestion + 1 })
    }

    return state
  }

  dispatch = action => {
    this.setState(this.stateReducer(this.state, action))
  }

  render() {
    return (
      <context.Provider value={{ ...this.state, dispatch: this.dispatch }}>
        {this.props.children}
      </context.Provider>
    )
  }
}

export const StoreConsumer = context.Consumer
