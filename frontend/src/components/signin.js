// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { createPost } from '../actions/postActions';

// class PostForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: '',
//       password: ''
//     };

//     this.onChange = this.onChange.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);
//   }

//   onChange(e) {
//     this.setState({ [e.target.name]: e.target.value });
//   }

//   onSubmit(e) {
//     e.preventDefault();

//     const logIn = {
//       email: this.state.email,
//       password: this.state.password
//     };

//     this.props.signIn(logIn);
//   }

//   render() {
//     return (
//       <div>
//         <h1>Sign In</h1>
//         <div className="register-area ptb-100">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-md-12 col-12 col-lg-6 col-xl-6 ml-auto mr-auto">
//                             <div className="login">
//                                 <div className="login-form-container">
//                                     <div className="login-form">
//                                         <form action="#" method="post">
//                                             <input type="text" name="user-name" placeholder="Username"/>>
//                                             <input type="password" name="user-password" placeholder="Password"/>>
//                                             <div className="button-box">
//                                                 <div className="login-toggle-btn">
//                                                     <input type="checkbox"/>>
//                                                     <label>Remember me</label>
//                                                     {/* <a>Forgot Password?</a> */}
//                                                 </div>
//                                                 <button type="submit" className="default-btn floatright">Login</button>
//                                             </div>
//                                         </form>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//       </div>
//     );
//   }
// }

// PostForm.propTypes = {
//   createPost: PropTypes.func.isRequired
// };

// export default connect(null, { createPost })(PostForm);
