import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getAllItems } from '../actions/itemsActions'

class itemsList extends Component {

  componentWillMount() {
    this.props.getAllItems();
  }

  render() {

    const allItems = this.props.itemsData.map((item) => {
      return (
        <div key={item.id}>
          <p>{'item name :   '} {item.name} {'item describtion:       '} {item.description}</p>

        </div>
      )
    })

    return (
      <div>
        <h1> all items </h1>
        {allItems}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  itemsData: state.itemsData.items
})

export default connect(mapStateToProps, { getAllItems })(itemsList)