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
    const { createUser } = this.props;
    return (
      <Provider store={store}>
        <div>
          <Signup createUser={createUser} />
          <ItemsList />
        </div>
      </Provider>
    );
  }
}


export default App;
