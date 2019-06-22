import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllUsers } from "../actions/usersAct";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class RandomUsers extends Component {

  constructor(props) {
    super(props);
  }
  state = {
    users: []
  };

  componentWillMount() {
    //this.setState({ users: this.props.users })

    this.props.getAllUsers();
    this.shuffle(this.props.users)
    // console.log(this.props.users)

  }


  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }


  render() {
    console.log(this.shuffle(this.props.users))
    this.shuffle(this.props.users)
    return (
      < div >

        {
          // console.log(this.props.users)
          this.props.users.slice(0, 8).map((user) =>
            // <ul>
            //   <li key={user.id}> {user.username} </li>
            // </ul>
            user.image_url ? <table>
              <tbody>
                <tr>
                  <td key={user.id} class="product-thumbnail">
                    <a href="#"><img src={user.image_url} width="80px" heigh="80px" alt="" /></a>
                  </td>
                  <td>
                    
                  </td>

                </tr>
              </tbody>
            </table> : <h3>no photo</h3>



          )
        }

      </div >
    )
  }
}


const mapStateToProps = state => ({
  users: state.usersReducer.users
});

export default connect(mapStateToProps, { getAllUsers })(RandomUsers);