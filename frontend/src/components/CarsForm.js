import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { postItem } from "../actions/itemAction";
import { storage } from "../firebase";
import { Alert } from "reactstrap";
import Loader from 'react-loader-spinner'
class CarsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      user_id: "",
      name: "",
      description: "",
      condition: "New",
      location: "",
      price: "0",
      color: "",
      quantity: "1",
      status: "available",
      confirmed: "True",
      image: null,
      imgUrl: [],
      alert: false,
      message: "",
      car_make: "",
      year_manufactured: "2020",
      no_killometers: "0",
      fuel: "Diesel",
      transmission: "Automatic"
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    this.setState({
     
      user_id: this.props.userId
    });
  }
  handleImgChange(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState({ image }, () => this.handleImgUpload());
    }
  }

  handleImgUpload() {
    // console.log("ffff");
    this.setState({
      alert:true
    })
    const { image } = this.state;
    if (image !== null) {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        snapshot => {},
        error => {
          console.log(error);
        },
        () => {
          // complete function ....
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then(imgUrl => {
              // console.log("okk");
              this.setState({
                imgUrl: [...this.state.imgUrl, imgUrl],
                alert: false,
                message: "uploaded"
              });
              
            });
        }
      );
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const item = {
      itemInfo: {
        name: this.state.name,
        description: this.state.description,
        condition: this.state.condition,
        category: 2,
        location: this.state.location,
        price: this.state.price,
        car_make: this.state.car_make,
        year_manufactured: this.state.year_manufactured,
        no_killometers: this.state.no_killometers,
        fuel: this.state.fuel,
        color: this.state.color,
        transmission: this.state.transmission,
        quantity: this.state.quantity,
        status: this.state.status,
        confirmed: this.state.confirmed,
        user: this.state.user_id
      },
      images: this.state.imgUrl
    };
    this.setState({
      name: "",
      description: "",
      condition: "New",
      location: "",
      price: "0",
      color: "",
      quantity: "1",
      status: "available",
      confirmed: "False",
      image: null,
      imgUrl: [],
      car_make: "",
      year_manufactured: "2020",
      no_killometers: "0",
      fuel: "Diesel",
      transmission: "Automatic"
    });
    // console.log(item);
    this.props.postItem(item);
    setTimeout(()=>{
      this.props.history.push("/user")
    },500)

    
    
  }
  render() {
    const years = ["Older than 1980"];
    for (let i = 1980; i < 2021; i++) {
      years.unshift(i);
    }
    return (
      <div style={{marginLeft:"25%",marginBottom:"2%"}}  className="col-lg-6 col-sm-6 col-xs-12">   
        <div className="blog-area pt-100 pb-100">
          <form onSubmit={this.onSubmit}>
            <div className="checkbox-form">
              <h3>Add Car </h3>
              <div className="row">
                <div className="col-md-6">
                  <div className="checkout-form-list">
                    <label>
                      Item Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Camry"
                      onChange={this.onChange}
                      value={this.state.name}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="checkout-form-list">
                    <label>
                      Renting Price per day<span className="required">*</span>
                    </label>
                    <input
                      type="number"
                      min="0"
                      name="price"
                      placeholder="50"
                      onChange={this.onChange}
                      value={this.state.price}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="checkout-form-list">
                    <label>
                      Location <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="location"
                      placeholder="Amman"
                      onChange={this.onChange}
                      value={this.state.location}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="checkout-form-list">
                    <label>
                      Quantity <span className="required">*</span>
                    </label>
                    <input
                      type="number"
                      min="0"
                      name="quantity"
                      placeholder="1"
                      onChange={this.onChange}
                      value={this.state.quantity}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="checkout-form-list">
                    <label>
                      Color <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="color"
                      placeholder="Blue"
                      onChange={this.onChange}
                      value={this.state.color}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  
                    <label>
                      Condition <span className="required">*</span>
                    </label>
                    <select
                      name="condition"
                      onChange={this.onChange}
                      value={this.state.condition}
                      required
                    >
                      <option value="New">New</option>
                      <option value="Used">Used</option>
                    </select>
                  
                </div>

                <div className="col-md-6">
                  <div className="checkout-form-list">
                    <label>
                      Car Make <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="car_make"
                      placeholder="Toyota"
                      onChange={this.onChange}
                      value={this.state.car_make}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="checkout-form-list">
                    <label>
                      
                      Kilometers
                      <span className="required">*</span>
                    </label>
                    <input
                      type="number"
                      name="no_killometers"
                      min="0"
                      placeholder="1000"
                      onChange={this.onChange}
                      value={this.state.no_killometers}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  
                    <label>
                      Type of Fuel <span className="required">*</span>
                    </label>
                    <select
                      name="fuel"
                      onChange={this.onChange}
                      value={this.state.fuel}
                      required
                    >
                      <option value="New">Diesel</option>
                      <option value="Used">Gasoline</option>
                      <option value="Used">Hybrid</option>
                      <option value="Used">Electric</option>
                    </select>
                
                </div>

                <div className="col-md-6">
                 
                    <label>
                      Transmission <span className="required">*</span>
                    </label>
                    <select
                      name="transmission"
                      onChange={this.onChange}
                      value={this.state.transmission}
                      required
                    >
                      <option value="New">Automatic</option>
                      <option value="Used">Manual</option>
                      <option value="Used">other</option>
                    </select>
                 
                </div>

                <div className="col-md-6">
                  
                    <label>
                      
                      year of manufactured <span className="required">*</span>
                    </label>
                    <select
                      name="year_manufactured"
                      onChange={this.onChange}
                      value={this.state.year_manufactured}
                      required
                    >
                      {years.map((year, i) => (
                        <option key={i} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                 
                </div>
                <div className="col-md-6">
                  <label> Availability</label>:
                  <select
                    name="status"
                    value={this.state.status}
                    onChange={this.onChange}
                    required
                  >
                    <option value="available">Available</option>
                    <option value="unavailable">Unavailable</option>
                  </select>
                </div>

                <div className="col-md-12">
                  <div className="checkout-form-list">
                    <label>
                      Description <span className="required">*</span>
                    </label>
                    <textarea
                      cols="30"
                      rows="2"
                      name="description"
                      placeholder="description"
                      onChange={this.onChange}
                      value={this.state.description}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <label> Upload your images (maximum 5)</label>
                  <input
                    // className="col-md-6"
                    aria-describedby="btn"
                    type="file"
                    accept="image/*"
                    data-max-size="5000"
                    onChange={this.handleImgChange.bind(this)}
                    required
                    disabled={this.state.imgUrl.length >= 5 ? true : false}
                  />
                </div>
                {/* <button type="button" onClick={this.handleImgUpload.bind(this)}>
                  Upload
                </button> */}
                <div className="col-md-6">
                  {this.state.alert ? (
                    <Loader 
                    type="Puff"
                    color="#7A0400"
                    height="65"	
                    width="65"
                 />
                  ) : (
                    ""
                  )}
                </div>

                <div className="col-md-12" />

                <div role="tablist">
                  {this.state.imgUrl.map((image, i) => (
                    <img
                      role="tab"
                      key={i}
                      src={image}
                      alt=""
                      className="mtoo-12"
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="order-button-payment">
              <input type="submit" value="Add" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
CarsForm.propTypes = {
  postItem: PropTypes.func.isRequired
};
////// should changed to category_id from other component
////// should changed to user_id from login component
const mapStateToProps = state => ({
  user_id: state.signin.userId || window.localStorage.getItem("userId"),
  
});

export default connect(
  mapStateToProps,
  { postItem }
)(CarsForm);
