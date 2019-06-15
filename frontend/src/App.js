import React from "react";
import ItemDetailCar from "./components/itemDetails";
import { Provider } from "react-redux";
import store from "./store";
<<<<<<< HEAD
=======
import SportForm from "./components/sportForm.js";
import CarsForm from "./components/carsForm.js";
import RealEstate from "./components/realEstate.js";
import Tools from "./components/tools.js";
import Header from "./components/header.js";
import Home from "./components/home.js";
import Footer from "./components/footer.js";
import UserItems from "./components/userItems.js";
>>>>>>> 471649feb2f68ad33739f34125852afd05b747fd
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Signup from "./components/signup";
// import SignIn from "./components/signIn";
import ItemsList from "./components/itemsList";
import SportForm from "./components/SportForm.js";
import CarsForm from "./components/CarsForm.js";

class App extends React.Component {
  render() {
    // const { createUser } = this.props;
    return (
      <Provider store={store}>
        <Router>
<<<<<<< HEAD
          {/* <ItemDetailCar />
          <Signup createUser={createUser} /> */}
          <ItemsList />
          {/* <SportForm /> */}
          {/* <Signin /> */}
          {/* <CarsForm /> */}
=======
          <Header />
          <div className="maincontainer">
            <Route path="/" exact component={Home} />
            <Route path="/Category" component={ItemsList} />
            {/* <Route path="/Tools" exact component={Tools} /> */}
            {/* <ItemDetailCar />
          <Signup createUser={createUser} />
          <ItemsList />
          <SportForm /> */}
            {/* <Signin /> */}
            {/* <CarsForm />
          <RealEstate /> */}
            {/* <Tools /> */}
            {/* <UserItems /> */}
          </div>
          <Footer />
>>>>>>> 471649feb2f68ad33739f34125852afd05b747fd
        </Router>
      </Provider>
    );
  }
}

export default App;
