import React from 'react'
import Enzyme, { shallow, render, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json'

expect.addSnapshotSerializer(createSerializer({ mode: "deep" }))
Enzyme.configure({
  adapter: new EnzymeAdapter(),
})



global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount