import React from "react"
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { storage } from "../firebase";
import { createUser } from '../actions/userAction'
import { Alert } from "reactstrap";


class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.onchange = this.onchange.bind(this)
    this.onsubmit = this.onsubmit.bind(this)
    this.handleImgChange = this.handleImgChange.bind(this)
    this.handleImgUpload = this.handleImgUpload.bind(this)
  }

  state = {
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
    image: null,
    image_url: "",
    alert: false,
    error: ""
  }



  handleImgChange(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState({ image }, () => this.handleImgUpload());
    }
  }

  handleImgUpload() {
    const { image } = this.state;
    console.log(image.name);
    if (image !== null) {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        snapshot => { },
        error => {
          console.log(error);
        },
        () => {
          // complete function ....
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then(imgUrl => {
              console.log(imgUrl);
              this.setState({
                image_url: imgUrl,
                alert: true,
                message: "uploaded"
              });
              setTimeout(
                () => this.setState({ alert: false, message: "" }),
                3000
              );
            });
        }
      );
    }
  }

  onchange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value })
  }

  onsubmit(e) {
    const user = {
      username: this.state.username.toLocaleLowerCase(),
      first_name: this.state.firstname,
      last_name: this.state.lastname,
      email: this.state.email,
      password: this.state.password,
      phone: this.state.phone,
      image_url: this.state.image_url
    }
    e.preventDefault();
    if (user.username.length < 3 || user.first_name.length < 3 || user.last_name.length < 3 ||
      user.email.length < 3 || user.password.length < 6 || user.phone.length < 6) {
      this.setState({ error: <h3>"enter valid information"</h3>, alert: true })
    } else {
      this.props.createUser(user)
    }

  }

  componentWillReceiveProps(props) {
    if (props.done) {
      this.props.history.push("/signin")
    }
  }



  render() {

    return (
      <div className="register-area ptb-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 col-12 col-lg-6 col-xl-6 ml-auto mr-auto">
              <Alert
                color="danger"
                isOpen={this.state.alert}
              >
                {this.state.error}
              </Alert>
              <h2> Signup  </h2>
              <div className="login">
                <div className="login-form-container">
                  <div className="login-form">
                    <form  >
                      <strong>Username</strong><input type="text" name="username" placeholder="user name" onChange={this.onchange} />
                      <strong>First Name</strong><input type="text" name="firstname" placeholder="first name" onChange={this.onchange} />
                      <strong>Last Name</strong><input type="text" name="lastname" placeholder="last name" onChange={this.onchange} />
                      <strong>Email</strong><input type="email" name="email" placeholder="Email" onChange={this.onchange} />
                      <strong>Password</strong><input type="password" name="password" placeholder="Password" onChange={this.onchange} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" />
                      <strong>Phone</strong><input type="text" name="phone" placeholder="Phone" onChange={this.onchange} />
                      <input
                        className="col-md-4"
                        aria-describedby="btn"
                        type="file"
                        accept="image/*"
                        data-max-size="5000"
                        onChange={this.handleImgChange.bind(this)}
                      />

                      <div className="col-md-12" />
                      <div role="tablist">

                        <img
                          role="tab"
                          src={this.state.image_url}
                          alt=""
                          style={{
                            width: "100px",
                            height: "100px"
                          }}
                        />

                      </div>
                      {/* <strong>image</strong><input type="text" name="image" placeholder="image" onChange={this.onchange} /> */}
                      <div className="button-box">
                        <button type="submit" onClick={this.onsubmit} className="default-btn floatright">Sign Up</button>
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


Signup.propTypes = {
  createUser: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
  msg: state.userSignUp.Msg,
  done: state.userSignUp.done

})

export default connect(mapStateToProps, { createUser })(Signup)
