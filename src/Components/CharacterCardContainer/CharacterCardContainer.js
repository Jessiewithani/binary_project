import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard'
import { connect } from 'react-redux'
import '../CharacterCardContainer/CharacterCardContainer.css'

const CharacterCardContainer = ({characters}) =>{
    // console.log('THE WHOLE API DATA', characters)
    const characterCard = characters.map(char => {
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
const filteredCharacters = (props) => {
        console.log('chicken', props)
        props[0].results.filter(character => {
            
            return character.name.toLowerCase().includes(this.state.search.toLowerCase()) 
            //HOW DO I SETSTATE OF MY CHARACTERS TO MY FILTERED CHARACTERS IN REDUX... USE DISPATCH???

        })
    }
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
})


export default connect(mapStateToProps)(CharacterCardContainer)