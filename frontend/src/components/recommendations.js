/* eslint-disable no-useless-constructor */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllUsers } from "../actions/usersAct";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

class Recommendations extends Component {

  constructor(props) {
    super(props);
  }
  state = {
    items: []
  };

  componentWillMount() {
      var that=this
    axios.get("/search/").then(data => {
        that.setState({
            items:data.data
        })
        
      }).catch((error) => {
        console.log(error)
      })

  }



  render() {
    return (
         <div  className="container">
        <div class="shop-filters-right">
      <div class="shop-product-content tab-content">
      <div id="grid-5-col1" class="tab-pane fade active show">
          <div class="row custom-row">
            {this.state.items.slice(0, 4).map((item)=>{
              return(
                <div class="custom-col-5 custom-col-style">
                                        <div class="single-product mb-35">
                                            <div class="product-img">
                                                <a href="#"><img src="assets/img/shop/shop-grid-1/2.jpg" alt=""/></a>
                                                <div class="product-action">
                                                    <a title="Wishlist" class="animate-left" href="#"><i class="ion-ios-heart-outline"></i></a>
                                                    <a title="Quick View" data-toggle="modal" data-target="#exampleModal" class="animate-right" href="#"><i class="ion-ios-eye-outline"></i></a>
                                                </div>
                                            </div>
                                            <div class="product-content">
                                                <div class="product-title-price">
                                                    <div class="product-title">
                                                        <h4><a href="product-details-6.html">WOODEN FURNITURE</a></h4>
                                                    </div>
                                                    <div class="product-price">
                                                        <span>$110.00</span>
                                                    </div>
                                                </div>
                                                <div class="product-cart-categori">
                                                    <div class="product-cart">
                                                        <span>Furniter</span>
                                                    </div>
                                                    <div class="product-categori">
                                                        <a href="#"><i class="ion-bag"></i> Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                   </div>
              )
            })}
              
            
      </div>
      </div>
      </div>
      </div>
      </div>
      
      

      
    )
  }
}


// const mapStateToProps = state => ({
//   users: state.usersReducer.users
// });

export default Recommendations