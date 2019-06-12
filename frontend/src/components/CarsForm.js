import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { postItem } from "../actions/itemAction";
import { storage } from "../firebase";
import { Alert } from "reactstrap";
class CarsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category_id: "",
      user_id: "",
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
      alert: false,
      message: "",
      car_make: "",
      year_manufactured: "",
      no_killometers: "0",
      fuel: "",
      transmission: ""
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
  handleImgChange(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  }

  handleImgUpload() {
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
              console.log("okk");
              this.setState({
                imgUrl: [...this.state.imgUrl, imgUrl],
                alert: true,
                message: "uploaded"
              });
              setTimeout(
                () => this.setState({ alert: false, message: "" }),
                3000
              );
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
      name: this.state.name,
      description: this.state.description,
      condition: this.state.condition,
      category_id: this.state.category_id,
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
      user_id: this.stateuser_id
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
      year_manufactured: "",
      no_killometers: "0",
      fuel: "",
      transmission: ""
    });
    console.log(item);
    this.props.postItem(item);
  }
  render() {
    const years = ["Older than 1980"];
    for (let i = 1980; i < 2021; i++) {
      years.unshift(i);
    }
    return (
      <div>
        <div className="col-lg-6 col-md-12 col-12">
          <form>
            <div className="checkbox-form">
              <h3>Cars Form</h3>
              <div className="row">
                <div className="col-md-6">
                  <div className="checkout-form-list">
                    <label>
                      Item Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="toytoa car"
                      onChange={this.onChange}
                      value={this.state.name}
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
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="country-select">
                    <label>
                      Condition <span className="required">*</span>
                    </label>
                    <select
                      name="condition"
                      onChange={this.onChange}
                      value={this.state.condition}
                    >
                      <option value="New">New</option>
                      <option value="Used">Used</option>
                    </select>
                  </div>
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
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="country-select">
                    <label>
                      Type of Fuel <span className="required">*</span>
                    </label>
                    <select
                      name="fuel"
                      onChange={this.onChange}
                      value={this.state.fuel}
                    >
                      <option value="New">Diesel</option>
                      <option value="Used">Gasoline</option>
                      <option value="Used">Hybrid</option>
                      <option value="Used">Electric</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="country-select">
                    <label>
                      Transmission <span className="required">*</span>
                    </label>
                    <select
                      name="transmission"
                      onChange={this.onChange}
                      value={this.state.transmission}
                    >
                      <option value="New">Automatic</option>
                      <option value="Used">Manual</option>
                      <option value="Used">other</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="country-select">
                    <label>
                      year of manufactured <span className="required">*</span>
                    </label>
                    <select
                      name="year_manufactured"
                      onChange={this.onChange}
                      value={this.state.year_manufactured}
                    >
                      {years.map((year, i) => (
                        <option key={i} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="col-md-6">
                  {this.state.alert ? (
                    <Alert
                      color="info"
                      isOpen={this.state.alert}
                      toggle={() => console.log("ok")}
                    >
                      {this.state.message}
                    </Alert>
                  ) : (
                    ""
                  )}
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
                    />
                  </div>
                </div>

                <div className="col-md-12">
                  <input
                    type="checkbox"
                    id="newsletter-permission"
                    name="status"
                    value={this.state.status}
                  />
                  <label> Avilable Directly</label>
                </div>
                {/* <label>Choose file</label> */}
                <input
                  className="col-md-4"
                  aria-describedby="btn"
                  type="file"
                  accept="image/*"
                  data-max-size="5000"
                  onChange={this.handleImgChange.bind(this)}
                />

                <button type="button" onClick={this.handleImgUpload.bind(this)}>
                  Upload
                </button>
                <div className="col-md-12" />
                {/* <img
                  src={
                    this.state.imgUrl[0] ||
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSd6J9YsKM3PyT9fNDGqbt3cJA90-Hi6KvKtj2DKK7SAYJoY1S"
                  }
                  alt="uploaded images"
                  height="100"
                  width="100"
                /> */}

                <div role="tablist">
                  {this.state.imgUrl.map((image, i) => (
                    <img
                      role="tab"
                      key={i}
                      src={image}
                      alt=""
                      className="mt-12"
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="order-button-payment">
              <input type="submit" value="Add" onClick={this.onSubmit} />
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
  category_id: state.item.category_id,
  user_id: state.item.user_id
});

export default connect(
  mapStateToProps,
  { postItem }
)(CarsForm);
