import React from "react";
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
  
}

export default App;
