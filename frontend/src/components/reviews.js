import React, {Component} from "react"
import { connect } from 'react-redux'
import { getReviews, postReviews } from '../actions/reviewsAction'
import { BrowserRouter as Router, Link } from "react-router-dom";
import stars from '../images/stars.png'


class Reviews extends Component {

  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      item_id: ""
    }
  }

  componentWillMount() {
    this.setState({ item_id: this.props.item_id }, () =>{
      this.props.getReviews(this.state.item_id)
    })
  }
addReview(){}
  render() {
    return (
      <div>
        <div className="quickview-btn-cart">
                    <a className="btn-hover-black" href="#">
                      add Review
                    </a>
                  </div>
        {this.props.reviews.map( rev => {
          return(
            <div>
              <br />
              <h4>{rev.starsReview}  <img src={stars} alt="" style= {{width:"100px"}}/></h4> 
              {rev.textReview}
            </div>
          )
        })}
      </div>
    )

  }
}
const mapStateToProps = state =>  ({
  reviews: state.review.itemReviews,
  item_id: state.itemsData.item_id
})

export default connect(
  mapStateToProps, { postReviews, getReviews }
)(Reviews)