/* eslint-disable no-useless-constructor */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllUsers } from "../actions/usersAct";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import { getAllItems, itemId } from "../actions/itemsActions";


class Recommendations extends Component {

  constructor(props) {
    super(props);
  }
  state = {
    items: []
  };

  componentWillMount() {
      var that=this
    axios.get("/all/").then(data => {
        console.log(data.data)
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
        <div className="shop-filters-right">
      <div className="shop-product-content tab-content">
      <div id="grid-5-col1" className="tab-pane fade active show">
          <div className="row custom-row">
            {this.state.items.slice(11,15).map((item)=>{
              return(
                <div className="custom-col-5 custom-col-style">
                                        <div className="single-product mb-35">
                                            <div className="product-img">
                                                <a href="#"><img style={{height:"200px",width:"250px"}} src={item.images.length>0 ?item.images[0].img_url:""} alt=""/></a>
                                                <div className="product-action">
                                                    
                                                <Link onClick={()=>{
                                                  this.props.itemId(item.id)
                                                }}  class="animate-right" to="/itemDetail"><i class="ion-ios-eye-outline"></i></Link>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-title-price">
                                                    <div className="product-title">
                                                        <h4><a href="product-details-6.html">{item.name}</a></h4>
                                                    </div>
                                                    <div className="product-price">
                                                        <span>${item.price}</span>
                                                    </div>
                                                </div>
                                                <div className="product-cart-categori">
                                                    <div className="product-cart">
                                                        <span> {item.category == 1
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
                                : null}</span>
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


const mapStateToProps = state => ({
  users: state.usersReducer.users
});


export default connect(
  mapStateToProps,
  {  itemId }
)(Recommendations);
