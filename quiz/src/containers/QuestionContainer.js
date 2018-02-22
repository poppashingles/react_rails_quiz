import React, { Component } from 'react'
import Answers from '../components/Answers'
import Question1 from '../components/Question1'
import axios from 'axios'

class QuestionContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      questions: [],
      answers: [],
      score: 0,
      userName: ''
    }
  }

  componentDidMount() {
    const url = 'http://localhost:3001/api/v1/questions.json'

    const request = new XMLHttpRequest()
    request.open('GET', url)
    request.send()

    request.addEventListener('load', () => {
      if(request.status !== 200) return
      const jsonString = request.responseText
      const questions = JSON.parse(jsonString)
      this.setState({ questions: questions })
    })
  }

  // componentDidMount() {
  //   axios.get('http://localhost:3001/api/v1/questions.json')
  //   .then(response => {
  //     console.log(response)
  //     this.setState({questions: response.data})
  //   })
  //   .catch(error => console.log(error))
  // }

  render() {
    return (
      <div>
        <Question1 questions={ this.state.questions } userName= { this.state.userName }/>
      </div>
    )
  }
}

export default QuestionContainer
