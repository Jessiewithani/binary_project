import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard'
import { connect } from 'react-redux'
import '../CharacterCardContainer/CharacterCardContainer.css'
import { bindActionCreators } from 'redux';
import { searchCharacter } from '../../actions'

export const CharacterCardContainer = ({characters, search}) => {
    // console.log('THE WHOLE API DATA', characters)
    
    const allCharacters = () => {
        return characters.map(char => {
        console.log('char in container', char)
        return char.results.map(character => {
            // console.log('character', character)
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
}

 const filteredCharacters = () => {
        // e.preventDefault()
        console.log('CHICKEN', characters)
        
        let filtered = characters[0].results.filter(character => {
            return character.name.toLowerCase().includes(search.toLowerCase()) 
        })
        return filtered.map(character => {
            // console.log('character', character)
            return (<CharacterCard 
            id={character.id} 
            key={character.id} 
            name={character.name} 
            status={character.status} 
            species={character.species} 
            type={character.type} 
            gender={character.gender} 
            location={character.location} 
            image={character.image}
            />) 
    })
}
const characterCard = search ? filteredCharacters() : allCharacters();
    return(
        <div className="card-container">
            {/* <h2>CHARACTER CONTAINER</h2> */}
            {characterCard}
            {/* <button>{characters.next}</button> */}
        </div>
    )
}


const mapStateToProps = (state) => ({
    characters: state.charactersReducer,
    search: state.searchCharactersReducer
})

const mapDispatchToProps = (dispatch ) => (
    bindActionCreators({searchCharacter}, dispatch)
)



export default connect(mapStateToProps, mapDispatchToProps)(CharacterCardContainer)