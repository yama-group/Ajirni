import React from 'react';
import Signup from './frontend/components/signup'
import { shallow } from 'enzyme';

test('should exist', () => {

  const div = shallow(<Signup />)
  expect(div).toHaveLength(1)

})
