import React, {Component} from "react"
import { connect } from 'react-redux'
import { getReviews, postReviews } from '../actions/reviewsAction'
import { BrowserRouter as Router, Link } from "react-router-dom";



class Reviews extends Component {

  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      item_id: "",
      rating: "",
      username: window.localStorage.getItem("username"),
      userId: window.localStorage.getItem("userId"),
      review: ""
    }
  }
  componentWillMount() {
    this.setState({ item_id: this.props.item_id }, () =>{
      this.props.getReviews(this.state.item_id)
    })
  }

  onChange(e) {
    this.setState({[e.target.name]:e.target.value})
    console.log(e.target.value)
  }

  postReview() {
   const addedReview = {
     review: this.state.review,
     rating: parseInt(this.state.rating),
     item_id: this.state.item_id,
     userId: parseInt(this.state.userId),
     username: this.state.username
   }
  //  console.log(addedReview)
   this.props.postReviews(addedReview)
  }

  render() {
    return (
      <div>
      <div id = "reviewScroll">
        {this.props.reviews.map( rev => {
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
        <div>
          <br />
          <br />
        <p>Add your Rating Here:</p>
          <input type="radio" name="rating" value="1" onChange = {this.onChange.bind(this)}/> One Star  
          <input type="radio" name="rating" value="2" onChange = {this.onChange.bind(this)}/> Two Star  
          <input type="radio" name="rating" value="3" onChange = {this.onChange.bind(this)}/> Three Star  
          <input type="radio" name="rating" value="4" onChange = {this.onChange.bind(this)}/> Four Star  
          <input type="radio" name="rating" value="5" onChange = {this.onChange.bind(this)}/> Five Star  <br />
          <br /> <br />
          Enter Review here...
          <textarea rows="4" cols="50" name="review" onChange = {this.onChange.bind(this)}>
            </textarea>
        </div>
        <div className="quickview-btn-cart">
          <button  className="btn-hover-black" onClick = {this.postReview.bind(this)}>
            add Review
          </button>
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