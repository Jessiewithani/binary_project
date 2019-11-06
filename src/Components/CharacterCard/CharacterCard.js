import React from 'react';
import '../CharacterCard/CharacterCard.css'

const CharacterCard = ({ id, name, status, species, type, gender, location, image}) => {
    // console.log(location);
    return(
        <section className="card">
            <div className="card-header">
                <div className="character-image">
                    <img src={image} alt="" />
                </div>
                <div className="character-name">
                    <h2>{name}</h2>
                </div>
            </div>
            <div className="character-info-container">
                <div className="status-info">
                    <span>status:</span><h4>{status}</h4>
                </div>
                <div className="info">
                    <span>species:</span><h4>{species}</h4>
                </div>
                <div className="info">
                    <span>type:</span><h4>{type}</h4>
                </div>
                <div className="info">
                    <span>gender:</span><h4>{gender}</h4>
                </div>
                <div className="info">
                    <span>location:</span><h4>{location.name}</h4>
                </div>
            </div>
            {/* <h3>{image}</h3> */}
        </section>
    )
}

export default CharacterCard;