import React from "react"
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createUser } from '../actions/userAction'

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      phone: "",
      address: "",
      location: "",
      image: "",
      role: "",
      confirm: ""
    }
    this.onchange = this.onchange.bind(this)
    this.onsubmit = this.onsubmit.bind(this)
  }

  // componentDidMount() {
  //   axios.post("signUp/").then((res) => {
  //     console.log(res.data)
  //   }).catch(err => console.log(err));

  // }

  onchange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value })
  }

  onsubmit(e) {

    const user = {
      first_name: this.state.firstname,
      last_name: this.state.lastname,
      email: this.state.email,
      password: this.state.password,
      phone: this.state.phone,
      address: this.state.address,
      location: this.state.location,
      image_url: this.state.image,
      role: this.state.role,
      confirm: this.state.confirm
    }
    e.preventDefault();
    console.log(user)
    this.props.createUser(user)
  }

  // goToSigninPage(e) {

  // }

  render() {
    return (
      <div className="register-area ptb-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 col-12 col-lg-6 col-xl-6 ml-auto mr-auto">
              <h1> signup page </h1>
              <div className="login">
                <div className="login-form-container">
                  <div className="login-form">
                    <form onSubmit={this.onsubmit} >
                      <strong>first name</strong><input type="text" name="firstname" placeholder="first name" onChange={this.onchange} />
                      <strong>last name</strong><input type="text" name="lastname" placeholder="last name" onChange={this.onchange} />
                      <strong>email</strong><input type="email" name="email" placeholder="Email" onChange={this.onchange} />
                      <strong>password</strong><input type="password" name="password" placeholder="Password" onChange={this.onchange} />
                      <strong>phone</strong><input type="text" name="phone" placeholder="Phone" onChange={this.onchange} />
                      <strong>address</strong><input type="text" name="address" placeholder="address" onChange={this.onchange} />
                      <strong>location</strong><input type="text" name="location" placeholder="location" onChange={this.onchange} />
                      <strong>image</strong><input type="text" name="image" placeholder="image" onChange={this.onchange} />
                      <strong>role</strong><input type="text" name="role" placeholder="role" onChange={this.onchange} />
                      <strong>confirm</strong><input type="text" name="confirm" placeholder="confirm" onChange={this.onchange} />
                      <div class="button-box">
                        <button type="submit" class="default-btn floatright">Sign Up</button>
                      </div>
                      {/* <div class="button-box">
                        <button type="button" class="default-btn floatright" onClick={this.goSigninPage.bind(this)} >Sign In</button>
                      </div> */}
                    </form>
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

// const mapStateToProps = state => ({
//   userData: state.userData.user
// })

Signup.propTypes = {
  createUser: PropTypes.func.isRequired
}

export default connect(null, { createUser })(Signup)
