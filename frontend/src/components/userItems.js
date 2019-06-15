import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Link, Redirect, NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { getAllUserItems } from '../actions/UserItemsAction.js'

class UserItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsData:[]
    }
  }

  componentWillMount() {
    this.setState({userId:this.props.user_id},()=>{
      console.log(this.state.itemsData)
      this.props.getAllUserItems(this.state.userId);
    }) 
  }

  itemClicked() {
    // <NavLink to="/signupEngineer" activeStyle={{ color: 'red' }}></NavLink>
  }

  render() {

    const userItems =(
      <div className="cart-main-area pt-95 pb-100">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <h1 className="cart-heading">Cart</h1>
                      <form action="#">
                          <div className="table-content table-responsive">
                              <table>
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
                                  { this.props.itemsData.map((item) => {
                                   return (

                                      <tr key ={item.id}>
                                        <td className="product-thumbnail">{item.category == 1 ? 'Sports' : item.category == 2 ? 'Cars' : item.category == 3 ? 'Real Estate' :  item.category == 4 ? 'Home Tools' :  item.category == 5 ? 'Industrial Tools' :  item.category == 6 ? 'Event Tools' :  item.category == 7 ? 'Others' : null }</td>
                                          <td className="product-name"><a onClick={this.itemClicked.bind(this)}>{item.name}</a></td>
                                          <td className="product-price"><span className="amount">${item.price}/day</span></td>
                                          <td className="product-quantity">{item.quantity}</td>
                                          <td className="product-subtotal">{item.description}</td>
                                          
                                      </tr>
                                      )
                                  })}
                                  </tbody>
                              </table>
                          </div>
                          
                      </form>
                  </div>
              </div>
          </div>
      </div>)
      
console.log(this.props.itemsData.length,"nvjjhjgjhg")
    return (

      <div>
        <h1>User Items</h1>
        {userItems}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  itemsData: state.userItemsReducer.userItems,
  user_id:state.userItemsReducer.userId
})

export default connect(mapStateToProps, { getAllUserItems })(UserItems)