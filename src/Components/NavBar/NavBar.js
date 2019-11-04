import React, { Component } from 'react';
import '../NavBar/NavBar.css'
import { connect } from 'react-redux';
import { searchCharacter } from '../../actions'


class NavBar extends Component {
    constructor() {
        super()
        this.state = {
            search: '',

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
    
    render() {
        // console.log('props')
        // console.log('search', this.state.search)
        // console.log('props', this.props)
        // console.log('state props', this.state.characters)
        return(
            <div className="nav-bar">
                <div>
                <button>ALL CHARACTERS</button>
                <button>ALIENS</button>
                <button>HUMANS</button>
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
    searchCharacter: name => dispatch(searchCharacter(name))
})


export default connect(mapStateToProps, mapDispatchToProps)(NavBar)