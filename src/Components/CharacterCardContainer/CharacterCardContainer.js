import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard'
import { connect } from 'react-redux'
import '../CharacterCardContainer/CharacterCardContainer.css'

const CharacterCardContainer = ({characters}) =>{
    // console.log('characters with an s', characters)
    const characterCard = characters.map(char => {
        // console.log('char', char)
        return char.map(character => {
            console.log('character', character)
            return <CharacterCard 
            id={character.id} 
            key={character.id} 
            name={character.name} 
            status={character.status} 
            species={character.species} 
            type={character.type} 
            gender={character.gender} 
            location={character.location} 
            image={character.image}
            />

        })
     })
    return(
        <div className="card-container">
            {/* <h2>CHARACTER CONTAINER</h2> */}
            {characterCard}
        </div>
    )
}
const mapStateToProps = (state) => ({
    characters: state.charactersReducer,
})
export default connect(mapStateToProps)(CharacterCardContainer)