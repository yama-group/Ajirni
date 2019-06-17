import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { postItem } from "../actions/itemAction";
import { storage } from "../firebase";
import { Alert } from "reactstrap";
class RealEstate extends Component {
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
      quantity: "1",
      status: "available",
      confirmed: "True",
      image: null,
      imgUrl: [],
      alert: false,
      message: "",
      no_rooms: "1",
      no_bathrooms: "1",
      surface_area: "1",
      furnished: "Yes",
      floor_no: "1"
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
      this.setState({ image }, () => this.handleImgUpload());
    }
  }

  handleImgUpload() {
    // console.log("ffff");
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
      itemInfo: {
        name: this.state.name,
        description: this.state.description,
        condition: this.state.condition,
        category: this.state.category_id,
        location: this.state.location,
        price: this.state.price,
        quantity: this.state.quantity,
        status: this.state.status,
        confirmed: this.state.confirmed,
        user: this.state.user_id,
        no_rooms: this.state.no_rooms,
        no_bathrooms: this.state.no_bathrooms,
        surface_area: this.state.surface_area,
        furnished: this.state.furnished,
        floor_no: this.state.floor_no
      },
      images: this.state.imgUrl
    };
    this.setState({
      name: "",
      description: "",
      condition: "New",
      location: "",
      price: "0",
      quantity: "1",
      status: "available",
      confirmed: "True",
      image: null,
      imgUrl: [],
      alert: false,
      message: "",
      no_rooms: "1",
      no_bathrooms: "1",
      surface_area: "1",
      furnished: "1",
      floor_no: "Yes"
    });
    // console.log(item);
    this.props.postItem(item);
  }
  render() {
    return (
      <div>
        <div className="col-lg-6 col-md-12 col-12">
          <form onSubmit={this.onSubmit}>
            <div className="checkbox-form">
              <h3>Real Estate Form</h3>
              <div className="row">
                <div className="col-md-6">
                  <div className="checkout-form-list">
                    <label>
                      Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Yama buildings"
                      onChange={this.onChange}
                      value={this.state.name}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="checkout-form-list">
                    <label>
                      Renting Price per Month<span className="required">*</span>
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
                      Rooms <span className="required">*</span>
                    </label>
                    <input
                      type="number"
                      min="0"
                      name="no_rooms"
                      placeholder="1"
                      onChange={this.onChange}
                      value={this.state.no_rooms}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="checkout-form-list">
                    <label>
                      Bathrooms <span className="required">*</span>
                    </label>
                    <input
                      type="number"
                      min="0"
                      name="no_bathrooms"
                      placeholder="1"
                      onChange={this.onChange}
                      value={this.state.no_bathrooms}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="checkout-form-list">
                    <label>
                      Floor Number <span className="required">*</span>
                    </label>
                    <input
                      type="number"
                      min="0"
                      name="floor_no"
                      placeholder="1"
                      onChange={this.onChange}
                      value={this.state.floor_no}
                      required
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
                      required
                    >
                      <option value="New">New</option>
                      <option value="Used">Used</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="country-select">
                    <label>
                      furnished <span className="required">*</span>
                    </label>
                    <select
                      name="furnished"
                      onChange={this.onChange}
                      value={this.state.furnished}
                      required
                    >
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="country-select">
                    <label> Avilable Directly</label>
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
RealEstate.propTypes = {
  postItem: PropTypes.func.isRequired
};
////// should changed to category_id from other component
////// should changed to user_id from login component
const mapStateToProps = state => ({
  user_id: state.item.user_id,
  category_id: state.item.category_id
});

export default connect(
  mapStateToProps,
  { postItem }
)(RealEstate);
