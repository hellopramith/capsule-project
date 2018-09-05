import React, { Component } from 'react';
import UserInputSection from './components/UserInputSection';
import ChattingSection from './components/ChattingSection';

class App extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      screen: ''
    }
    this.onUserEntry = this.onUserEntry.bind(this)
  }

  onUserEntry(username) {
    fetch('http://localhost:3001/users', {
      method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
      })
      .then(response => {
        this.setState({
          username: username,
          screen: 'ChattingSection'
        })
      })
      .catch(error => console.error('error', error))
  }

  render() {
    if (this.state.screen === '') {
      return <UserInputSection onSubmit={this.onUserEntry} />
    }
    if (this.state.screen === 'ChattingSection') {
      return <ChattingSection username={this.state.username} />
    }
  }
}

export default App
