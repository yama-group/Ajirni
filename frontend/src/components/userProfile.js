import React from "react";
import { connect } from "react-redux";
import { fetchUser, updateItem, deleteItem } from "../actions/userinfo";
import Car from "./CarsForm";
import {Link} from "react-router-dom"

import { Modal, Button } from "react-bootstrap";

class UserProfile extends React.Component {
  state = {
    items: [],
    itemSelected: {},
    
    show1: false,
    show2: false,
    show3: false,
    show4:false,
    updated:false
  };

  componentWillMount() {
    const userId = window.localStorage.getItem("userId")
    this.props.fetchUser(userId);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState(prevState => ({
      itemSelected: { ...prevState.itemSelected, [name]: value }
    }));
  }

  handleClose() {
    var id = this.state.itemSelected.id;
    var old = this.state.itemSelected
    delete old.id;
    console.log(id);
    this.props.updateItem(old, id);
    
    if (this.state.itemSelected.category === 3) {
      this.setState({ show3: false });
    } else if (this.state.itemSelected.category === 2) {
      this.setState({ show2: false });
    } else {
      this.setState({ show1: false });
    }
  }

  handleCloseDelete() {
    var id = this.state.itemSelected.id;

    this.props.deleteItem(id);

    if (this.state.itemSelected.category === 3) {
      this.setState({ show3: false });
    } else if (this.state.itemSelected.category === 2) {
      this.setState({ show2: false });
    } else {
      this.setState({ show1: false });
    }
  }

  handleShow(index) {
    var that = this;
    console.log(this.state.items[index])
    this.setState(
      {
        itemSelected: this.state.items[index]
      },
      () => {
        if (that.state.itemSelected.category === 3) {
          that.setState({ show3: true });
        } else if (that.state.itemSelected.category === 2) {
          that.setState({ show2: true });
        } else {
          that.setState({ show1: true });
        }
      }
    );
  }


  handleCloseWo(index) {
    var that = this;
    console.log(this.state.items[index])
    this.setState(
      {
        itemSelected: this.state.itemSelected
      },
      () => {
        if (that.state.itemSelected.category === 3) {
          that.setState({ show3: false });
        } else if (that.state.itemSelected.category === 2) {
          that.setState({ show2: false });
        } else {
          that.setState({ show1: false});
        }
      }
    );
  }


  

  componentWillReceiveProps(next) {
    if (next.items.length > 0) {
      this.setState({
        items: next.items
      });
    }
  }


  handleAddItem(){
    this.setState({
      show4:true
    })
  }

  handleAddItemClose(){
    this.setState({
      show4:false
    })
  }

