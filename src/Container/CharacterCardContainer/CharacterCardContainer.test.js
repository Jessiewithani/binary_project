import React from 'react';
import { CharacterCardContainer, mapStateToProps, mapDispatchToProps} from '../CharacterCardContainer/CharacterCardContainer';
import { searchCharacter } from '../../actions';
import { shallow } from 'enzyme'

describe('CharacterCardContainer', () => {
  it.skip('should match the snapshot with all the correct data passed in', () => {
    const mockCharacters = {info: {
      count: 493,
      pages: 25,
      next: 'http://rickandmortyapi.com/api/character/?page=2',
      prev: ''
    },
    results: [
      {
        id: 1,
        name: 'Rick Sanchez',
        status: 'Alive',
        species: 'Human',
        type: '',
        gender: 'Male',
        origin: {
          name: 'Earch (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1'
        },
        location: {
          name: 'Earth (Replacement Dimension)',
          url: 'https://rickandmortyapi.com/api/location/20'
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        episode: [
          "https://rickandmortyapi.com/api/episode/1",
          "https://rickandmortyapi.com/api/episode/2",
        ],
        url: 'https://rickandmortyapi.com/api/character/1',
        created: '2017-11-04T18:48:46.250Z'
      }
    ]
    }
    const wrapper = shallow(<CharacterCardContainer species={jest.fn()} characters={mockCharacters.results}/>)
    expect(wrapper).toMatchSnapshot()
  })
})   

describe('mapStateToProps in CharacterCardContainer', () => {
  it('should return an array with the characters information in it', () => {
    const mockState = {
      charactersReducer: {  
        info: { 
            count: 3, 
            pages: 34, 
            next: 'https://next.com',
            prev: ''},
        results: [ 
            {
                id: 1, 
                name: 'Rick Sanchez', 
                status: 'Alive', 
                species: 'Human', 
                type: '', 
                gender: 'Male', 
                    location: 'Earth (Replacement Dimension)', 
                image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
            }
        ]
    },
      saveCharacters: 'SAVE_CHARACTERS'
    }

    const expected = { characters:{  
      info: { 
          count: 3, 
          pages: 34, 
          next: 'https://next.com',
          prev: ''},
      results: [ 
          {
              id: 1, 
              name: 'Rick Sanchez', 
              status: 'Alive', 
              species: 'Human', 
              type: '', 
              gender: 'Male', 
                  location: 'Earth (Replacement Dimension)', 
              image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
          }
      ]
    }
  }
    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected)
})
  it('should return a string with the character\'s name', () => {
    const mockState = {

      searchCharactersReducer: 'Morty Smith',

      searchCharacter: 'SEARCH_CHARACTERS'
    }

    const expected = {
      search: 'Morty Smith'
    }

    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected)
  })
  it('should give back am array of the human species', () => {
    const mockState = {
      filterSpeciesReducer: [{
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
  it('calls dispatch with a searchCharacter action when searchCharacter is called', () => {
    const mockDispatch = jest.fn();

    const actionToDispatch = searchCharacter( 'Rick Sanchez' )

    const mappedProps = mapDispatchToProps(mockDispatch);

    mappedProps.searchCharacter('Rick Sanchez')

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
})

  