import React from 'react';
import '../LandingPage/LandingPage.css'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return(
        <div className="landing-page">
            <Link to='/characters'><h1 className="enter">RICK AND MORTY</h1></Link>
        </div>
    )
}

export default LandingPage;