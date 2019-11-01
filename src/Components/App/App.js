import React, { Component } from 'react';
import '../App/App.css';
import CharacterCardContainer from '../CharacterCardContainer/CharacterCardContainer';
import { getCharacters } from '../../apiCalls/apiCalls'

class App extends Component {
  constructor() {
    super()
    this.state = {
      characterData: []
    }
  }
  componentDidMount() {
    getCharacters()
      .then(characters => this.setState({characterData: characters}))
  }
  render() {
    console.log('CHARACTERS DATA', this.state.characterData)
    return(
      <main className="App">
        <h1>hi app you fucker</h1>
        <CharacterCardContainer characterData={this.state.characterData} />
      </main>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  
})

export default App;
