import React, { Component } from 'react';
import '../NavBar/NavBar.css'
import { connect } from 'react-redux';
import { searchCharacter, filterSpecies } from '../../actions'


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

        // console.log('FILTERSPECIES', filterSpecies)
        const human = this.props.characters[0].results.filter(char => char.species === 'Human')
        console.log('MAPCHARACTERS', this.props.characters)
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