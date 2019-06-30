import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { postItem } from "../actions/itemAction";
import { Alert } from "reactstrap";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category_id: "",
      user_id: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    this.setState({
      category_id: this.props.category_id,
      user_id: this.props.user_id
    });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    // console.log(item);
    // this.props.postItem(item);
  }
  render() {
    return (
      <div>
        <footer style={{paddingTop:"5px",paddingBottom:"30px"}} className="footer-area gray-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-5 col-12">
                <div className="footer-widget">
                  <div className="footer-widget-l-content">
                    <h4>20 Years Experience</h4>
                    <ul>
                      <li>
                        <i className="ion-social-twitter" />
                      </li>
                      <li>
                        <i className="ion-social-tumblr" />
                      </li>
                      <li>
                        <i className="ion-social-facebook" />
                      </li>
                      <li>
                        <i className="ion-social-instagram-outline" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-7 col-12">
                <div className="footer-widget">
                  <div className="footer-widget-m-content text-center">
                    <div className="footer-logo">
                      <h1>
                        <b>AJIRNI.</b>
                      </h1>
                    </div>
                    <div className="footer-nav">
                      <nav>
                        <ul>
                          <li>
                            <Link to="/">home</Link>
                          </li>
                          <li>
                            <Link to="/about">about us</Link>
                          </li>

                          <li>
                            <Link to="/contact">contact</Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <p>
                      Copyright <i className="fa fa-copyright" /> 2018{" "}
                      <a
                        href="https://github.com/yama-group/Ajirni"
                        target="_blank"
                      >
                        YAMA Group.
                      </a>{" "}
                      All rights reserved.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-12">
                <div className="footer-widget f-right">
                  <div className="footer-widget-r-content">
                    <ul>
                      <li>
                        <span>Phone :</span> +00 962 777 888 999
                      </li>
                      <li>
                        <span>Email : </span>yama@yama.com
                      </li>
                      <li>
                        <span>Address :</span> RBK - Khalda - Amman
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
Footer.propTypes = {
  postItem: PropTypes.func.isRequired
};
////// should changed to category_id from other component
////// should changed to user_id from login component
const mapStateToProps = state => ({
  user_id: state.item.user_id,
  category_id: state.item.category_id
});

export default connect(
  mapStateToProps,
  { postItem }
)(Footer);
