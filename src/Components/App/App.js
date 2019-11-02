import React, { Component } from 'react';
import '../App/App.css';
import CharacterCardContainer from '../CharacterCardContainer/CharacterCardContainer';
import NavBar from '../../Components/NavBar/NavBar';
// import LandingPage from '../LandingPage/LandingPage';
import Pagination from '../Pagination/Pagination';
import { getCharacters } from '../../apiCalls/apiCalls'
import { saveCharacters } from '../../actions'
import { connect } from 'react-redux';

class App extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     characterData: []
  //   }
  // }
  componentDidMount() {
    getCharacters()
    .then(characters => this.props.allCharacters(characters))
  }
  render() {
    // console.log('CHARACTERS DATA', this.state.characterData)
    return(
      <main className="App">
        {/* <h1>HI APP</h1> */}
        <NavBar />
        {/* <LandingPage /> */}
        <CharacterCardContainer />
        <Pagination/>
      </main>
    )
  }
}

// const mapStateToProps = state => ({
//   characters: state.characters
// })

const mapDispatchToProps = (dispatch) => ({
  allCharacters: (characters) => dispatch(saveCharacters(characters))
})


export default connect(null, mapDispatchToProps)(App)
