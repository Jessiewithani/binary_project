import React from 'react';
import CharacterCard from '../../Components/CharacterCard/CharacterCard'
import { connect } from 'react-redux'
import '../CharacterCardContainer/CharacterCardContainer.css'
import { bindActionCreators } from 'redux';
import { searchCharacter, filterSpecies } from '../../actions'
import NavBar from '../NavBar/NavBar'


export const CharacterCardContainer = ({characters, search, species}) => {
    // console.log('rice', characters, search, species)
    const allCharacters = () => {
        return characters.map(char => {
        // console.log('char in container', char)
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

const filteredSpecies= () => {
    console.log('SPECIES', species)
    return species.map(character => {
        console.log('chirp', character)
        return (<CharacterCard 
        // id={character.id} 
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

// const characterCard = search ? filteredCharacters() : allCharacters();

// const speciesCard = species.length > 0 ? filteredSpecies() : allCharacters()
  
  console.log('SPECIES', species)
    return(
        <div>
            <div>
                <NavBar/>
            </div>
        <div className="card-container">
 
            {search === '' && species.length === 0 && allCharacters()}
            {search === '' && species.length !== 0 && filteredSpecies()}
            {species.length === 0 && search !== '' && filteredCharacters()}
            {species.length > 0 && search !== '' && filteredCharacters()}
           
        </div>
        </div>
    )
}


export const mapStateToProps = (state) => ({
    characters: state.charactersReducer,
    search: state.searchCharactersReducer,
    species: state.filterSpeciesReducer,
})

export const mapDispatchToProps = (dispatch ) => (
    bindActionCreators({searchCharacter, filterSpecies}, dispatch)
)



export default connect(mapStateToProps, mapDispatchToProps)(CharacterCardContainer)