import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllItems, itemId } from "../actions/itemsActions";
import { search } from "../actions/itemAction";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
class itemsList extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  state = {
    category: "",
    itemsData: []
  };

  componentDidMount(){
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
                <h3>No Items</h3>
              ) : (
                this.state.itemsData.map(item => {
                  return (
                    <div
                      className="col-md-6 col-lg-4 col-xl-4 col-12"
                      key={item.id}
                    >
                      <div className="single-blog mb-50">
                        <div className="blog-img">
                          <a>
                            <img src={item.images.length>0 ?item.images[0].img_url: "http://ppc.tools/wp-content/themes/ppctools/img/no-thumbnail.jpg"} alt="" />
                          </a>
                        </div>
                        <div
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
                        </div>
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
