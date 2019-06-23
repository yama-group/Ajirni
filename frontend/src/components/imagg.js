import React, { Component } from 'react'

class Imagg extends Component {
  render() {
    return (
      <div>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  images: state.itemDetails.images
});

export default connect(
  mapStateToProps,
  { fetchItem }
)(Imagg);

