import React from "react";
import ItemDetail from "./components/itemDetails";
import { Provider } from "react-redux";
import store from "./store";
import SportForm from "./components/sportForm.js";
import RealEstate from "./components/realEstate.js";
import Tools from "./components/tools.js";
import Header from "./components/header.js";
import Home from "./components/home.js";
import Footer from "./components/footer.js";
import UserItems from "./components/userItems.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserProfile from "./components/userProfile";
import { connect } from "react-redux";

import Signup from "./components/signup";
import SignIn from "./components/signin";
import ItemsList from "./components/itemsList";
import CarsForm from "./components/carsForm";
import Likes from "./components/likes";
import ProtectedRoute from "./components/protect";

class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Header />
          <div className="maincontainer">
            <Route path="/" exact component={Home} />
            <ProtectedRoute
              token={this.props.token}
              userId={this.props.user_id}
              path="/user"
              exact
              component={UserProfile}
            />
            <Route path="/Category" component={ItemsList} />
            <Route path="/itemDetail" exact component={ItemDetail} />
            <Route path="/carsForm" exact component={CarsForm} />
            <Route path="/itemsList" exact component={ItemsList} />
            <Route path="/RealEstate" exact component={RealEstate} />
            <Route path="/userItems" exact component={UserItems} />
            <Route path="/likes" exact component={Likes} />
            <Route path="/signin" exact component={SignIn} />
            <Route path="/tools" exact component={Tools} />
          </div>
          <Footer />
        </Router>
      </Provider>
    );
  }
}

const mapStateToProps = state => ({
  user_id: state.signin.userId,
  token: state.signin.token
});

export default connect(mapStateToProps)(App);
