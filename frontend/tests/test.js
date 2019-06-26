// import * as actions from './actions/itemsActions'
// import * as types from './actions/types'
// import React from 'react';
// import Enzyme from 'enzyme';
// import { shallow } from 'enzyme';
// import EnzymeAdapter from 'enzyme-adapter-react-16';

// Enzyme.configure({
//   adapter: new EnzymeAdapter(),
//   disableLifecycleMethods: true
// })
//import store from "../store";
// import { Provider } from "react-redux";
// import Signup from './components/signup';

// const setUP = (props = {}) => {
//   const component = shallow(<Signup />)
//   return component
// }


import usersReducer from '../src/reducers/usersReducer'
import itemsReducer from '../src/reducers/itemsReducer'
import * as actions from '../src/actions/usersAct'
import * as types from '../src/actions/types'




describe('users reducer', () => {
  it('should return the initial state', () => {
    const expectedAction = {
      users: []
    }
    expect(usersReducer(undefined, {})).toEqual(expectedAction)
  })

  it('should handle users', () => {
    expect(
      usersReducer([], {
        type: types.FETCH_USERS,
        users: []
      })
    ).toEqual({ users: undefined })
  })

})


describe('items reducer', () => {
  it('should return the initial state', () => {
    const expectedAction = {
      items: [],
      item: {},
      item_id: ""
    }
    expect(itemsReducer(undefined, {})).toEqual(expectedAction)
  })



})




// describe('components', () => {

//   it('sign up should render without error ', () => {
//     const signup = shallow(<Signup />)
//     console.log(signup.debug());
//     const wrapper = signup.find(".register-area ptb-100")
//     expect(wrapper.length).toBe(1)
//   })

// })
// describe('actions', () => {
//   it('should create an action to add a todo', () => {
//     const text = 'Finish docs'
//     const expectedAction = {
//       type: types.ADD_TODO,
//       text: text
//     }
//     expect(actions.addTodo(text)).toEqual(expectedAction)
//   })
// })




