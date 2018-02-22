import React, { Component } from 'react'
import axios from 'axios'

// To serve up the answers, will be accessed by their question_id being = to the displayed question.id
class Answers extends Component {

  constructor(props) {
    super(props)
    this.state = {
      answers: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/answers.json')
    .then(response => {
      console.log(response)
      this.setState({answers: response.data})
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <div>
          {this.state.answers.map((answer) => {
            return(
              <div>
                {answer.answer}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Answers
