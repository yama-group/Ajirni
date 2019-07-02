import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Link, Redirect, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { getAllUserItems, setItemId, getUserInfo } from "../actions/UserItemsAction.js";
import { BrowserRouter as Router, Link } from "react-router-dom";

class UserItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsData: [],
      user: [],
      userId: ""
    };
  }

  componentWillMount() {
    this.setState({ userId: this.props.userId }, () => {
      console.log(this.state.user);
      this.props.getAllUserItems(this.state.userId);
      this.props.getUserInfo(this.state.userId);
    });
  }

  itemClicked(id) {
    window.localStorage.setItem("item_id",id)
    this.props.setItemId(id);
  }

  render() {
    const userInfo = 
      
      this.props.user.map(info => {
        return (
            
              
              <div className="col-lg-4">
              <div className="blog-sidebar">
              <div className="sidebar-widget mb-50">
                
                <img src={info.image_url} alt=""/>
               
                    <div className="sidebar-img-content">
                        <h3>{info.first_name} {info.last_name}</h3>
                        <p>{info.email}</p>
                        <p>{info.phone}</p>

                        <div className="sidebar-img-social">
                            <ul>
                                <li>
                                    <a href="#">
                                        <i className="ion-social-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="ion-social-tumblr"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="ion-social-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="ion-social-instagram-outline"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
             </div>
        
          )
        })
       
        
    
    const userItems = (
      
       
          
            <div className="col-lg-8">
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
                                ? "Event Equipments"
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
          
        
      
    );

    // console.log(this.props.itemsData.length,"nvjjhjgjhg")
    return (
      <div className="blog-area pt-100 pb-100">
              <div className="container">
               <div className="row">
        {userInfo}
        {userItems}
        </div>
        </div>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  itemsData: state.userItemsReducer.userItems,
  user: state.userItemsReducer.userInfo,
  userId:window.localStorage.getItem("itemsUser")
});

export default connect(
  mapStateToProps,
  { getAllUserItems, setItemId, getUserInfo }
)(UserItems);
