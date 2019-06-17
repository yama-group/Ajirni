// import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { postItem } from "../actions/itemAction";
// import { storage } from "../firebase";

// class SportForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       description: "",
//       condition: "New",
//       category_id: "",
//       location: "",
//       price: "0",
//       color: "",
//       quantity: "1",
//       status: "",
//       confirmed: "False",
//       user_id: "",
//       image: null,
//       imgUrl: []
//     };
//     this.onChange = this.onChange.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);
//   }

//   componentWillMount() {
//     this.setState({
//       category_id: this.props.category_id,
//       user_id: this.props.user_id
//     });
//   }
//   handleImgChange(e) {
//     if (e.target.files[0]) {
//       const image = e.target.files[0];
//       this.setState(() => ({ image }));
//     }
//   }

//   handleImgUpload() {
//     const { image } = this.state;
//     const uploadTask = storage.ref(`images/${image.name}`).put(image);
//     uploadTask.on(
//       "state_changed",
//       snapshot => {
//         //progress function ....
//         // const progress = Math.round(
//         //   (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//         // );
//         // this.setState({ progress });
//       },
//       error => {
//         // error function ....
//         console.log(error);
//       },
//       () => {
//         // complete function ....
//         storage
//           .ref("images")
//           .child(image.name)
//           .getDownloadURL()
//           .then(imgUrl => {
//             this.setState({ imgUrl: [...this.state.imgUrl, imgUrl] });
//           });
//       }
//     );
//   }

//   onChange(e) {
//     this.setState({ [e.target.name]: e.target.value });
//   }

//   onSubmit(e) {
//     e.preventDefault();

//     const item = {
//       name: this.state.name,
//       description: this.state.description,
//       condition: this.state.condition,
//       category_id: this.state.category_id,
//       location: this.state.location,
//       price: this.state.price,
//       color: this.state.color,
//       quantity: this.state.quantity,
//       status: this.state.status,
//       confirmed: this.state.confirmed,
//       user_id: this.state.user_id,
//       imgUrl: this.state.imgUrl
//     };
//     this.setState({
//       name: "",
//       description: "",
//       condition: "New",
//       location: "",
//       price: "0",
//       color: "",
//       quantity: "1",
//       status: "available",
//       imgUrl: [],
//       image: null
//     });
//     console.log(item);
//     this.props.postItem(item);
//   }
//   render() {
//     return (
//       <div>
//         <div className="col-lg-6 col-md-12 col-12">
//           <form>
//             <div className="checkbox-form">
//               <h3>Sport Form</h3>
//               <div className="row">
//                 <div className="col-md-6">
//                   <div className="checkout-form-list">
//                     <label>
//                       Item Name <span className="required">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       name="name"
//                       placeholder="bm bicycle"
//                       onChange={this.onChange}
//                       value={this.state.name}
//                     />
//                   </div>
//                 </div>

//                 <div className="col-md-6">
//                   <div className="checkout-form-list">
//                     <label>
//                       Renting Price per day<span className="required">*</span>
//                     </label>
//                     <input
//                       type="number"
//                       min="0"
//                       name="price"
//                       placeholder="50"
//                       onChange={this.onChange}
//                       value={this.state.price}
//                     />
//                   </div>
//                 </div>

//                 <div className="col-md-6">
//                   <div className="checkout-form-list">
//                     <label>
//                       Location <span className="required">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       name="location"
//                       placeholder="Amman"
//                       onChange={this.onChange}
//                       value={this.state.location}
//                     />
//                   </div>
//                 </div>

//                 <div className="col-md-6">
//                   <div className="checkout-form-list">
//                     <label>
//                       Quantity <span className="required">*</span>
//                     </label>
//                     <input
//                       type="number"
//                       min="0"
//                       name="quantity"
//                       placeholder="1"
//                       onChange={this.onChange}
//                       value={this.state.quantity}
//                     />
//                   </div>
//                 </div>

//                 <div className="col-md-6">
//                   <div className="checkout-form-list">
//                     <label>
//                       Color <span className="required">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       name="color"
//                       placeholder="Blue"
//                       onChange={this.onChange}
//                       value={this.state.color}
//                     />
//                   </div>
//                 </div>

//                 <div className="col-md-6">
//                   <div className="country-select">
//                     <label>
//                       Condition <span className="required">*</span>
//                     </label>
//                     <select
//                       name="condition"
//                       onChange={this.onChange}
//                       value={this.state.condition}
//                     >
//                       <option value="New">New</option>
//                       <option value="Used">Used</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div className="col-md-12">
//                   <div className="checkout-form-list">
//                     <label>
//                       Description <span className="required">*</span>
//                     </label>
//                     <textarea
//                       cols="30"
//                       rows="2"
//                       name="description"
//                       placeholder="description"
//                       onChange={this.onChange}
//                       value={this.state.description}
//                     />
//                   </div>
//                 </div>

//                 <div className="col-md-12">
//                   <input
//                     type="checkbox"
//                     id="newsletter-permission"
//                     name="status"
//                     value={this.state.status}
//                   />
//                   <label> Avilable Directly</label>
//                 </div>
//                 {/* <label>Choose file</label> */}
//                 <input
//                   className="col-md-4"
//                   aria-describedby="inputGroupFileAddon01"
//                   type="file"
//                   accept="image/*"
//                   data-max-size="5000"
//                   onChange={this.handleImgChange.bind(this)}
//                 />

//                 <button type="button" onClick={this.handleImgUpload.bind(this)}>
//                   Upload
//                 </button>
//                 <div className="col-md-12" />
//                 {/* <img
//                   src={
//                     this.state.imgUrl[0] ||
//                     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSd6J9YsKM3PyT9fNDGqbt3cJA90-Hi6KvKtj2DKK7SAYJoY1S"
//                   }
//                   alt="uploaded images"
//                   height="100"
//                   width="100"
//                 /> */}

//                 <div role="tablist">
//                   {this.state.imgUrl.map((image, i) => (
//                     <img
//                       role="tab"
//                       key={i}
//                       src={image}
//                       alt=""
//                       className="mt-12"
//                     />
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <div className="order-button-payment">
//               <input type="submit" value="Add" onClick={this.onSubmit} />
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }
// SportForm.propTypes = {
//   postItem: PropTypes.func.isRequired
// };
// ////// should changed to category_id from other component
// ////// should changed to user_id from login component
// const mapStateToProps = state => ({
//   category_id: state.item.category_id,
//   user_id: state.item.user_id
// });

// export default connect(
//   mapStateToProps,
//   { postItem }
// )(SportForm);