  render() {
    const years = ["Older than 1980"];
    for (let i = 1980; i < 2021; i++) {
      years.unshift(i);
    }
    return (
      <div >
        <>
          <Modal style={{marginTop:"8%"}}  show={this.state.show1}>
            <Modal.Header>
              <Modal.Title>{this.state.itemSelected.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              
              <div className="row">
                <div className="col-lg-4">
                  Name:{" "}
                  <input
                    onChange={this.handleInputChange.bind(this)}
                    name="name"
                    value={this.state.itemSelected.name}
                    type="text"
                  />
                </div>

                <div className="col-lg-4">
                  Description:{" "}
                  <textarea
                    onChange={this.handleInputChange.bind(this)}
                    name="description"
                    value={this.state.itemSelected.description}
                    type="text"
                  />
                </div>
                <div className="col-lg-4">
                  Condition:
                  <select
                    name="condition"
                    value={this.state.itemSelected.condition}
                    onChange={this.handleInputChange.bind(this)}
                  >
                    <option value="New">New</option>
                    <option value="Used">Used</option>
                  </select>
                </div>
                <div className="col-lg-4">
                  Location:{" "}
                  <input
                    onChange={this.handleInputChange.bind(this)}
                    name="location"
                    value={this.state.itemSelected.location}
                    type="text"
                  />
                </div>
                <div className="col-lg-4">
                  Color:{" "}
                  <input
                    onChange={this.handleInputChange.bind(this)}
                    name="color"
                    value={this.state.itemSelected.color}
                    type="text"
                  />
                </div>
                <div className="col-lg-4">
                  Quantity:{" "}
                  <input
                    onChange={this.handleInputChange.bind(this)}
                    name="quantity"
                    value={this.state.itemSelected.quantity}
                    type="text"
                  />
                </div>
                <div className="col-lg-4">
                  Status:
                  <select
                    name="status"
                    value={this.state.itemSelected.status}
                    onChange={this.handleInputChange.bind(this)}
                  >
                    <option value="available">Available</option>
                    <option value="unavailable">Unavailable</option>
                  </select>
                </div>
                
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleCloseWo.bind(this)}>
                Close
              </Button>
              <Button variant="primary" onClick={this.handleClose.bind(this)}>
                Save Changes
              </Button>
              <Button
                variant="danger"
                onClick={this.handleCloseDelete.bind(this)}
              >
                Delete
              </Button>
            </Modal.Footer>
          </Modal>
        </>
        <>
          <Modal style={{marginTop:"8%"}} show={this.state.show2}>
            <Modal.Header>
              <Modal.Title>{this.state.itemSelected.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              
              <div className="row">
                <div className="col-lg-4">
                  Name:{" "}
                  <input
                    onChange={this.handleInputChange.bind(this)}
                    name="name"
                    value={this.state.itemSelected.name}
                    type="text"
                  />
                </div>
                <div className="col-lg-4">
                  Description:{" "}
                  <textarea
                    onChange={this.handleInputChange.bind(this)}
                    name="description"
                    value={this.state.itemSelected.description}
                    type="text"
                  />
                </div>
                <div className="col-lg-4">
                  Condition:
                  <select
                    name="condition"
                    value={this.state.itemSelected.condition}
                    onChange={this.handleInputChange.bind(this)}
                  >
                    <option value="New">New</option>
                    <option value="Used">Used</option>
                  </select>
                </div>
                <div className="col-lg-4">
                  Car Make:{" "}
                  <input
                    onChange={this.handleInputChange.bind(this)}
                    name="car_make"
                    value={this.state.itemSelected.car_make}
                    type="text"
                  />
                </div>
                <div className="col-lg-4">
                  Year Manufactured:{" "}
                  <select
                  name="year_manufactured"
                  value={this.state.itemSelected.year_manufactured}
                  onChange={this.handleInputChange.bind(this)}
                  >
                  {years.map((year, i) => (
                        <option key={i} value={year}>
                          {year}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="col-lg-4">
                  No.Killometers:{" "}
                  <input
                    onChange={this.handleInputChange.bind(this)}
                    name="no_killometers"
                    value={this.state.itemSelected.no_killometers}
                    type="number"
                  />
                </div>
                <div className="col-lg-4">
                  Fuel:
                  <select
                    name="fuel"
                    value={this.state.itemSelected.fuel}
                    onChange={this.handleInputChange.bind(this)}
                  >
                   <option value="diesel">Diesel</option>
                      <option value="gasoline">Gasoline</option>
                      <option value="hybrid">Hybrid</option>
                      <option value="electric">Electric</option>
                  </select>
                </div>
                <div className="col-lg-4">
                  Location:{" "}
                  <input
                    onChange={this.handleInputChange.bind(this)}
                    name="location"
                    value={this.state.itemSelected.location}
                    type="text"
                  />
                </div>
                <div className="col-lg-4">
                  Color:{" "}
                  <input
                    onChange={this.handleInputChange.bind(this)}
                    name="color"
                    value={this.state.itemSelected.color}
                    type="text"
                  />
                </div>
                <div className="col-lg-4">
                  Quantity:{" "}
                  <input
                    onChange={this.handleInputChange.bind(this)}
                    name="quantity"
                    value={this.state.itemSelected.quantity}
                    type="number"
                  />
                </div>
                <div className="col-lg-4">
                  Status:
                  <select
                    name="status"
                    value={this.state.itemSelected.status}
                    onChange={this.handleInputChange.bind(this)}
                  >
                    <option value="available">Available</option>
                    <option value="unavailable">Unavailable</option>
                  </select>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleCloseWo.bind(this)}>
                Close
              </Button>
              <Button variant="primary" onClick={this.handleClose.bind(this)}>
                Save Changes
              </Button>
              <Button
                variant="danger"
                onClick={this.handleCloseDelete.bind(this)}
              >
                Delete
              </Button>
            </Modal.Footer>
          </Modal>
        </>
        <>
          <Modal  style={{marginTop:"8%"}} show={this.state.show3}>
            <Modal.Header>
              <Modal.Title>{this.state.itemSelected.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="row">
                <div className="col-lg-4">
                  Name:{" "}
                  <input
                    onChange={this.handleInputChange.bind(this)}
                    name="name"
                    value={this.state.itemSelected.name}
                    type="text"
                  />
                </div>
                <div className="col-lg-4">
                  Description:{" "}
                  <textarea
                    onChange={this.handleInputChange.bind(this)}
                    name="description"
                    value={this.state.itemSelected.description}
                    type="text"
                  />
                </div>
                <div className="col-lg-4">
                  Condition:
                  <select
                    name="condition"
                    value={this.state.itemSelected.condition}
                    onChange={this.handleInputChange.bind(this)}
                  >
                    <option value="New">New</option>
                    <option value="Used">Used</option>
                  </select>
                </div>
                <div className="col-lg-4">
                  No.Rooms:{" "}
                  <input
                    onChange={this.handleInputChange.bind(this)}
                    name="no_rooms"
                    value={this.state.itemSelected.no_rooms}
                    type="number"
                  />
                </div>
                <div className="col-lg-4">
                  No.Bathrooms:{" "}
                  <input
                    onChange={this.handleInputChange.bind(this)}
                    name="no_bathrooms"
                    value={this.state.itemSelected.no_bathrooms}
                    type="number"
                  />
                </div>
                <div className="col-lg-4">
                  Surface Area:{" "}
                  <input
                    onChange={this.handleInputChange.bind(this)}
                    name="surface_area"
                    value={this.state.itemSelected.surface_area}
                    type="number"
                  />
                </div>
                <div className="col-lg-4">
                  Furnished:{" "}
                  <select
                    name="furnished"
                    value={this.state.itemSelected.furnished}
                    onChange={this.handleInputChange.bind(this)}
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className="col-lg-4">
                  Floor.No:{" "}
                  <input
                    onChange={this.handleInputChange.bind(this)}
                    name="floor_no"
                    value={this.state.itemSelected.floor_no}
                    type="number"
                  />
                </div>
                <div className="col-lg-4">
                  Location:{" "}
                  <input
                    onChange={this.handleInputChange.bind(this)}
                    name="location"
                    value={this.state.itemSelected.location}
                    type="text"
                  />
                </div>
                <div className="col-lg-4">
                  Quantity:{" "}
                  <input
                    onChange={this.handleInputChange.bind(this)}
                    name="quantity"
                    value={this.state.itemSelected.quantity}
                    type="number"
                  />
                </div>
                <div className="col-lg-4">
                  Status:
                  <select
                    name="status"
                    value={this.state.itemSelected.status}
                    onChange={this.handleInputChange.bind(this)}
                  >
                    <option value="available">Available</option>
                    <option value="unavailable">Unavailable</option>
                  </select>
                </div>{" "}
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleCloseWo.bind(this)}>
                Close
              </Button>
              <Button variant="primary" onClick={this.handleClose.bind(this)}>
                Save Changes
              </Button>
              <Button
                variant="danger"
                onClick={this.handleCloseDelete.bind(this)}
              >
                Delete
              </Button>
            </Modal.Footer>
          </Modal>
        </>
        <Modal style={{marginTop:"8%"}} show={this.state.show4}>
            <Modal.Header>
              <Modal.Title>Choose Catagory:</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div style={{paddingLeft:"28%"}}>    
            <Link to="/addcar"><img style={{width:"100px",height:"100px",marginRight:"30px"}} src="https://images.vexels.com/media/users/3/128870/isolated/preview/ec11c8b5ce0c388cc96a95edb95cb0c5-taxi-circle-icon-by-vexels.png"/></Link> 
             <Link to="addrealestate"><img style={{width:"92px",height:"92px",marginRight:"30px"}} src="http://www.practicepanther.com/wp-content/uploads/2015/02/Law-Practice-Management-Software-for-Real-Estate-Attorneys-400x400.png"/></Link> 
            <Link to="/others"><img style={{width:"100px",height:"100px"}} src="https://cdn3.iconfinder.com/data/icons/flat-circle-content/512/flat-style-circle-add-2-512.png"/></Link>  
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleAddItemClose.bind(this)}>
                Close
              </Button>
              
              
            </Modal.Footer>
          </Modal>
        <div className="blog-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="blog-sidebar">
                  <div className="sidebar-widget mb-50">
                    <img src={this.props.user.image_url} alt="" />
                    <div className="sidebar-img-content">
                      <h3>
                        {this.props.user.first_name} {this.props.user.last_name}
                      </h3>
                      <p>{this.props.user.email}</p>
                      <p>{this.props.user.phone}</p>

                      <div className="sidebar-img-social">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="ion-social-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="ion-social-tumblr" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="ion-social-facebook" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="ion-social-instagram-outline" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar-widget mb-50">
                    <h3 className="sidebar-title">Search Products</h3>
                    <div className="sidebar-search">
                      <form action="#">
                        <input placeholder="Search Products..." type="text" />
                        <button>
                          <i className="ion-ios-search-strong" />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div style={{marginLeft:"-2px",marginTop:"-15px"}} className="quickview-btn-cart">
                    <a onClick={this.handleAddItem.bind(this)} className="btn-hover-black" href="#">
                      Add Item
                    </a>
                  </div>
                  <br/>
                <div className="blog-details-style">
                
                  <div className="blog-part">
                    <h4>Products List:</h4>
                    <br />
                    {this.state.items.map((item, index) => {
                      if (item.status === "available") {
                        return (
                          <div key={index}>
                            <div className="single-top-rated">
                              <div className="top-rated-img">
                                <a href="#">
                                  <img
                                    onClick={this.handleShow.bind(this, index)}
                                    src="./assets/img/ava.png"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="top-rated-text">
                                <span>{item.name}</span>
                                <h4>
                                  <a href="#">{item.description}.</a>
                                </h4>
                              </div>
                            </div>
                            <br />
                          </div>
                        );
                      } else {
                        return (
                          <div key={index}>
                            <div className="single-top-rated">
                              <div className="top-rated-img">
                                <a href="#">
                                  <img
                                    onClick={this.handleShow.bind(this, index)}
                                    src="./assets/img/unava.png"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="top-rated-text">
                                <span>{item.name}</span>
                                <h4>
                                  <a href="#">{item.description}.</a>
                                </h4>
                              </div>
                            </div>
                            <br />
                          </div>
                        );
                      }
                    })}

                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.userInfo.user,
  items: state.userInfo.items
});

export default connect(
  mapStateToProps,
  { fetchUser, updateItem, deleteItem }
)(UserProfile);
