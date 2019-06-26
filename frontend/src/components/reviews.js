/* eslint-disable jsx-a11y/anchor-is-valid */
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
    const repeat =<i className="fa fa-star"></i>
    return (
      // <div>
         
     
      //   <div>
          
      //     <div>
       
      // </div>
      //     Enter Review here...
      //     <textarea rows="4" cols="50" name="review" onChange = {this.onChange.bind(this)}>
      //       </textarea>
      //   </div>
      //   <div className="quickview-plus-minus">
        
      //     <StarRatingComponent 
      //    style={{width:"250px"}}
      //     name="rate1" 
      //     starCount={5}
      //     value={rating}
      //     onStarClick={this.onStarClick.bind(this)}
      //     editing={true}
      //   />
          
      //   <br/>
      //   <div className="quickview-btn-cart">
      //               <Link to="/chat">
      //                 Contact
      //               </Link>
      //             </div>
          
         
      //    </div>
         
      //   {this.state.reviews.map( rev => {
      //     return(
      //       <div>
      //         <p><strong>{rev.user_name.toUpperCase()}</strong></p>
      //          <img src={'./images/' + rev.starsReview + ".png"}  alt="" style= {{width:"100px",marginTop:"-45px",}}/>
      //         <p>{rev.textReview}
      //         <br /></p> 
      //       </div>
      //     )
      //   })}
        
      // </div>

      <section className="write-review py-5 bg-light" id="write-review">
    <div className="container">
    <div className="row">
        <div className="col-md-4">
            <div className="row">
		    
		</div>
		<hr/>
    {this.state.reviews.map((review)=>{
      let stars = ""
      // eslint-disable-next-line no-lone-blocks
      {switch(review.starsReview){
       case 1:
        stars=<i className="fa fa-star"></i>;
        case 2:
        stars=<><i className="fa fa-star"></i><i className="fa fa-star"></i></>;
        case 3:
        stars=<><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></>;
        case 4:
        stars=<><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></>;
        case 5:
        stars=<><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></>;
        
      }}
      return(
        <div className="row">
		        <div className="col-md-6">
		            <p><b>{review.user_name.toUpperCase()}</b></p>
		        </div>
		        <div style={{marginTop:"-5%"}} className="col-md-8 text-warning">
              {stars}
		        
		    </div>
        <div className="col-md-8 ">
              {review.textReview}
		        <hr></hr>
		    </div>
		    </div>
          
      )
    })}
		    
		   
		   
		  
		    
		   
        </div>
        <div className=" col-md-8 my-5 py-5">
            <h6>Write your idea about this item:</h6>
            <textarea rows="4" cols="50" name="review" onChange = {this.onChange.bind(this)}>
            </textarea>
            <div className="quickview-plus-minus">
              
              <div className="quickview-btn-wishlist">
              <StarRatingComponent 
         style={{width:"250px"}}
          name="rate1" 
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
          editing={true}
        />
        <br/>
                <a href="#btn-hover" onClick={this.postReview.bind(this)} className="btn-hover">Write Reviews</a>
                </div>
              
              </div>
            

        </div>
    </div>
</div>
</section>
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