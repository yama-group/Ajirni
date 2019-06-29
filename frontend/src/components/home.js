import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { search } from "../actions/itemAction";
import { Alert } from "reactstrap";
import AliceCarousel from 'react-alice-carousel';
import "./alice-carousel.css";
import Slider from "./slider"
import RandomUsers from './randomUsers'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: "",
      category_id: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    this.setState({
      category_id: this.props.category_id,
      user_id: this.props.user_id
    });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  search(e, c) {
    e.preventDefault();
    // console.log(c);
    if (["1", "2", "3", "4", "5", "6", "7"].includes(c)) {
      // console.log("e.target.name");
      this.props.search("category_id=" + c,c);
    }
  }

  onSubmit(e) {
    e.preventDefault();

    // console.log(item);
    // this.props.postItem(item);
  }

 

  render() {
    return (
      <div>
        <div
          className="breadcrumb-area pt-205 pb-210"
          id="navnav" 
            style={{backgroundImage: "url(https://cdn.pixabay.com/photo/2019/06/23/13/45/photomontage-4293777_1280.png)",backgroundPositionX:"right"}}
          />
        {/* <img style={{backgroundSize:"cover"}} src={'https://cdn.pixabay.com/photo/2019/06/23/13/45/photomontage-4293777_1280.png'} alt="" /> */}

        {/* <br />
        <br />
        <br />
        <br /> */}

        <div style={{marginLeft:"45%",marginTop:"7%"}} className="logo">
                      <Link to="/">
                        <h3>
                          <b>CATEGORIES</b>
                        </h3>
                      </Link>
                    </div>
          
          
      
        <br />
        <Slider search={this.search.bind(this)}/>
        <div className="container" />

        {/* <div className="categories">


          <div className="category"
            onClick={e => {
              this.search(e, "1");
            }}
          >
            <Link to="/itemsList">
              <img src='./images/Sports.png' alt="" />
            </Link>
          </div>

          <div className="category"
            onClick={e => {
              this.search(e, "2");
            }}
          >
            <Link to="/itemsList">
              <img src='./images/cars.png' alt="" />
            </Link>
          </div>

          <div className="category"
            onClick={e => {
              this.search(e, "3");
            }}
          >
            <Link to="/itemsList">
              <img src='./images/RealEstates.png' alt="" />
            </Link>
          </div>

          <div className="category"
            onClick={e => {
              this.search(e, "4");
            }}
          >
            <Link to="/itemsList">
              <img src='./images/HouseHolds.png' alt="" />
            </Link>
          </div>

          <div className="category"
            onClick={e => {
              this.search(e, "5");
            }}
          >
            <Link to="/itemsList">
              <img src='./images/tools.png' alt="" />
            </Link>
          </div>

          <div className="category"
            onClick={e => {
              this.search(e, "6");
            }}
          >
            <Link to="/itemsList">
              <img src="./images/events.png" alt="" />
            </Link>
          </div>

          <div className="category"
            onClick={e => {
              this.search(e, "7");
            }}
          >
            <Link to="/itemsList">
              <img src="./images/otherThingsEdited.png" alt="" />
            </Link>
          </div>


        </div> */}
        <br />
        <br />
        <br />
        <br />
        <br />
        <RandomUsers />
      </div>
    );
  }
}



Home.propTypes = {
  postItem: PropTypes.func.isRequired
};
////// should changed to category_id from other component
////// should changed to user_id from login component
const mapStateToProps = state => ({
  category_id: state.item.category_id,
  user_id: state.item.user_id
});

export default connect(
  mapStateToProps,
  { search }
)(Home);
