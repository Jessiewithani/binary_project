import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import { shallow } from 'enzyme';

describe('CharacterCard', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <CharacterCard 
      key={11} 
      name="Albert Einstein" 
      status="Dead" 
      species="Human" 
      type="" 
      gender="Male" 
      location="Earth (Replacement Dimension" 
      image="https://rickandmortyapi.com/api/character/avatar/11.jpeg" />
    )
  })
  it('should match the snapshot with all the correct data passed in', () => {
    expect(wrapper).toMatchSnapshot()
    })
  })
  