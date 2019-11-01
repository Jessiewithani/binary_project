import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard'

const CharacterCardContainer = ({characterData}) =>{
    console.log('DATA IN CONTAINER', characterData)
    const characterCard = characterData.map(character => {
        return <CharacterCard />
    })
    return(
        <div>
            <h2>INFO</h2>
            {characterCard}
        </div>
    )
}

export default CharacterCardContainer;