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
    this.props.getAllUsers();
    //this.setState({ users: this.props.users })


  }

  render() {
    return (
      <div>

        {
          // console.log(this.props.users)
          this.props.users.map((user) =>
            // <ul>
            //   <li key={user.id}> {user.username} </li>
            // </ul>
            <table>
              <tbody>
                <tr>
                  <td key={user.id} class="product-thumbnail">
                    <a href="#"><img src={user.image_url} width="50px" heigh="50px" alt="" /></a>
                  </td>

                </tr>
              </tbody>
            </table>
          )
        }

      </div>
    )
  }
}


const mapStateToProps = state => ({
  users: state.usersReducer.users
});

export default connect(mapStateToProps, { getAllUsers })(RandomUsers);