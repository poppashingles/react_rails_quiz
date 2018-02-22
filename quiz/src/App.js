import React, { Component } from 'react';
import './App.css';
import QuestionContainer from './containers/QuestionContainer'

// Welcome page
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      questions: [],
      answers: [],
      score: 0,
      userName: ''
    }

    this.startQuiz = this.startQuiz.bind(this)

  }

  startQuiz(event) {
    event.preventDefault()
    const userName = event.target.value
    this.setState({ userName: userName })
    // Link to first question
  }

  render() {
    return (
      <div id="name-entry">
        <h1>Welcome to the Cash Flow Quiz!</h1>
        <p>Enter a username to get started</p>
        <form onSubmit={ this.startQuiz }>
          <input size="50" id="nickname" required="required" autoComplete="off"></input><br/><br/>
          <input type="submit" id="click-form" className="btn btn-success"></input>
        </form>
      </div>
    );
  }
}

export default App;
