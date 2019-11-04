import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import CharacterCardContainer from '../../Components/CharacterCardContainer/CharacterCardContainer';
import NavBar from '../../Components/NavBar/NavBar';
import LandingPage from '../../Components/LandingPage/LandingPage';
import Pagination from '../../Components/Pagination/Pagination';
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
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/characters' component={CharacterCardContainer} />
        <Pagination nextPage={this.nextPage} next={this.state.next} prev={this.state.prev}/>
      </main>
    )
  }
} 

const mapDispatchToProps = (dispatch) => ({
  allCharacters: (characters) => dispatch(saveCharacters(characters)),
})


export default connect(null, mapDispatchToProps)(App)