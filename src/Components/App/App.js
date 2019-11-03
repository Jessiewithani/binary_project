import React, { Component } from 'react';
import '../App/App.css';
import CharacterCardContainer from '../CharacterCardContainer/CharacterCardContainer';
import NavBar from '../../Components/NavBar/NavBar';
import LandingPage from '../LandingPage/LandingPage';
import Pagination from '../Pagination/Pagination';
import { getCharacters } from '../../apiCalls/apiCalls'
import { saveCharacters } from '../../actions'
import { connect } from 'react-redux';

class App extends Component {
  constructor() {
    super() 
    this.state = {
      next: '',
      prev: ''

    }
  }
  componentDidMount() {
    getCharacters()
    .then(characters => {
      console.log('dj', characters.info)
      this.setState({next: characters.info.next, prev: characters.info.prev})
      this.props.allCharacters(characters)
    });
  }

  nextPage = (url) => {
    getCharacters(url)
    .then(characters => {
      console.log('dj', characters.info.next)
      this.setState({next: characters.info.next, prev: characters.info.prev})

      this.props.allCharacters(characters)
    });
}

render() {
    return(
      <main className="App">
        <NavBar />
        <LandingPage />
        <CharacterCardContainer />
        <Pagination nextPage={this.nextPage} next={this.state.next} prev={this.state.prev}/>
      </main>
    )
  }
} 

// const mapStateToProps = state => ({
//   characters: state.characters
// })

const mapDispatchToProps = (dispatch) => ({
  allCharacters: (characters) => dispatch(saveCharacters(characters)),
  // allLocations: (locations) => dispatch(saveLocations(locations))
})


export default connect(null, mapDispatchToProps)(App)
