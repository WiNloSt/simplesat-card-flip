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
        text: '1. first question'
      },
      {
        text: '2. second question'
      },
      {
        text: '3. third question'
      },
      {
        text: '4. fourth question'
      }
    ]
  }

  stateReducer = (state, action) => {
    if (action === actions.previousQuestion) {
      if (state.currentQuestion === 0) {
        return state
      }

      return R.merge(state, { currentQuestion: state.currentQuestion - 1 })
    }

    if (action === actions.nextQuestion) {
      if (state.currentQuestion === state.questions.length - 1) {
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
