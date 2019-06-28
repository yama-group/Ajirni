import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Redirect, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { userSignIn } from "../actions/signInAction.js";
import axios from "axios";
import { Alert } from "reactstrap";





class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const signIn_Info = {
      username: this.state.username.toLocaleLowerCase(),
      password: this.state.password
    };
    this.props.userSignIn(signIn_Info);
  }

  componentWillReceiveProps(next) {
   
    if (next.token) {
      this.props.history.push("/user");
    }
  }

  render() {
    return (
      
        
        
          <div className="container">
            <div className="logo"><h1 style={{marginLeft:"45%"}}><b>Login</b></h1></div>
              
            <div className="row"> 
         
              <div className="col-md-12 col-12 col-lg-6 col-xl-6 ml-auto mr-auto">
                
                <div className="login">
                
                  <Alert color="danger" isOpen={this.props.visible}>
                    {this.props.error}
                  </Alert>

                  <div className="login-form-container">
                    <div className="login-form">
                      <form
                        action="#"
                        method="post"
                        onSubmit={this.onSubmit.bind(this)}
                      >
                        <input
                          type="text"
                          name="username"
                          placeholder="Username"
                          onChange={this.onChange.bind(this)}
                        />
                        <input
                          type="password"
                          name="password"
                          placeholder="Password"
                          onChange={this.onChange.bind(this)}
                        />
                        <div className="button-box">
                          <div className="login-toggle-btn">
                            <input type="checkbox" />
                            <label>Remember me</label>
                            
                            <Link to="/signup">Don't have an account? Signup</Link>
                          </div>
                          <button
                            type="submit"
                            className="default-btn floatright"
                          >
                            Login
                          </button>
                        </div>
                      </form>
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
  user_id: state.signin.userId,
  error: state.signin.error,
  token: state.signin.token,
  visible: state.signin.visible
});

export default connect(
  mapStateToProps,
  { userSignIn }
)(SignIn);