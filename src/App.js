import React, { Component } from 'react';
import './App.css';
import InfoCardContainer from './Components/InfoCardContainer/InfoCardContainer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      characterData: []
    }
  }
  componentDidMount() {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        return data.results.map(data => data)
      })
      .then(characters => this.setState({characterData: characters}))
  }
  render() {
    console.log('CHARACTERS DATA', this.state.characterData)
    return(
      <main className="App">
        <h1>hi app you fucker</h1>
        <InfoCardContainer/>
      </main>
    )
  }
}

export default App;
