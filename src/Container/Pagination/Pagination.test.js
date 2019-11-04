import React from 'react';
import { Pagination, mapStateToProps} from '../Pagination/Pagination';

describe('Pagination', () => {
    it.skip('should...', () => {
  
    })
  })

  describe('mapStateToProps in Pagination', () => {
    it.skip('should return an array of characters', () => {
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
      };
      const expected = {
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
        
      }]
      }
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected)
    })
  })