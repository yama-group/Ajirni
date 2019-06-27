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




import moxios from 'moxios';
import tstore from '../src/store'
import { testStore } from '../Utils'
import { getAllUsers } from '../src/actions/usersAct'
import usersReducer from '../src/reducers/usersReducer'
import itemsReducer from '../src/reducers/itemsReducer'
//import * as actions from '../src/actions/usersAct'
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
  it('should handle items', () => {
    expect(
      itemsReducer([], {
        type: types.FETCH_ITEMS,
        items: [],
        item: {},
        item_id: ""
      })
    ).toEqual({ items: undefined, item: undefined, item_id: undefined })
  })

})






describe('fetches all users', () => {
  beforeEach(() => {
    moxios.install()
  })

  afterEach(() => {
    moxios.uninstall()
  })

  test('store is updated correctly', () => {
    const expectedState = [{
      email: "moh@gmail.com",
      first_name: "moha",
      id: 10,
      image_url: "img",
      last_name: "moha",
      phone: "35423",
      username: "moha1"
    },
    {
      email: "example@gmail.com",
      first_name: "exam",
      id: 10,
      image_url: "img",
      last_name: "exam",
      phone: "35423",
      username: "exam"
    }]
    const store = testStore;

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState
      })
    })

    // return (dispatch) => {
    //   return request.then((data) => {
    //     dispatch({ type: types.FETCH_USERS, payload: data });
    //   });
    // }

    return store.dispatch(getAllUsers()).then(() => {
      const newState = store.getState();
      expect(newState.usersReducer).toBe(expectedState)
    })
  })
  // it('should call a getAllUsers function', () => {
  //   getAllUsers()("/allusers/", {}).then(response => {
  //     expect(response).toEqual({
  //       data: {},
  //     });
  //   });
  // })

  //axios.js file
  // export default {
  //   get: jest.fn(() => Promise.resolve({ data: {} }))
  // }

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




