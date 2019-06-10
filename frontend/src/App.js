import React from "react";
import ItemDetailCar from "./components/itemDetails"
import { Provider } from 'react-redux'
import store from "./store"
class  App extends  React.Component {
  render(){
    return (
      <Provider store={store}><ItemDetailCar/></Provider>
      
      
    );
  }
  
}

export default App;
