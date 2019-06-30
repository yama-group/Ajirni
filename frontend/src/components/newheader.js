import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { search } from "../actions/itemAction";
import {fetchUser} from "../actions/userinfo"
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
class Header extends Component {
    constructor(props) {
      super(props);
      this.state = {
        category_id: "",
        user_id: "",
        query: "",
       active:false,
        
      };
      this.onChanges = this.onChanges.bind(this);
    }
  
    changeClassName(){
      this.setState({
        active:!this.state.active,
       
      })
    }
  
    componentWillMount() {
      this.setState({
        category_id: this.props.category_id,
        user_id: this.props.user_id
      });
      this.props.fetchUser(this.props.userId);

    }
  
    onChanges(e) {
      this.setState({ [e.target.name]: e.target.value });
    }

    logOut(){
        window.localStorage.clear()
        const that = this
        setTimeout(()=>{
    that.props.history.push("/")
        },1000)
    }
  
    search(e, c) {
      e.preventDefault();
      // console.log(c);
  
      if (["1", "2", "3", "4", "5", "6", "7"].includes(c)) {
        // console.log("e.target.name");
        this.props.search("category_id=" + c,c);
      } else {
        console.log("name");
        this.props.search("name=" + this.state.query);
      }
      this.setState({ query: "" });
    }

    render(){
        const token = window.localStorage.getItem("token")
        return(
            <div className="wrapper">
            
            <header style={{height:"90px"}} className="pl-155 pr-155 intelligent-header">
            <div className="header-area header-area-2">
              <div className="container-fluid p-0">
                <div className="row no-gutters">
                  <div className="col-lg-3 col-md-6 col-6">
                    <div className="logo">
                      <Link to="/">
                        <h1>
                          <b>AJIRNI. </b>
                        </h1>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6 menu-none-block menu-center">
                    <div className="main-menu">
                      <nav>
                        <ul>
                          <li>
                            <Link to="/">home</Link>
                          </li>
                          <li>
                            <Link to="/about">about </Link>
                          </li>
                          <li>
                            <b>CATEGORY</b>
                            <ul className="dropdown">
                              <li
                                onClick={e => {
                                  this.search(e, "1");
                                }}
                              >
                                <Link to="/itemsList">Sport</Link>
                              </li>
                              <li
                                onClick={e => {
                                  this.search(e, "2");
                                }}
                              >
                                <Link to="/itemsList">Cars</Link>
                              </li>

                              <li
                                onClick={e => {
                                  this.search(e, "3");
                                }}
                              >
                                <Link to="/itemsList">Real Estate</Link>
                              </li>
                              <li
                                onClick={e => {
                                  this.search(e, "4");
                                }}
                              >
                                <Link to="/itemsList">Home Tools</Link>
                              </li>
                              <li
                                onClick={e => {
                                  this.search(e, "5");
                                }}
                              >
                                <Link to="/itemsList">Industrial Tools</Link>
                              </li>
                              <li
                                onClick={e => {
                                  this.search(e, "6");
                                }}
                              >
                                <Link to="/itemsList">Event Tools</Link>
                              </li>
                              <li
                                onClick={e => {
                                  this.search(e, "7");
                                }}
                              >
                                <Link to="/itemsList">Others</Link>
                              </li>
                            </ul>
                          </li>

                          <li>
                            <Link to="/chat">Messenger</Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 col-6">
                    <div className="header-search-cart">
                      <div className="header-sidebar common-style">
                        <input
                          className="header-navbar-active"
                          name="query"
                          type="text"
                          value={this.state.query}
                          onChange={this.onChanges}
                        />
                      </div>
                      <div className="header-search common-style">
                        {" "}
                        <button
                          className="sidebar-trigger-search"
                          onClick={this.search.bind(this)}
                        >
                          <Link to="/itemsList">
                            <span className="ion-ios-search-strong" />
                          </Link>
                        </button>
                      </div>

                      <div className="header-sidebar common-style">
                        <button onClick={this.changeClassName.bind(this)} className="header-navbar-active">
                          <span className="ion-navicon" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
            <div style={{height:"90px"}} className="header-space"></div>
            
           {this.state.active? <div className="cur-lang-acc-active inside">
                <div style={{backgroundImage:"url('./images/gabriela-rodriguez-660479-unsplash.jpg')",backgroundSize:"cover"}} className="wrap-sidebar">
                    <div style={{marginTop:"-10%"}} className="sidebar-nav-icon">
                        <button onClick={this.changeClassName.bind(this)} className="op-sidebar-close"><span className="ion-android-close"></span></button>
                    </div>
                    <div  className="cur-lang-acc-all">
                        <div  >
                            <div  className="cur-lang-acc-title">
                                <h3 style={{color:"white"}}>AJIRNI.</h3>
                                <div  class="cart-img">
                                       {token? <a href="user"><img style={{width:"90px",height:"88px",borderRadius:"50px"}} src={this.props.user.image_url} alt=""/></a>:""}
                                    </div>
                            </div>
                            
                           {token? <div ><h3 style={{marginLeft:"-7%",color:"white",marginTop:"5%"}}>Welcome {this.props.user.first_name}</h3></div>:""}
                            <div className="cur-lang-acc-dropdown">
                                <ul>  
                                    {!token ? <li><Link style={{color:"white"}} to="/signup">Register</Link></li>:""}
                                    {token ? <li><a style={{color:"white"}} onClick={this.logOut.bind(this)} href="/">Log Out</a></li>:""}
                                   {!token ? <li><Link style={{color:"white"}} to="/signin">Sign In </Link></li>:<li><Link style={{color:"white"}} to="/user">Profile</Link></li>}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>:''}
            </div>)
    }


    



}

const mapStateToProps = state => ({
    category_id: state.item.category_id,
    user_id: state.item.user_id ,
    user: state.userInfo.user,
    userId:window.localStorage.getItem("userId")
  });
  

export default connect(
    mapStateToProps,
    { search,fetchUser }
  )(Header);