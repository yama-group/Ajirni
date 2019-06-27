import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllItems, itemId } from "../actions/itemsActions";
import { search } from "../actions/itemAction";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import Loader from 'react-loader-spinner'
import { Card,Button } from 'react-bootstrap'
class itemsList extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  state = {
    category: "",
    itemsData: []
  };

  componentWillMount(){
    const category_id= window.localStorage.getItem("category_id")
    console.log(category_id)
    axios
    .get(`/search/?category_id=${category_id}`)
    .then(response => {
       this.setState({
         itemsData:response.data
       })
    })
    .catch(error => {
      // console.log(error);
    });
  }

  componentWillReceiveProps(next) {
    // console.log(next);
    if (next.itemsData.length >= 0) {
      this.setState({
        itemsData: next.itemsData
      });
    }
  }

  render() {
    console.log(this.state.itemsData)
    return (
      <div>
        <div className="blog-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              {this.state.itemsData.length === 0 ? (
                <div style={{marginLeft:"45%"}}>
                <Loader
                type="ThreeDots"
                color="#7A0400"
                height="100"	
                width="100"
                
                /></div>
              ) : (
                this.state.itemsData.map(item => {
                  return (
                    <div
                      className="col-md-6 col-lg-4 col-xl-4 col-12"
                      key={item.id}
                    >
                      <div className="single-blog mb-50">
                        <div className="blog-img">
                          
                          <Card style={{ width: '18rem' }}>
                          <Link onClick={() => this.props.itemId(item.id)} to="/itemDetail">
                           <Card.Img style={{height:"200px"}} variant="top" src={item.images.length>0 ?item.images[0].img_url: "http://ppc.tools/wp-content/themes/ppctools/img/no-thumbnail.jpg"} />
                           </Link>
                            <Card.Body>
                              <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                  <p>{item.description.slice(0,50)+"..."}</p>
                                 {item.category ===3? <div 
                                 
                                 >
                                   
                                    <img style={{width:"24px",height:"24px",paddingRight:"4px"}} src="https://liv.rent/static/media/Bath.119f2250.svg" /> 
                                  
                                  <b style={{paddingRight:"7%"}}>{item.no_bathrooms} Baths</b>
                                  <img style={{width:"24px",height:"24px",paddingRight:"4px"}} src="https://liv.rent/static/media/Bed.cf820750.svg" />
                                  <b>{item.no_rooms} Rooms</b>
                                  <i class="im im-location"></i><b>{item.location}</b>
                                  <hr></hr>
                                  <strong style={{color:"#7A0400"}}>${item.price}/Month</strong>
                                  
                                  </div>:""}
                                  {item.category === 2?
                                  <div>
                                    <i class="im im-calendar"></i><b style={{paddingRight:"7px"}}> {item.year_manufactured}</b>
                                    <i class='fas fa-car-alt' style={{fontSize:"24px"}}></i> <b>{item.car_make}</b>
                                    <i class="im im-location"></i><b>{item.location}</b>
                                    <hr></hr>
                                  <strong style={{color:"#7A0400"}}>${item.price}/Day</strong>
                                    </div>:""

                                  }

                                  {
                                    item.category !==2 && item.category !==3 ?<div>
                                    <i class="im im-location"></i><b>{item.location}</b>
                                    <hr></hr>
                                  <strong style={{color:"#7A0400"}}>${item.price}/Day</strong>
                                    </div> :""
                                  }
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>

                        </div>
                        {/* <div
                          className="blog-info"
                          onClick={() => this.props.itemId(item.id)}
                        >
                          
                          <Link to="/itemDetail">
                            <h4>{item.name}</h4>
                          </Link>
                          <div className="blog-meta">
                            <ul>
                              <li><span style={{color:"#B30000",fontSize:"14px"}}>${item.price}/day</span> </li>
                            </ul>
                          </div>
                          <p>{item.describtion}</p>
                        </div> */}
                      </div>
                    </div>
                  );
                })
              )}

              <div className="col-md-12" />
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  itemsData: state.itemsData.items,
  category: state.itemsData.category_id
});

export default connect(
  mapStateToProps,
  { getAllItems, itemId,search }
)(itemsList);
