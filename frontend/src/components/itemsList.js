import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getAllItems } from '../actions/itemsActions'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class itemsList extends Component {

  constructor(props) {
    super(props);


  }
  state = {
    category: ""
  }
  componentDidMount() {
    //var c = this.props.category;
    console.log(this.state.category)
    this.props.getAllItems();
    this.setState({ category: this.props.location.pathname[this.props.location.pathname.length - 1] })
  }


  render() {
    // const allItems = this.props.itemsData.map((item) => {
    //   return (

    //     <div key={item.id} className="row custom-row" >
    //       <div className="custom-col-5 custom-col-style">
    //         <div className="single-product mb-35">
    //           <div className="product-img">
    //             <a ><img src="assets/img/shop/shop-grid-1/2.jpg" alt="" />

    //             </a>
    //             <div className="product-action">
    //               <a title="Wishlist" className="animate-left" ><i className="ion-ios-heart-outline"></i></a>
    //               <a title="Quick View" data-toggle="modal" data-target="#exampleModal" className="animate-right" ><i className="ion-ios-eye-outline"></i></a>
    //             </div>
    //           </div>
    //           <div className="product-content">
    //             <div className="product-title-price">
    //               <div className="product-title">
    //                 <h4><a href="product-details-6.html">
    //                   <div key={item.id}>
    //                     <p>{'item name :   '} {item.name} {'item describtion:       '} {item.description}</p>

    //                   </div>

    //                 </a></h4>
    //               </div>
    //               <div className="product-price">
    //                 <span>{item.price + ' JD'}</span>
    //               </div>
    //             </div>
    //             <div className="product-cart-categori">
    //               <div className="product-cart">
    //                 <span>{item.name}</span>
    //               </div>
    //               <div className="product-categori">
    //                 <a ><i class="ion-bag"></i> Add to cart</a>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>



    //   )
    // })

    return (

      <div>
        {/* <h1> all items </h1>


        {allItems} */}
        <div className="blog-area pt-100 pb-100">
          <div className="container">
            <div className="row">


              {this.props.itemsData.map((item) => {
                return (
                  <div className="col-md-6 col-lg-4 col-xl-4 col-12" key={item.id}>
                    <div className="single-blog mb-50">
                      <div className="blog-img">
                        <a ><img src={"assets/img/blog/2.jpg"} alt="" /></a>
                      </div>
                      <div className="blog-info">
                        <Link to="/ite"><h3><a >{item.name}</a></h3></Link>
                        <div className="blog-meta">
                          <ul>
                            <li>condition : {item.condition}</li>
                          </ul>
                        </div>
                        <p>{item.describtion}</p>
                      </div>
                    </div>
                  </div>)
              })}


              <div className="col-md-12" />

              <div className="row">
                <div className="col-md-12">
                  <div className="pagination-style text-center">
                    <ul>
                      <li className="active"><a >1</a></li>
                      <li><a >2</a></li>
                      <li><a >3</a></li>
                      <li><a >4</a></li>
                      <li><a ><i class="ion-chevron-right"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  itemsData: state.itemsData.items,
  category: state.item.category_id,

})


export default connect(mapStateToProps, { getAllItems })(itemsList)