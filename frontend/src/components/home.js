import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { search } from "../actions/itemAction";
import { Alert } from "reactstrap";
import car from "./images/cars.png"
import Sports from "./images/Sports.png"
import RealEstate from "./images/RealEstates.png"
import HouseHolds from "./images/HouseHolds.png"
import IndustrialTools from "./images/tools.png"
import EventEquipments from "./images/events.png"
import Others from "./images/otherThingsEdited.png"
import kite from "./images/kite.jpg"
// import Carousel from "./categorySlides"
// import Item from "./categorySlides"
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
      this.props.search("category_id=" + c);
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
        {/* <div
          className="breadcrumb-area pt-205 pb-210"
          id="navnav" //   style={"background-image: url(assets/img/bg/breadcrumb.jpg)"}
          /> */}
          <img src={'https://www.savannah-group.com/wp-content/uploads/2017/05/1920-x-500-image-7.jpg'} alt="" />
        
        <br />
        <br />
        <br />
        <br />
        <div className = "h1">
          <h1>
            Categories
          </h1>
        </div>
        <br />
        <div className="container" />
        <div className = "categories">


        <div className = "category"
         onClick={e => {
          this.search(e, "1");
        }}
        >
        <Link to = "/itemsList">
        <img src={Sports} alt="" />
        </Link>
        </div>

        <div className = "category" 
        onClick={e => {
          this.search(e, "2");
        }}
        >
        <Link to = "/itemsList">
        <img src={car} alt="" />
        </Link>
        </div>

        <div className = "category"
         onClick={e => {
          this.search(e, "3");
        }}
        >
        <Link to = "/itemsList">
        <img src={RealEstate} alt="" />
        </Link>
        </div>

        <div className = "category"
         onClick={e => {
          this.search(e, "4");
        }}
        >
        <Link to = "/itemsList">
        <img src={HouseHolds} alt="" />
        </Link>
        </div>

        <div className = "category"
         onClick={e => {
          this.search(e, "5");
        }}
        >
        <Link to = "/itemsList">
        <img src={IndustrialTools} alt="" />
        </Link>
        </div>

        <div className = "category"
         onClick={e => {
          this.search(e, "6");
        }}
        >
        <Link to = "/itemsList">
        <img src={EventEquipments} alt="" />
        </Link>
        </div>

        <div className = "category"
         onClick={e => {
          this.search(e, "7");
        }}
        >
        <Link to = "/itemsList">
        <img src={Others} alt="" />
        </Link>
        </div>


        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
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
