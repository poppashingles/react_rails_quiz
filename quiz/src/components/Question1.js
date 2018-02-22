import React, { Component } from 'react';
import '../App.css';

class Question1 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      questions: [],
      score: 0
    }

  }

  render() {
    return (
      <div>{ this.state.questions[0].question}</div>
    )
  }
}

export default Question1;
