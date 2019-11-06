import React from 'react';
import { App, mapDispatchToProps } from '../App/App';
import { saveCharacters } from '../../actions'
import { getCharacters } from '../../apiCalls/apiCalls'
import { shallow } from 'enzyme';

jest.mock('../../apiCalls/apiCalls')

describe('App', () => {
  beforeEach(() => {
    getCharacters.mockImplementation(() => {
      return Promise.resolve([{
        name: 'Morty Smith',
        status: 'Alive',
        species: 'Human',
        type: '',
        gender: 'Male',
        location: 'Earch (Replaement Dimension'
    }]);
  })
})
  it('should match the snapshot with the correct data passing through', () => {
    const wrapper = shallow(<App/>)
    expect(wrapper).toMatchSnapshot()
  })
  it('should retrieve characters after mounting', () => {
    shallow(<App/>);
    expect(getCharacters).toHaveBeenCalled()
  })
})

describe('mapDispatchToProps in App', () => {
  it('calls dispatch with a saveCharacters action when allCharacters is called', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = saveCharacters([{
      name: 'Morty Smith',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
      location: 'Earch (Replaement Dimension'
    }, {
      name: 'Big Head Morty',
      status: 'unknown',
      species: 'Human',
      type: 'Humam with giant head',
      gender: 'Male',
      location: 'Citadel of Ricks'
      }]);

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.allCharacters([{
      name: 'Morty Smith',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
      location: 'Earch (Replaement Dimension'
    } , {
        name: 'Big Head Morty',
        status: 'unknown',
        species: 'Human',
        type: 'Humam with giant head',
        gender: 'Male',
        location: 'Citadel of Ricks'
      }
    ])

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
})
