import React, { Component } from 'react'
import Answers from './Answers'

class QuestionContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      question: '',
      answers: []
    }
  }

  render() {
    return (
      <div>
        Question
        <Answers />
      </div>
    )
  }
}

export default QuestionContainer
