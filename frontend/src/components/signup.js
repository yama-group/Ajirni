import React from "react"
// import axios from 'axios'

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
      address: "",
      location: "",
      image: ""
    }
    this.onchange = this.onchange.bind(this)

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
                    <form >
                      <input type="text" name="firstname" placeholder="first name" onChange={this.onchange} />
                      <input type="text" name="lastname" placeholder="last name" onChange={this.onchange} />
                      <input type="email" name="email" placeholder="Email" onChange={this.onchange} />
                      <input type="password" name="password" placeholder="Password" onChange={this.onchange} />
                      <input type="text" name="phone" placeholder="Phone" onChange={this.onchange} />
                      <input type="text" name="address" placeholder="address" onChange={this.onchange} />
                      <input type="text" name="location" placeholder="location" onChange={this.onchange} />
                      <input type="text" name="image" placeholder="image" onChange={this.onchange} />
                      <div class="button-box">
                        <button type="submit" class="default-btn floatright">Register</button>
                      </div>
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

export default Signup;
