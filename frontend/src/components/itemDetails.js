/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { connect } from "react-redux";
import { fetchItem } from "../actions/itemDetailsAction";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { Alert } from "reactstrap";
import Reviews from "./reviews"

class ItemDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
      likeAlert: false,
      likeMessage: "",
      images: [{ item_id: 1, img_url: "" }]
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
  }

  componentWillMount() {
    // this.setState({item_id:this.props.item_id})
    this.props.fetchItem(this.props.item_id);
  }

  componentWillReceiveProps(next) {
    // console.log(next.images, "next", next);
    if (next.images.length > 0) {
      this.setState({
        images: next.images
      });
    }
  }

  likeItem() {
    const that = this;
    const item_id = that.props.item.id;
    const user_id = that.props.item.user;
    axios
      .post(`/like/?user_id=${user_id}&item_id=${item_id}`)
      .then(response => {
        console.log(response);
        that.setState({
          likeAlert: !that.state.likeAlert,
          likeMessage: `${that.props.item.name} saved`
        });
      })
      .catch(err => {
        that.setState({
          likeAlert: !that.state.likeAlert,
          likeMessage: `Error...`
        });
      });
  }

  render() {
    return (
      <div className="product-details ptb-100 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="product-details-btn">
                <a href="#">
                  <i className="ion-arrow-left-c" />
                </a>
                <a className="active" href="#">
                  <i className="ion-arrow-right-c" />
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-7 col-12">
              <div className="product-details-img-content">
                <div className="product-details-tab mr-70">
                  <div className="product-details-large tab-content">
                    {this.state.images.map((image, index) => {
                      if (index === 0) {
                        return (
                          <div
                            key={index}
                            className="tab-pane active show fade"
                            id="pro-details1"
                            role="tabpanel"
                          >

                            <div className="easyzoom easyzoom--overlay">
                              <a href={image.img_url}>
                                <img src={image.img_url} alt="" />
                              </a>
                            </div>
                          </div>
                        );
                      } else {
                        return (
                          <div
                            key={index}
                            className="tab-pane fade"
                            id={`pro-details${1 + index}`}
                            role="tabpanel"
                          >
                            <div className="easyzoom easyzoom--overlay">
                              <a href={image.img_url}>
                                <img src={image.img_url} alt="" />
                              </a>
                            </div>
                          </div>
                        );
                      }
                    })}
                  </div>
                  <div className="product-details-small nav mt-12 main-product-details">
                    {this.state.images.map((image, index) => {
                      if (index === 0) {
                        return (
                          <a
                          key={index}
                            className="active mr-12"
                            href="#pro-details1"
                            data-toggle="tab"
                            role="tab"
                            aria-selected="true"
                            >
                            <img src={image.img_url} alt="" />
                          </a>
                        );
                      } else {
                        return (
                          <a
                          key={index}
                          className="mr-12"
                          href={`#pro-details${1 + index}`}
                          data-toggle="tab"
                          role="tab"
                          aria-selected="true"
                          >
                            <img src={image.img_url} alt="" />
                          </a>
                        );
                      }
                    })}
                    <Reviews />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-5 col-12">
              <div className="product-details-content">
                <h3>{this.props.item.name}</h3>

                <div className="details-price">
                  <span>${this.props.item.price}/day</span>
                </div>
                <p>{this.props.item.description}</p>
                <div className="quick-view-select">
                  {this.props.item.condition ? (
                    <div className="select-option-part">
                      <label>
                        <strong>Condition:</strong>
                      </label>
                      <p>{this.props.item.condition}</p>
                    </div>
                  ) : (
                    ""
                  )}
                  {this.props.item.car_make ? (
                    <div className="select-option-part">
                      <label>
                        <strong>Car Make:</strong>
                      </label>
                      <p>{this.props.item.car_make}</p>
                    </div>
                  ) : (
                    ""
                  )}
                  {this.props.item.year_manufactured ? (
                    <div className="select-option-part">
                      <label>
                        <strong>Year Manufactured:</strong>
                      </label>
                      <p>{this.props.item.year_manufactured}</p>
                    </div>
                  ) : (
                    ""
                  )}
                  {this.props.item.no_killometers ? (
                    <div className="select-option-part">
                      <label>
                        <strong>No.Killometers:</strong>
                      </label>
                      <p>{this.props.item.no_killometers}</p>
                    </div>
                  ) : (
                    ""
                  )}
                  {this.props.item.transmission ? (
                    <div className="select-option-part">
                      <label>
                        <strong>Transmission:</strong>
                      </label>
                      <p>{this.props.item.transmission}</p>
                    </div>
                  ) : (
                    ""
                  )}
                  {this.props.item.no_rooms ? (
                    <div className="select-option-part">
                      <label>
                        <strong>No.Rooms:</strong>
                      </label>
                      <p>{this.props.item.no_rooms}</p>
                    </div>
                  ) : (
                    ""
                  )}
                  {this.props.item.no_bathrooms ? (
                    <div className="select-option-part">
                      <label>
                        <strong>No.Bathrooms:</strong>
                      </label>
                      <p>{this.props.item.no_bathrooms}</p>
                    </div>
                  ) : (
                    ""
                  )}
                  {this.props.item.surface_area ? (
                    <div className="select-option-part">
                      <label>
                        <strong>Surface Area:</strong>
                      </label>
                      <p>{this.props.item.surface_area}m</p>
                    </div>
                  ) : (
                    ""
                  )}
                  {this.props.item.furnished ? (
                    <div className="select-option-part">
                      <label>
                        <strong>Furnished:</strong>
                      </label>
                      <p>Yes</p>
                    </div>
                  ) : (
                    ""
                  )}
                  {this.props.item.floor_no ? (
                    <div className="select-option-part">
                      <label>
                        <strong>Floor.No:</strong>
                      </label>
                      <p>{this.props.item.floor_no}</p>
                    </div>
                  ) : (
                    ""
                  )}
                  {this.props.item.location ? (
                    <div className="select-option-part">
                      <label>
                        <strong>Location:</strong>
                      </label>
                      <p>{this.props.item.location}</p>
                    </div>
                  ) : (
                    ""
                  )}
                  {this.props.item.color ? (
                    <div className="select-option-part">
                      <label>
                        <strong>Color:</strong>
                      </label>
                      <p>{this.props.item.color}</p>
                    </div>
                  ) : (
                    ""
                  )}
                  {this.props.item.quantity ? (
                    <div className="select-option-part">
                      <label>
                        <strong>Quantity:</strong>
                      </label>
                      <p>{this.props.item.quantity}</p>
                    </div>
                  ) : (
                    ""
                  )}
                  {this.state.likeAlert ? (
                    <Alert
                      color="info"
                      isOpen={this.state.visible}
                      toggle={this.onDismiss}
                    >
                      {this.state.likeMessage}
                    </Alert>
                  ) : (
                    ""
                  )}
                </div>
                <div className="quickview-plus-minus">
                  <div className="quickview-btn-cart">
                    <a className="btn-hover-black" href="#">
                      Contact
                    </a>
                  </div>
                  <div className="quickview-btn-wishlist">
                    <a
                      onClick={this.likeItem.bind(this)}
                      className="btn-hover"
                      href="#btn-hover"
                    >
                      <i className="ion-ios-heart-outline" />
                    </a>
                  </div>
                  <div className="quickview-btn-wishlist">
                    <NavLink to="/userItems" className="btn-hover">
                      <i className="ion-ios-contact" />
                    </NavLink>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.itemDetails.item,
  item_id: state.itemsData.item_id,
  userId: state.itemDetails.userId,
  images: state.itemDetails.images
});

export default connect(
  mapStateToProps,
  { fetchItem }
)(ItemDetail);
