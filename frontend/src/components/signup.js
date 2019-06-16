import React from "react"
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { storage } from "../firebase";
import { createUser } from '../actions/userAction'

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
    message: "",
    msg: ""
  }

  componentDidMount() {
    console.log(this.state.msg)

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
    console.log(this.state.msg)
    const user = {
      username: this.state.username,
      first_name: this.state.firstname,
      last_name: this.state.lastname,
      email: this.state.email,
      password: this.state.password,
      phone: this.state.phone,
      image_url: this.state.image_url
    }
    e.preventDefault();
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
                    <form  >
                      <strong>user name</strong><input type="text" name="username" placeholder="user name" onChange={this.onchange} />
                      <strong>first name</strong><input type="text" name="firstname" placeholder="first name" onChange={this.onchange} />
                      <strong>last name</strong><input type="text" name="lastname" placeholder="last name" onChange={this.onchange} />
                      <strong>email</strong><input type="email" name="email" placeholder="Email" onChange={this.onchange} />
                      <strong>password</strong><input type="password" name="password" placeholder="Password" onChange={this.onchange} />
                      <strong>phone</strong><input type="text" name="phone" placeholder="Phone" onChange={this.onchange} />
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
                          src={this.state.image}
                          alt=""
                          className="mtoo-12"
                        />

                      </div>
                      {/* <strong>image</strong><input type="text" name="image" placeholder="image" onChange={this.onchange} /> */}
                      <div class="button-box">
                        <button type="submit" onClick={this.onsubmit} class="default-btn floatright">Sign Up</button>
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
    msg: state.userSignUp.Msg
  
  })

export default connect(mapStateToProps, { createUser })(Signup)
