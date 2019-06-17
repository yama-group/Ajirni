import  React, { Fragment }  from "react";
import ItemDetail from "./components/itemDetails";
import { Provider } from "react-redux";
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import store from "./store";
// import SportForm from "./components/SportForm.js";
// import RealEstate from "./components/realEstate.js";
// import Tools from "./components/tools.js";
import Header from "./components/header.js";
import Home from "./components/home.js";
import Footer from "./components/footer.js";
import UserItems from "./components/userItems.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserProfile from "./components/userProfile";

import Signup from "./components/signup";
// import SignIn from "./components/signin";
import ItemsList from "./components/itemsList";
import CarsForm from "./components/CarsForm";
import Alerts from './components/alerts'


const alertOptions = {
  position: positions.UP_CENTER,
  timeout: 50000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}

class App extends React.Component {
  render() {
    // const { createUser } = this.props;
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions} >
          
            <Router>
              <Header />
              <Alerts />
              <div className="maincontainer">
                <Route path="/" exact component={Home} />
                <Route path="/user" exact component={UserProfile} />
                <Route path="/Category" component={ItemsList} />
                <Route path="/itemDetail" exact component={ItemDetail} />
                <Route path="/carsForm" exact component={CarsForm} />
                <Route path="/itemsList" exact component={ItemsList} />
                <Route path="/userItems" exact component={UserItems} />
                <Route path="/signup" exact component={Signup} />
                {/* <Signup createUser={Signup} /> */}
                {/* <SignIn /> */}
                {/* <UserItems /> */}
                {/* <ItemsList /> */}
                {/* <SportForm /> */}
                {/* <CarsForm /> */}
                {/* <RealEstate /> */}
                {/* <Tools /> */}
              </div>
              <Footer />
            </Router>
          
        </AlertProvider>
      </Provider>
    );
  }
}

export default App;
