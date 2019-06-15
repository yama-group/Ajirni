import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Link, Redirect, NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { userSignIn } from '../actions/signInAction.js'

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }
  
componentWillMount() {
  this.setState({userId:this.props.user_id}) 
}
onChange(e){
  this.setState({[e.target.name]:e.target.value})
}


onSubmit(e){

  e.preventDefault();

  const signIn_Info = {
    email: this.state.email,
    password: this.state.password
  }

  this.props.userSignIn(signIn_Info)

}


render(){
  return(
    <div>
        <div class="register-area ptb-100">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-12 col-lg-6 col-xl-6 ml-auto mr-auto">
                        <div class="login">
                            <div class="login-form-container">
                                <div class="login-form">
                                    <form action="#" method="post" onSubmit = {this.onSubmit.bind(this)}>
                                        <input type="text" name="email" placeholder="Username" onChange = {this.onChange.bind(this)}/>
                                        <input type="password" name="password" placeholder="Password" onChange = {this.onChange.bind(this)}/>
                                        <div class="button-box">
                                            <div class="login-toggle-btn">
                                                <input type="checkbox"/>
                                                <label>Remember me</label>
                                                <a href="#">Forgot Password?</a>
                                            </div>
                                            <button type="submit" class="default-btn floatright">Login</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

}

const mapStateToProps = state => ({
  user_id:state.userItemsReducer.userId
})

export default connect(mapStateToProps, { userSignIn })(SignIn)
