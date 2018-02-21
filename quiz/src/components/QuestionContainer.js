import React, { Component } from 'react'
import Answers from './Answers'
import axios from 'axios'

class QuestionContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      questions: [],
      answers: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/questions.json')
    .then(response => {
      console.log(response)
      this.setState({questions: response.data})
    })
    .catch(error => console.log(error))
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
