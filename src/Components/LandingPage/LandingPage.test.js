import React from 'react';
import LandingPage from '../LandingPage/LandingPage';
import { shallow } from 'enzyme'

describe('App', () => {
    it('should match the snapshot with the correct data passed in', () => {
      const wrapper = shallow(<LandingPage/>)
      
      expect(wrapper).toMatchSnapshot()
    });
    
})
  