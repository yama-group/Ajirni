import React from "react";
import ItemDetailCar from "./components/itemDetails";
import { Provider } from "react-redux";
import store from "./store";
import SportForm from "./components/SportForm.js";
import CarsForm from "./components/CarsForm.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Signup from "./components/signup";
// import Signin from "./components/signin";
import ItemsList from "./components/itemsList";

class App extends React.Component {
  // constructor(props) {
  //   super(props);

  // }

  render() {
    const { createUser } = this.props;
    return (
      <Provider store={store}>
        <Router>
          {/* <ItemDetailCar />
          <Signup createUser={createUser} />
          <ItemsList /> */}
          {/* <SportForm /> */}
          {/* <Signin /> */}
          <CarsForm />
        </Router>
      </Provider>
    );
  }
}

export default App;
