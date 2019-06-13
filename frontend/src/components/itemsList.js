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

        <div key={item.id} className="row custom-row" >
          <div className="custom-col-5 custom-col-style">
            <div className="single-product mb-35">
              <div className="product-img">
                <a href="#"><img src="assets/img/shop/shop-grid-1/2.jpg" alt="" />

                </a>
                <div className="product-action">
                  <a title="Wishlist" className="animate-left" href="#"><i className="ion-ios-heart-outline"></i></a>
                  <a title="Quick View" data-toggle="modal" data-target="#exampleModal" className="animate-right" href="#"><i className="ion-ios-eye-outline"></i></a>
                </div>
              </div>
              <div className="product-content">
                <div className="product-title-price">
                  <div className="product-title">
                    <h4><a href="product-details-6.html">
                      <div key={item.id}>
                        <p>{'item name :   '} {item.name} {'item describtion:       '} {item.description}</p>

                      </div>

                    </a></h4>
                  </div>
                  <div className="product-price">
                    <span>{item.price + ' JD'}</span>
                  </div>
                </div>
                <div className="product-cart-categori">
                  <div className="product-cart">
                    <span>{item.name}</span>
                  </div>
                  <div className="product-categori">
                    <a href="#"><i class="ion-bag"></i> Add to cart</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
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