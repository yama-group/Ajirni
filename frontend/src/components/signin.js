import React from "react"
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userSignIn } from '../actions/userAction'

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""

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
      email: this.state.email,
      password: this.state.password,
    }
    e.preventDefault();
    this.props.userSignIn(user)
  }

  // goToSigninPage(e) {

  // }

  render() {
    return (
      <div className="register-area ptb-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 col-12 col-lg-6 col-xl-6 ml-auto mr-auto">
              <h1> signin page </h1>
              <div className="login">
                <div className="login-form-container">
                  <div className="login-form">
                    <form onSubmit={this.onsubmit} >

                      <strong>email</strong><input type="email" name="email" placeholder="Email" onChange={this.onchange} />
                      <strong>password</strong><input type="password" name="password" placeholder="Password" onChange={this.onchange} />

                      <div class="button-box">
                        <button type="submit" class="default-btn floatright">Sign In</button>
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

Signin.propTypes = {
  userSignIn: PropTypes.func.isRequired
}

export default connect(null, { userSignIn })(Signin)
