import React from "react";
import ItemDetailCar from "./components/itemDetails";
import { Provider } from "react-redux";
import store from "./store";
import SportForm from "./components/SportForm.js";
import CarsForm from "./components/CarsForm.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          {/* <ItemDetailCar /> */}
          {/* <SportForm /> */}
          <CarsForm />
        </Router>
      </Provider>
    );
  }
}

export default App;
