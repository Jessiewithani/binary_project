import React from 'react';
import { shallow } from 'enzyme'
import { Pagination, mapStateToProps} from '../Pagination/Pagination';

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
    it('should run nextPage when prev button is clicked', () => {
      
      wrapper.find('button').at(0).simulate('click')

      expect(nextPageMock).toHaveBeenCalled()

    })
    it('should run nextPage when next button is clicked', () => {

      wrapper.find('button').at(1).simulate('click')

      expect(nextPageMock).toHaveBeenCalled()
    })
})

  describe('mapStateToProps in Pagination', () => {

    it('should return an array of characters', () => {
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