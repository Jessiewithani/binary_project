import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard'
import { connect } from 'react-redux'
import '../CharacterCardContainer/CharacterCardContainer.css'
import { bindActionCreators } from 'redux';
import { searchCharacter, filterSpecies } from '../../actions'

export const CharacterCardContainer = ({characters, search}) => {
    const allCharacters = () => {
        return characters.map(char => {
        console.log('char in container', char)
        return char.results.map(character => {
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
        console.log('FILTERED CHARACTERS', characters)
        
        let filtered = characters[0].results.filter(character => {
            return character.name.toLowerCase().includes(search.toLowerCase()) 
        })
        return filtered.map(character => {
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

// const humans = () => {
//     let humanSpecies = characters[0].results.filter(character => {
//         if(character.species === 'Human') {
//             console.log('HUMANS', character.species)
//             return character.includes(species.toLowerCase())
//         }
//     }) 
//     return humanSpecies.map(character => {
//         return (<CharacterCard 
//             id={character.id} 
//             key={character.id} 
//             name={character.name} 
//             status={character.status} 
//             species={character.species} 
//             type={character.type} 
//             gender={character.gender} 
//             location={character.location} 
//             image={character.image}
//             />) 
//     })
// }
const characterCard = search ? filteredCharacters() : allCharacters();

    return(
        <div className="card-container">
            {characterCard}
        </div>
    )
}


const mapStateToProps = (state) => ({
    characters: state.charactersReducer,
    search: state.searchCharactersReducer,
    species: state.filterSpeciesReducer,
})

const mapDispatchToProps = (dispatch ) => (
    bindActionCreators({searchCharacter}, dispatch),
    bindActionCreators({filterSpecies}, dispatch)
)



export default connect(mapStateToProps, mapDispatchToProps)(CharacterCardContainer)