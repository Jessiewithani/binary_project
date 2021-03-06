import React from 'react';
import { shallow } from 'enzyme';
import { NavBar, mapStateToProps, mapDispatchToProps } from '../NavBar/NavBar';
import { searchCharacter, filterSpecies } from '../../actions';

describe('NavBar', () => {

  let wrapper;

  let mockSearchCharacters = jest.fn()

  beforeEach(() =>{
    wrapper = shallow(<NavBar searchCharacter={mockSearchCharacters}/>)
  })
    it('should match the snapshot with the correct data passed in', () => {
      expect(wrapper).toMatchSnapshot();
    })
    it('should update state when handleChange is called', () => {
      const mockEvent = {target: {name: 'search', value: 'Morty Smith'}}
      const expectedSearch = 'Morty Smith'
      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state('search')).toEqual(expectedSearch)
    })
    it('should call submitHumanSpecies when the button is clicked', () => {
      wrapper.instance().submitHumanSpecies = jest.fn();
      const mockEvent = { preventDefault: jest.fn()}

      wrapper.instance().forceUpdate();

      wrapper.find('button').simulate('click', mockEvent)

      expect(wrapper.instance().submitHumanSpecies).toHaveBeenCalled()
    })
    
})

describe('mapStateToProps in NavBar', () => {

  it('should return an array of objects with the characters array', () => {
    const mockState =  { charactersReducer: {
        info: {
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
      }}
      const expected = {characters: {
        info: {
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
    }
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected)
  })
})
describe('mapDispatchToProps in navbar', () => {

  it('calls dispath with a searchCharacter action when searchCharacter is called', () => {
    const mockDispatch = jest.fn();

    const actionToDispatch = searchCharacter('Annie')

    const mappedProps = mapDispatchToProps(mockDispatch);

    mappedProps.searchCharacter('Annie')

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
  it('calls dispatch with a filterSpecies action when filterSpecies is called', () => {
    const mockDispatch = jest.fn();

    const actionToDispatch = filterSpecies(17, 'Annie', 'Alive', 'Human', '', 'Female', 'Anatomy Park', 'https://rickandmortyapi.com/api/character/avatar/17.jpeg');

    const mappedProps = mapDispatchToProps(mockDispatch);

    mappedProps.filterSpecies(17, 'Annie', 'Alive', 'Human', '', 'Female', 'Anatomy Park', 'https://rickandmortyapi.com/api/character/avatar/17.jpeg');

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })

})

  