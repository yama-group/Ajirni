import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Link, Redirect, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { getUserLikes } from "../actions/likesAction";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Likes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsData: [],
      userId: ""
    };
  }

  componentWillMount() {
    this.setState({ userId: this.props.userId }, () => {
      console.log(this.state.itemsData);
      this.props.getUserLikes(this.state.userId);
      console.log(this.state.userId);
    });
  }

  
  render() {

    const userLikes = (
      <div className="cart-main-area pt-95 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <form action="#">
                <div className="table-content table-responsive">
                  <table class="table table-hover"> 
                    <thead>
                      <tr>
                        <th className="product-price">Category</th>
                        <th className="product-name">Product Name</th>
                        <th className="product-price">Price/day</th>
                        <th className="product-quantity">Quantity</th>
                        <th className="product-subtotal">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.itemsData.map(item => {
                        return (
                          <tr key={item.id}>
                            <td className="product-thumbnail">
                              {item.category == 1
                                ? "Sports"
                                : item.category == 2
                                ? "Cars"
                                : item.category == 3
                                ? "Real Estate"
                                : item.category == 4
                                ? "Home Tools"
                                : item.category == 5
                                ? "Industrial Tools"
                                : item.category == 6
                                ? "Event Tools"
                                : item.category == 7
                                ? "Others"
                                : null}
                            </td>

                            <Link to="itemDetail">
                            <td
                              className="product-name"
                              onClick={() => {
                                this.itemClicked(item.id);
                              }}
                            >
                                <b>{item.name}</b>
                            </td>
                              </Link>
                            <td className="product-price">
                              <span className="amount">${item.price}/day</span>
                            </td>
                            <td className="product-quantity">
                              {item.quantity}
                            </td>
                            <td className="product-subtotal">
                              {item.description}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );

    // console.log(this.props.itemsData.length,"nvjjhjgjhg")
    return (
      <div>
        <h1>
          your Liked Items
        </h1>
        {userLikes}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  itemsData: state.likes.userItems,
  userId: state.userInfo.user.id
});

export default connect(
  mapStateToProps,
  { getUserLikes }
)(Likes);
