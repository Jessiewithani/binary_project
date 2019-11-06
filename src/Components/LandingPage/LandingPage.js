import React from 'react';
import '../LandingPage/LandingPage.css'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return(
        <div className="landing-page">
            <Link className="link-to-enter" to='/characters'><h1 className="enter">CLICK MY TERRY FOLD</h1></Link>
        </div>
    )
}

export default LandingPage;