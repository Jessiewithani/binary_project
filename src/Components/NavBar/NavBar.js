import React, { Component } from 'react';
import '../NavBar/NavBar.css'
import { connect } from 'react-redux';


class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',

        }
    }
    handleChange = event => {
        this.setState({search: event.target.value})
    }
    // handleSubmit
  
    
    render() {
        // console.log('props')
        console.log('search', this.state.search)
        console.log('props', this.props)
        console.log('state props', this.state.characters)
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
                <button >SEARCH</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    characters: state.charactersReducer
    
  })

export default connect(mapStateToProps)(NavBar)