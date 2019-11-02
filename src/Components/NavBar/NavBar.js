import React, { Component } from 'react';
import '../NavBar/NavBar.css'

class NavBar extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return(
            <div className="nav-bar">
                <div>
                <button>CHARACTERS</button>
                <button>LOCATION</button>
                </div>
                <h2>HI NAV</h2>
                <div>
                <input type="text" placeholder="search" name="search" />
                <button>SEARCH</button>
                </div>
            </div>
        )
    }
}

export default NavBar;