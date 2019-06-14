import React from "react";
import ItemDetailCar from "./components/itemDetails";
import { Provider } from "react-redux";
import store from "./store";
import SportForm from "./components/sportForm.js";
import CarsForm from "./components/carsForm.js";
import RealEstate from "./components/realEstate.js";
import Tools from "./components/tools.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UserProfile from "./components/userProfile"

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
          <UserProfile/>
          <ItemDetailCar />
          <Signup createUser={createUser} />
          <ItemsList />
          <SportForm />
          {/* <Signin /> */}
          <CarsForm />
          <RealEstate />
          <Tools />
        </Router>
      </Provider>
    );
  }
}

export default App;
