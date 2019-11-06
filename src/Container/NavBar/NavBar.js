import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchCharacter, filterSpecies } from '../../actions'
import '../NavBar/NavBar.css'

export class NavBar extends Component {
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
    resetInputs = () => {
        this.setState({search: ''})
    }

    submitHumanSpecies = event => {
        event.preventDefault();
        const { filterSpecies } = this.props;
        const human = this.props.characters[0].results.filter(char => char.species === 'Human')
        this.setState({ human })
        filterSpecies(human)
    }
    render() {
        return(
            <div className="nav-bar">
                <button className="nav-button" onClick={this.submitHumanSpecies}>SHOW  HUMANS  ONLY</button>
                <input type="text" placeholder="search characters" name="search" value={this.state.search} onChange={this.handleChange}/>
            </div>
        )
    }
}

export const mapStateToProps = (state) => ({
    characters: state.charactersReducer,
})

export const mapDispatchToProps = (dispatch) => ({
    searchCharacter: name => dispatch(searchCharacter(name)),
    filterSpecies: species => dispatch(filterSpecies(species))
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)