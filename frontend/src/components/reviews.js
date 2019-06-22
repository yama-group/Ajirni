import React, {Component} from "react"
import { connect } from 'react-redux'
import { getReviews, postReviews } from '../actions/reviewsAction'
import { BrowserRouter as Router, Link } from "react-router-dom";



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

  onChange(e) {
    this.setState({[e.target.name]:e.target.value})
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
                  <img src={'./images/' + rev.starsReview+ ".png"}  alt="" style= {{width:"100px"}}/>
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
        <div className="quickview-btn-cart">
         </div>
          </div>
          <button  className="btn-hover-black" >
            add Review
          </button>
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