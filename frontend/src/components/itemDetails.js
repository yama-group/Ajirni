/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { connect } from 'react-redux';
import {fetchItem} from "../actions/itemDetailsAction"


class ItemDetailCar extends React.Component{

    componentWillMount(){

        this.props.fetchItem()
      console.log(this.props)  
    }

    render(){
        return(  
            <div className="product-details ptb-100 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="product-details-btn">
                            <a href="#"><i className="ion-arrow-left-c"></i></a>
                            <a className="active" href="#"><i className="ion-arrow-right-c"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-lg-7 col-12">
                        <div className="product-details-img-content">
                            <div className="product-details-tab mr-70">
                                <div className="product-details-large tab-content">
                                    <div className="tab-pane active show fade" id="pro-details1" role="tabpanel">
                                        <div className="easyzoom easyzoom--overlay">
                                            <a href="assets/img/product-details/bl1.jpg">
                                                <img src="assets/img/product-details/l1.jpg" alt=""/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pro-details2" role="tabpanel">
                                        <div className="easyzoom easyzoom--overlay">
                                            <a href="assets/img/product-details/bl2.jpg">
                                                <img src="assets/img/product-details/l2.jpg" alt=""/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pro-details3" role="tabpanel">
                                        <div className="easyzoom easyzoom--overlay">
                                            <a href="assets/img/product-details/bl3.jpg">
                                                <img src="assets/img/product-details/l3.jpg" alt=""/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pro-details4" role="tabpanel">
                                        <div className="easyzoom easyzoom--overlay">
                                            <a href="assets/img/product-details/bl4.jpg">
                                                <img src="assets/img/product-details/l4.jpg" alt=""/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-details-small nav mt-12 main-product-details" >
                                    <a className="active mr-12" href="#pro-details1" data-toggle="tab" role="tab" aria-selected="true">
                                        <img src="assets/img/product-details/s1.jpg" alt=""/>
                                    </a>
                                    <a className="mr-12" href="#pro-details2" data-toggle="tab" role="tab" aria-selected="true">
                                        <img src="assets/img/product-details/s2.jpg" alt=""/>
                                    </a>
                                    <a className="mr-12" href="#pro-details3" data-toggle="tab" role="tab" aria-selected="true">
                                        <img src="assets/img/product-details/s3.jpg" alt=""/>
                                    </a>
                                    <a className="mr-12" href="#pro-details4" data-toggle="tab" role="tab" aria-selected="true">
                                        <img src="assets/img/product-details/s4.jpg" alt=""/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-5 col-12">
                        <div className="product-details-content">
                            <h3>{this.props.item.name}</h3>
                            <div className="details-price">
                                <span>${this.props.item.price}/day</span>
                            </div>
                            <p>{this.props.item.description}</p>
                            <div className="quick-view-select">
                            {this.props.item.category_id === 1 ?<div className="select-option-part">
                                    <label><strong>Condition:</strong></label>
                                    <p>{this.props.item.condition}</p>
                                </div>:""}
                                {this.props.item.category_id === 2 ?<div className="select-option-part">
                                    <label><strong>Car Make:</strong></label>
                                    <p>{this.props.item.car_make}</p>
                                </div>:""}
                                {this.props.item.category_id === 2 ?<div className="select-option-part">
                                    <label><strong>Year Manufactured:</strong></label>
                                    <p>{this.props.item.year_manufactured}</p>
                                </div>:""}
                            {this.props.item.category_id === 1 ?<div className="select-option-part">
                                    <label><strong>Location:</strong></label>
                                    <p>{this.props.item.location}</p>
                                </div>:""}
                                {this.props.item.category_id === 1 ?<div className="select-option-part">
                                    <label><strong>Color:</strong></label>
                                    <p>{this.props.item.color}</p>
                                </div>:""}
                                {this.props.item.category_id?<div className="select-option-part">
                                    <label><strong>Quantity:</strong></label>
                                    <p>{this.props.item.quantity}</p>
                                </div>:""}
                                

                                
                               
                            </div>
                            <div className="quickview-plus-minus">
                                <div className="quickview-btn-cart">
                                    <a className="btn-hover-black" href="#">Contact</a>
                                </div>
                                <div className="quickview-btn-wishlist">
                                    <a className="btn-hover" href="#"><i className="ion-ios-heart-outline"></i></a>
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
    item: state.itemDetails.item
    
  });

export default connect(mapStateToProps,{fetchItem})(ItemDetailCar)