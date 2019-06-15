import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { postItem } from "../actions/itemAction";
import { Alert } from "reactstrap";

class Home extends Component {
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
        <div
          className="breadcrumb-area pt-205 pb-210"
          id="navnav" //   style={"background-image: url(assets/img/bg/breadcrumb.jpg)"}
        />
        <div className="container">dddd</div>
      </div>
    );
  }
}
Home.propTypes = {
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
)(Home);
