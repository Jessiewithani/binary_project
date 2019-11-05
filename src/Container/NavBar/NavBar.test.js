import React from 'react';
import { NavBar, mapDispatchToProps } from '../NavBar/NavBar';
import { searchCharacter, filterSpecies } from '../../actions';
import { shallow } from 'enzyme'

describe('NavBar', () => {
    it('should match the snapshot with the correct data passed in', () => {
      const wrapper = shallow(<NavBar/>)
      expect(wrapper).toMatchSnapshot();
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
  