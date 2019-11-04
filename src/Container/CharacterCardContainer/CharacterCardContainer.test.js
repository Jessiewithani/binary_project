import React from 'react';
import { CharacterCardContainer, mapStateToProps} from '../CharacterCardContainer/CharacterCardContainer';

describe('CharacterCardContainer', () => {
    it.skip('should...', () => {
      




    })
  })

describe('mapStateToProps in CharacterCardContainer', () => {
  it.skip('should return an array with the characters information in it', () => {
    const mockState = {
      characters: [{
        id: 17,
        name: 'Annie',
        status: 'Alive',
        species: 'Human',
        type: '',
        gender: 'Female',
        location: 'Anatomy Park',
        image: 'https://rickandmortyapi.com/api/character/avatar/17.jpeg'
      }, {
        id: 18,
        name: 'Antenna Morty',
        status: 'Alive',
        species: 'Human',
        type: 'Human with antennae',
        gender: 'Male',
        location: 'Citadel of Ricks',
        image: 'https://rickandmortyapi.com/api/character/avatar/18.jpeg'
      
    }],
      saveCharacters: 'SAVE_CHARACTERS'
    }

    const expected =  [{
      id: 17,
      name: 'Annie',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Female',
      location: 'Anatomy Park',
      image: 'https://rickandmortyapi.com/api/character/avatar/17.jpeg'
    }, {
      id: 18,
      name: 'Antenna Morty',
      status: 'Alive',
      species: 'Human',
      type: 'Human with antennae',
      gender: 'Male',
      location: 'Citadel of Ricks',
      image: 'https://rickandmortyapi.com/api/character/avatar/18.jpeg'
    
  }]
  
    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected)
  })
  it.skip('should return a string with the character\'s name', () => {
    const mockState = {
      search: 'Morty Smith',
      searchCharacter: 'SEARCH_CHARACTERS'
    }

    const expected = {
      search: 'Morty Smith'
    }

    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected)
  })
  it.skip('should give back am array of the human species', () => {
    const mockState = {
      species: [{
        
          id: 17,
          name: 'Annie',
          status: 'Alive',
          species: 'Human',
          type: '',
          gender: 'Female',
          location: 'Anatomy Park',
          image: 'https://rickandmortyapi.com/api/character/avatar/17.jpeg'
        },
        {
          id: 18,
          name: 'Antenna Morty',
          status: 'Alive',
          species: 'Human',
          type: 'Human with antennae',
          gender: 'Male',
          location: 'Citadel of Ricks',
          image: 'https://rickandmortyapi.com/api/character/avatar/18.jpeg'
        
      }],
      filterSpecies: 'FILTER_SPECIES'
    }
    const expected = {
      species: [{
        
        id: 17,
        name: 'Annie',
        status: 'Alive',
        species: 'Human',
        type: '',
        gender: 'Female',
        location: 'Anatomy Park',
        image: 'https://rickandmortyapi.com/api/character/avatar/17.jpeg'
      },
      {
        id: 18,
        name: 'Antenna Morty',
        status: 'Alive',
        species: 'Human',
        type: 'Human with antennae',
        gender: 'Male',
        location: 'Citadel of Ricks',
        image: 'https://rickandmortyapi.com/api/character/avatar/18.jpeg'
      
    }]
    }
    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected)
  })
})

describe('mapDispatchToProps', () => {
  it.skip('should', () => {

  })
})
  