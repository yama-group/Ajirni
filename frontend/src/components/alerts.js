import React, { Component, Fragment } from 'react'
import { withAlert } from 'react-alert'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

export class Alerts extends Component {

  static propTypes = {
    error: PropTypes.object.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, alert } = this.props;
    if (error !== prevProps.error) {

      if (error.msg.phone) {
        alert.error(`phone: ${error.msg.phone.join()}`)
      }
      if (error.msg.image_url) {
        alert.error(`image: ${error.msg.image_url.join()}`)
      }
      if (error.msg.password) {
        alert.error(`password: ${error.msg.password.join()}`)
      }
      if (error.msg.username) {
        alert.error(`username: ${error.msg.username.join()}`)
      }
    }

  }

  render() {
    return <Fragment />;
  }
}


const mapStateToProps = state => ({
  error: state.errorMsg,
});


export default connect(mapStateToProps)(withAlert()(Alerts))