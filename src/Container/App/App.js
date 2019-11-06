import React, { Component } from 'react';
import CharacterCardContainer from '../CharacterCardContainer/CharacterCardContainer';
import LandingPage from '../../Components/LandingPage/LandingPage';
import Pagination from '../Pagination/Pagination';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux';
import { getCharacters } from '../../apiCalls/apiCalls'
import { saveCharacters } from '../../actions'
import '../../Container/App/App.css';

export class App extends Component {
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
      this.setState({next: characters.info.next, prev: characters.info.prev})
      this.props.allCharacters(characters)
    });
  }

  nextPage = (url) => {
    getCharacters(url)
    .then(characters => {
      this.setState({next: characters.info.next, prev: characters.info.prev})
      this.props.allCharacters(characters)
    });
}

render() {
    return(
      <main className="App">
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/characters' component={CharacterCardContainer} />
        <Pagination nextPage={this.nextPage} next={this.state.next} prev={this.state.prev}/>
      </main>
    )
  }
} 

export const mapDispatchToProps = (dispatch) => ({
  allCharacters: (characters) => dispatch(saveCharacters(characters)),
})


export default connect(null, mapDispatchToProps)(App)
