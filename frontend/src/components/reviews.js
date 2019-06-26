import React, {Component} from "react"
import { connect } from 'react-redux'
import { getReviews, postReviews } from '../actions/reviewsAction'
import { BrowserRouter as Router, Link } from "react-router-dom";
import StarRatingComponent from 'react-star-rating-component';


class Reviews extends Component {

  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      item_id: "",
      rating: 1,
      username: window.localStorage.getItem("username"),
      userId: window.localStorage.getItem("userId"),
      review: "",
      rating: 1
    }
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }

  componentWillMount() {
    this.setState({ item_id: this.props.item_id }, () =>{
      this.props.getReviews(this.state.item_id)
    })
  }

  componentWillReceiveProps(next) {
    // console.log(next.images, "next", next);
    if (next.reviews.length > 0) {
      this.setState({
        reviews: next.reviews
      });
    }
  }

  onChange(e) {
    this.setState({[e.target.name]:e.target.value})
    console.log(e.target.value)
  }

  postReview() {
   const addedReview = {
    textReview: this.state.review,
    starsReview:this.state.rating,
    item: this.state.item_id,
    user: this.state.userId,
    user_name: this.state.username
   }
   console.log(addedReview)
   this.props.postReviews(addedReview)
  }
  

  render() {
    const { rating } = this.state;
    return (
      <div>
         
     
        <div>
          
          <div>
        <h2>Rating from state: {rating}</h2>
        <StarRatingComponent 
        style={{fontSize:"50px"}}
          name="rate1" 
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
          editing={true}
        />
      </div>
          Enter Review here...
          <textarea rows="4" cols="50" name="review" onChange = {this.onChange.bind(this)}>
            </textarea>
        </div>
        <div className="quickview-btn-cart">
          <button  className="btn-hover-black" onClick = {this.postReview.bind(this)}>
            add Review
          </button>
         </div>
         <div id = "reviewScroll">
        {this.state.reviews.map( rev => {
          return(
            <div>
              <br />
              <table class="table table-hover">
              <tbody>
              <tr>
                <td>
                  <img src={'./images/' + rev.starsReview + ".png"}  alt="" style= {{width:"100px"}}/>
                </td>
                <td>
                  {rev.textReview}
                </td>
              </tr> 
              </tbody>
              </table>
            </div>
          )
        })}
        </div>
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