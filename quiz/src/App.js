import React, { Component } from 'react';
import './App.css';
import QuestionContainer from './components/QuestionContainer'

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Welcome to the Cash Flow Quiz!</h1>
        </header>
        <QuestionContainer />
      </div>
    );
  }
}

export default App;
