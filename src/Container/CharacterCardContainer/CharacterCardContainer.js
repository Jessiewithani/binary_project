import React from 'react';
import NavBar from '../NavBar/NavBar'
import CharacterCard from '../../Components/CharacterCard/CharacterCard'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { searchCharacter, filterSpecies } from '../../actions'
import '../CharacterCardContainer/CharacterCardContainer.css'
import { loadingGif } from '../../assets/loading-gif.webp'

export const CharacterCardContainer = ({characters, search, species, isLoading}) => {
    const allCharacters = () => {
        return characters.map(char => {
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
    return species.map(character => {
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
                {/* {isLoading && <img src={loadingGif} alt='loading-icon' />}
                {!isLoading && allCharacters()} */}
            </div>
        </div>
    )
}

export const mapStateToProps = (state) => ({
    characters: state.charactersReducer,
    search: state.searchCharactersReducer,
    species: state.filterSpeciesReducer,
    isLoading: state.toggleLoadingReducer
})

export const mapDispatchToProps = (dispatch ) => (
    bindActionCreators({searchCharacter, filterSpecies}, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(CharacterCardContainer)