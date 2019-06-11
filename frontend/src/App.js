import React from "react";
<<<<<<< HEAD
import ItemDetailCar from "./components/itemDetails"
import { Provider } from 'react-redux'
import store from "./store"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class  App extends  React.Component {
  render(){
    return (
      <Provider store={store}><Router>
        <ItemDetailCar/>
        </Router></Provider>
      
      
    );
  }
  
=======
import SportForm from "./components/SportForm.js";
import { Provider } from "react-redux";

import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <SportForm />
    </Provider>
  );
>>>>>>> a68c2c3baea3457f57c8106c846dafe78d5a5030
}

export default App;
