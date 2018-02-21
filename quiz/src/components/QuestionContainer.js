import React, { Component } from 'react'
import Answers from './Answers'
import axios from 'axios'

class QuestionContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      questions: [],
      answers: [],
      score: 0,
      username: ''
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
        {this.state.questions.map((question) => {
          return(
            <div>
              {question.question}
            </div>
          )
        })}
        <Answers />
      </div>
    )
  }
}

export default QuestionContainer
