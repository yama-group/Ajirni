import { CometChat } from "@cometchat-pro/chat";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserInfo } from "../actions/UserItemsAction.js";
import axios from "axios";
class Chat extends Component {
  constructor(props) {
    super(props);
    //UID sender Id
    //RId reciver Id
    this.state = {
      messages: ["ok"],
      message: "",
      UID: "SUPERHERO2",
      RID: "eedddee"
    };
    this.onChange = this.onChange.bind(this);
    this.sendmsg = this.sendmsg.bind(this);
  }
  componentWillMount() {
    var appID = "4446a56d977929";
    var apiKey = "8a581b5950e68554c53f56bf8b083e543d4df5d1";
    // this.setState({ UID: this.props.username, RID: this.props.username });
    var request = require("request");

    var user = {
      role: this.props.username,
      name: this.props.username
    };

    CometChat.init(appID).then(
      () => {
        console.log("Initialization completed successfully");
        // login function.
        // axios
        //   .post("https://api.cometchat.com/v1.6/users", user, {
        //     headers: {
        //       apikey: "d444297f6c2cf9cab3f48ecba60eef1ebba9cbca",
        //       appid: "4446a56d977929",
        //       metadata: {},
        //       "content-type": "application/json"
        //     }
        //   })
        //   .then(res => {
        //     return res.json();
        //   })
        //   .then(rees => console.log(rees));

        this.loginChat(this.state.UID, apiKey);
      },
      error => {
        console.log("Initialization failed with error:", error);
      }
    );
    this.recivemsg("SUPERHER2SUPERHER2SUPERHER2");
  }
  loginChat(UID, apiKey) {
    CometChat.login(UID, apiKey).then(
      user => {
        console.log("Login Successful:", { user });
      },
      error => {
        console.log("Login failed with exception:", { error });
      }
    );
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  sendmsg() {
    var receiverID = this.state.RID;
    var messageText = this.state.message;
    this.setState({
      message: ""
    });
    var messageType = CometChat.MESSAGE_TYPE.TEXT;
    var receiverType = CometChat.RECEIVER_TYPE.USER;

    var textMessage = new CometChat.TextMessage(
      receiverID,
      messageText,
      messageType,
      receiverType
    );
    CometChat.sendMessage(textMessage).then(
      message => {
        console.log(this.state.messages);
        var temp = this.state.messages;
        this.setState({
          messages: [...temp, message.data.text]
        });
        console.log();
        console.log("Message sent successfully:", message);
      },
      error => {
        console.log("Message sending failed with error:", error);
      }
    );
  }
  recivemsg(listenerID) {
    // var listenerID = "UNIQUE_LISTENER_ID";
    CometChat.addMessageListener(
      listenerID,
      new CometChat.MessageListener({
        onTextMessageReceived: message => {
          // this.setState({
          //   messages: [...this.state.messages, message.data.text]
          // });
          //   console.log("Message received successfully:", message);
        }
      })
    );
  }
  render() {
    return (
      <div>
        <label>
          <span className="required">*</span>
        </label>
        <input type="text" name="message" onChange={this.onChange} />
        <input type="button" name="bmsg" value="ok" onClick={this.sendmsg} />
        <div>
          {this.state.messages.map(msg => (
            <div className={msg === "r" ? "testingr" : "testingl"}>{msg}</div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userId: state.itemDetails.item.user
});

export default connect(
  mapStateToProps,
  { getUserInfo }
)(Chat);
