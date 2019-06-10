import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { postItem } from "../actions/itemAction";

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
    return (
      <div>
        <div className="col-lg-6 col-md-12 col-12">
          <form action="#">
            <div className="checkbox-form">
              <h3>Soprt Form</h3>
              <div className="row">
                <div className="col-md-6">
                  <div className="checkout-form-list">
                    <label>
                      Name <span className="required">*</span>
                    </label>
                    <input type="text" placeholder="" />
                  </div>
                </div>
                <div id="ship-box-info" className="row">
                  <div className="col-md-12">
                    <div className="country-select">
                      <label>
                        Country <span className="required">*</span>
                      </label>
                      <select>
                        <option value="volvo">Jo</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
SportForm.propTypes = {
  postItem: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  category_id: state.category_id
});

export default connect(
  mapStateToProps,
  { postItem }
)(SportForm);
