import React from 'react';
import '../CharacterCard/CharacterCard.css'

const CharacterCard = ({id, name, status, species, type, gender, location, image}) => {
    // console.log(location);
    return(
        <section className="card">
        {/* <h1>hello card you a fucker too</h1> */}
            <img src={image} alt="" />
            <h2>{name}</h2>
            <h3>status: {status}</h3>
            <h3>species: {species}</h3>
            <h3>type: {type}</h3>
            <h3>gender: {gender}</h3>
            <h3>location: {location.name}</h3>
            {/* <h3>{image}</h3> */}
        </section>
    )
}

export default CharacterCard;