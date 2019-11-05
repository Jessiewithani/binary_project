import React from 'react';
import { Pagination, mapStateToProps} from '../Pagination/Pagination';
import { shallow } from 'enzyme'

describe('Pagination', () => {
  let wrapper;
  let next = "https://rickandmortyapi.com/api/character/?page=3"
  let prev = "https://rickandmortyapi.com/api/character/?page=2"
  let nextPageMock = jest.fn()
  beforeEach(() => {
    wrapper = shallow(<Pagination nextPage ={nextPageMock} next={next} prev={prev}/>)
  })
    it('should match the snapshot with the correct data passed in', () => {

      expect(wrapper).toMatchSnapshot()

    })
    it('should run nextPage when button is clicked', () => {
      
      wrapper.find('button').at(1).simulate('click')

      expect(nextPageMock).toHaveBeenCalled()

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