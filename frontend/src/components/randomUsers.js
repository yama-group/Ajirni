/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllUsers } from "../actions/usersAct";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class RandomUsers extends Component {

  constructor(props) {
    super(props);
  }
  state = {
    users: []
  };

  componentWillMount() {
    //this.setState({ users: this.props.users })

    this.props.getAllUsers();
    this.shuffle(this.props.users)
    // console.log(this.props.users)

  }


  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }


  render() {
    console.log(this.shuffle(this.props.users))
    this.shuffle(this.props.users)
    return (
         <div  className="container">
        <div class="shop-filters-right">
      <div class="shop-product-content tab-content">
      <div id="grid-5-col1" class="tab-pane fade active show">
          <div class="row custom-row">
            { this.props.users.slice(0, 4).map((user)=>{
              return(
<div class="custom-col-5 custom-col-style">
                  <div class="single-product mb-35">
                      <div class="product-img">
                          <Link onClick={()=>{
                          window.localStorage.setItem("itemsUser",user.id)
                          }} to="/userItems"><img src={user.image_url?user.image_url:""} alt=""/></Link>
                          <div class="product-action">
                            
                              <Link title="Quick View" data-toggle="modal" data-target="#exampleModal" class="animate-right" to="/userItems"><i class="ion-ios-eye-outline"></i></Link>
                          </div>
                      </div>
                      <div class="product-content">
                          <div class="product-title-price">
                              <div class="product-title">
                                  <h4><Link to="/userItems">{user.first_name} {user.last_name}</Link></h4>
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
      
      

      //   {
      //     // console.log(this.props.users)
      //     this.props.users.slice(0, 8).map((user) =>
      //       // <ul>
      //       //   <li key={user.id}> {user.username} </li>
      //       // </ul>
      //        <table>
      //         <tbody>
      //           <tr>
      //         { user.image_url ? 
      //             <td key={user.id} class="product-thumbnail">
      //             <a href="#"><img src={user.image_url} width="80px" heigh="80px" alt="" /></a> 
      //             </td>
      //             :
      //             <td>
      //               <a href="#"><h3>no photo</h3></a>
      //             </td>
      //         }
      //           </tr>
      //         </tbody>
      //       </table>



      //     )
      //   }

      // </div >
    )
  }
}


const mapStateToProps = state => ({
  users: state.usersReducer.users
});

export default connect(mapStateToProps, { getAllUsers })(RandomUsers);