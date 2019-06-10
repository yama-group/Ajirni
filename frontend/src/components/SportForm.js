import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { postItem } from "../actions/postActions";

class SportForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      condition: "",
      category_id: "",
      location: "",
      price: "",
      color: "",
      quantity: "",
      status: "",
      confirmed: "False"
    };
  }

  componentWillMount() {
    this.setState({ category_id: this.props.category_id });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const item = {
      name: this.state.name,
      description: this.state.description,
      condition: this.state.condition,
      category_id: this.state.category_id,
      location: this.state.location,
      price: this.state.price,
      color: this.state.color,
      quantity: this.state.quantity,
      status: this.state.status,
      confirmed: this.state.confirmed,
      user_id: ""
    };

    this.props.postItem(item);
  }
  render() {
    return <div />;
  }
}
PostForm.propTypes = {
  postItem: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  category_id: state.category_id
});

export default connect(
  mapStateToProps,
  { postItem }
)(SportForm);
