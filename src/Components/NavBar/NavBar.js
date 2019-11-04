import React, { Component } from 'react';
import '../NavBar/NavBar.css'
import { connect } from 'react-redux';
import { searchCharacter, filterSpecies } from '../../actions'


class NavBar extends Component {
    constructor() {
        super()
        this.state = {
            search: '',
            human: [],
            alien: []

        }
    }
    handleChange = event => {
        this.setState({search: event.target.value})
        this.props.searchCharacter(event.target.value)
        
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        const { searchCharacter } = this.props;
        searchCharacter(this.state.search)
        this.resetInputs();
    }
    
    resetInputs = () => {
        this.setState({search: ''})
    }

    submitHumanSpecies = event => {
        event.preventDefault();
        const { filterSpecies } = this.props;
        const human = this.props.characters[0].results.filter(char => char.species === 'Human')
        
        // const alien = this.props.characters[0].results.filter(char => char === 'Alien')
        this.setState({ human })
        
        filterSpecies(human)
        // filterSpecies(alien)
        
    }
    
    render() {
        return(
            <div className="nav-bar">
                <div>
                <button>ALL CHARACTERS</button>
                <button>ALIENS</button>
                <button onClick={this.submitHumanSpecies}>HUMANS</button>
                </div>
                <h2>HI NAV</h2>
                <div>
                <input type="text" placeholder="search" name="search" value={this.state.search} onChange={this.handleChange}/>
                <button  onClick={this.handleSubmit}>SEARCH</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    characters: state.charactersReducer,
})

const mapDispatchToProps = (dispatch) => ({
    searchCharacter: name => dispatch(searchCharacter(name)),
    filterSpecies: species => dispatch(filterSpecies(species))
})


export default connect(mapStateToProps, mapDispatchToProps)(NavBar)