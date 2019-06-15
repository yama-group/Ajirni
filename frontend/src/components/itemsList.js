import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllItems } from "../actions/itemsActions";
import { search } from "../actions/itemAction";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class itemsList extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    category: "",
    itemsData: []
  };
  componentWillMount() {
    // this.setState(
    //   {
    //     itemsData: this.props.itemsData
    //   },
    //   () => this.props.getAllItems(2)
    // );
  }
  componentWillReceiveProps(next) {
    console.log(next);
    if (next.itemsData.length > 0) {
      this.setState({
        itemsData: next.itemsData
      });
    }
  }
  componentDidMount() {
    //var c = this.props.category;
    console.log(this.state.category)
    this.props.getAllItems();
  }

  render() {
    return (
      <div>
        <div className="blog-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              {this.state.itemsData.map(item => {
                return (
                  <div
                    className="col-md-6 col-lg-4 col-xl-4 col-12"
                    key={item.id}
                  >
                    <div className="single-blog mb-50">
                      <div className="blog-img">
                        <a>
                          <img src={"assets/img/blog/2.jpg"} alt="" />
                        </a>
                      </div>
                      <div className="blog-info">
                        <Link to="/ite">
                          <h3>{item.name}</h3>
                        </Link>
                        <div className="blog-meta">
                          <ul>
                            <li>condition : {item.condition}</li>
                          </ul>
                        </div>
                        <p>{item.describtion}</p>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="col-md-12" />

              <div className="row">
                <div className="col-md-12">
                  <div className="pagination-style text-center">
                    <ul>
                      <li className="active">
                        <a>1</a>
                      </li>
                      <li>
                        <a>2</a>
                      </li>
                      <li>
                        <a>3</a>
                      </li>
                      <li>
                        <a>4</a>
                      </li>
                      <li>
                        <a>
                          <i className="ion-chevron-right" />
                        </a>
                      </li>
                    </ul>
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
  itemsData: state.itemsData.items,
  category: state.item.category_id
});

export default connect(
  mapStateToProps,
  { getAllItems }
)(itemsList);
