import React from "react";
import { Provider } from 'react-redux'
import store from './store'

import Signup from "./components/signup";
import ItemsList from "./components/itemsList"


class App extends React.Component {
  // constructor(props) {
  //   super(props);

  // }

  render() {
    return (
      <Provider store={store}>
        <div>
          <Signup />
          <ItemsList />
        </div>
      </Provider>
    );
  }
}

export default App;
