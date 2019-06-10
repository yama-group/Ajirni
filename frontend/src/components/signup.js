import React from "react"
// import axios from 'axios'

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: []
    }

  }

  // componentDidMount() {
  //   axios.post("signUp/").then((res) => {
  //     console.log(res.data)
  //   }).catch(err => console.log(err));

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
                    <form action="signUp/" method="post">
                      <input type="text" name="first-name" placeholder="first name" />
                      <input type="text" name="last-name" placeholder="last name" />
                      <input type="email" name="user-email" placeholder="Email" />
                      <input type="password" name="user-password" placeholder="Password" />
                      <input type="text" name="user-phone" placeholder="Phone" />
                      <input type="text" name="user-address" placeholder="address" />
                      <input type="text" name="user-location" placeholder="location" />
                      <input type="text" name="user-image" placeholder="image" />
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
