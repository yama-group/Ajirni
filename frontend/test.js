import React from 'react';
import { shallow } from 'enzyme';
import enzyme from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import Signup from './frontend/components/signup'

enzyme.configure({
  adapter: new EnzymeAdapter(),
  disableLifecycleMethods: true
})

describe('<Signup />', () => {
  it('render 1 <Signup /> ', () => {
    const div = shallow(<Signup />)
    expect(div).toHaveLength(1)
  })
})