import React from 'react';
import { NavBar, mapStateToProps, mapDispatchToProps } from '../NavBar/NavBar';
import { searchCharacter, filterSpecies } from '../../actions';
import { shallow } from 'enzyme';
// import { searchCharacter } from '../../actions'

describe('NavBar', () => {
  let wrapper;
    it('should match the snapshot with the correct data passed in', () => {
       wrapper = shallow(<NavBar/>)
      expect(wrapper).toMatchSnapshot();
    })
    it.skip('should update state when handleChange is called', () => {
      const mockEvent = {target: {name: 'search', value: 'Morty Smith'}}
      const expectedSearch = 'Morty Smith'

      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state('search')).toEqual(expectedSearch)
    })
  })

describe('mapStateToProps in NavBar', () => {
  it.skip('should return an array of objects with the characters array', () => {
  //   const mockState = {
  //     characters: [
  //     {
  //       info: {
  //         count: 493,
  //         pages: 25,
  //         next: 'http://rickandmortyapi.com/api/character/?page=2',
  //         prev: ''
  //       },
  //       results: [
  //         {
  //           id: 1,
  //           name: 'Rick Sanchez',
  //           status: 'Alive',
  //           species: 'Human',
  //           type: '',
  //           gender: 'Male',
  //           origin: {
  //             name: 'Earch (C-137)',
  //             url: 'https://rickandmortyapi.com/api/location/1'
  //           },
  //           location: {
  //             name: 'Earth (Replacement Dimension)',
  //             url: 'https://rickandmortyapi.com/api/location/20'
  //           },
  //           image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  //           episode: [
  //             "https://rickandmortyapi.com/api/episode/1",
  //             "https://rickandmortyapi.com/api/episode/2",
  //             "https://rickandmortyapi.com/api/episode/3",
  //             "https://rickandmortyapi.com/api/episode/4",
  //             "https://rickandmortyapi.com/api/episode/5",
  //             "https://rickandmortyapi.com/api/episode/6",
  //             "https://rickandmortyapi.com/api/episode/7",
  //             "https://rickandmortyapi.com/api/episode/8",
  //             "https://rickandmortyapi.com/api/episode/9",
  //             "https://rickandmortyapi.com/api/episode/10",
  //             "https://rickandmortyapi.com/api/episode/11",
  //             "https://rickandmortyapi.com/api/episode/12",
  //             "https://rickandmortyapi.com/api/episode/13",
  //             "https://rickandmortyapi.com/api/episode/14",
  //             "https://rickandmortyapi.com/api/episode/15",
  //             "https://rickandmortyapi.com/api/episode/16",
  //             "https://rickandmortyapi.com/api/episode/17",
  //             "https://rickandmortyapi.com/api/episode/18",
  //             "https://rickandmortyapi.com/api/episode/19",
  //             "https://rickandmortyapi.com/api/episode/20",
  //             "https://rickandmortyapi.com/api/episode/21",
  //             "https://rickandmortyapi.com/api/episode/22",
  //             "https://rickandmortyapi.com/api/episode/23",
  //             "https://rickandmortyapi.com/api/episode/24",
  //             "https://rickandmortyapi.com/api/episode/25",
  //             "https://rickandmortyapi.com/api/episode/26",
  //             "https://rickandmortyapi.com/api/episode/27",
  //             "https://rickandmortyapi.com/api/episode/28",
  //             "https://rickandmortyapi.com/api/episode/29",
  //             "https://rickandmortyapi.com/api/episode/30",
  //             "https://rickandmortyapi.com/api/episode/31"
  //           ],
  //           url: 'https://rickandmortyapi.com/api/character/1',
  //           created: '2017-11-04T18:48:46.250Z'
  //         }
  //       ]
  //     }
  //   ]
  //   }
    
  //   const expected = {
  //     characters: [
  //     {
  //       info: {
  //         count: 493,
  //         pages: 25,
  //         next: 'http://rickandmortyapi.com/api/character/?page=2',
  //         prev: ''
  //       },
  //       results: [
  //         {
  //           id: 1,
  //           name: 'Rick Sanchez',
  //           status: 'Alive',
  //           species: 'Human',
  //           type: '',
  //           gender: 'Male',
  //           origin: {
  //             name: 'Earch (C-137)',
  //             url: 'https://rickandmortyapi.com/api/location/1'
  //           },
  //           location: {
  //             name: 'Earth (Replacement Dimension)',
  //             url: 'https://rickandmortyapi.com/api/location/20'
  //           },
  //           image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  //           episode: [
  //             "https://rickandmortyapi.com/api/episode/1",
  //             "https://rickandmortyapi.com/api/episode/2",
  //             "https://rickandmortyapi.com/api/episode/3",
  //             "https://rickandmortyapi.com/api/episode/4",
  //             "https://rickandmortyapi.com/api/episode/5",
  //             "https://rickandmortyapi.com/api/episode/6",
  //             "https://rickandmortyapi.com/api/episode/7",
  //             "https://rickandmortyapi.com/api/episode/8",
  //             "https://rickandmortyapi.com/api/episode/9",
  //             "https://rickandmortyapi.com/api/episode/10",
  //             "https://rickandmortyapi.com/api/episode/11",
  //             "https://rickandmortyapi.com/api/episode/12",
  //             "https://rickandmortyapi.com/api/episode/13",
  //             "https://rickandmortyapi.com/api/episode/14",
  //             "https://rickandmortyapi.com/api/episode/15",
  //             "https://rickandmortyapi.com/api/episode/16",
  //             "https://rickandmortyapi.com/api/episode/17",
  //             "https://rickandmortyapi.com/api/episode/18",
  //             "https://rickandmortyapi.com/api/episode/19",
  //             "https://rickandmortyapi.com/api/episode/20",
  //             "https://rickandmortyapi.com/api/episode/21",
  //             "https://rickandmortyapi.com/api/episode/22",
  //             "https://rickandmortyapi.com/api/episode/23",
  //             "https://rickandmortyapi.com/api/episode/24",
  //             "https://rickandmortyapi.com/api/episode/25",
  //             "https://rickandmortyapi.com/api/episode/26",
  //             "https://rickandmortyapi.com/api/episode/27",
  //             "https://rickandmortyapi.com/api/episode/28",
  //             "https://rickandmortyapi.com/api/episode/29",
  //             "https://rickandmortyapi.com/api/episode/30",
  //             "https://rickandmortyapi.com/api/episode/31"
  //           ],
  //           url: 'https://rickandmortyapi.com/api/character/1',
  //           created: '2017-11-04T18:48:46.250Z'
  //         }
  //       ]
  //     }
  //   ]
  // }

    // const mockState = {
    //   characters: ['bob']
    // }
    // const expected = {
    //   characters: ['bob']
    // }
    
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected)
  })
})


describe('mapDispatchToProps in navbar', () => {
  it('calls dispath with a searchCharacter action when searchCharacter is called', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = searchCharacter(17, 'Annie', 'Alive', 'Human', '', 'Female', 'Anatomy Park', 'https://rickandmortyapi.com/api/character/avatar/17.jpeg')

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.searchCharacter(17, 'Annie', 'Alive', 'Human', '', 'Female', 'Anatomy Park', 'https://rickandmortyapi.com/api/character/avatar/17.jpeg')

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
  