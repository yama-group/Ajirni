import { CometChat } from "@cometchat-pro/chat";
import React, { Component } from "react";

export default class chat2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: ["ok"],
      message: ""
    };
    this.onChange = this.onChange.bind(this);
    this.sendmsg = this.sendmsg.bind(this);
  }
  componentWillMount() {
    var appID = "4446a56d977929";
    var apiKey = "8a581b5950e68554c53f56bf8b083e543d4df5d1";
    var UID = "SUPERHERO2";
    CometChat.init(appID).then(
      () => {
        console.log("Initialization completed successfully");
        // login function.
        this.loginChat(UID, apiKey);
      },
      error => {
        console.log("Initialization failed with error:", error);
      }
    );
    this.recivemsg("SUPERHERO22SUPERHERO22SUPERHERO22");
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
    var receiverID = "SUPERHERO1";
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
        // console.log("Message sent successfully:", message);
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
          this.setState({
            messages: [...this.state.messages, message.data.text]
          });
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
            <div className={msg.al === "r" ? "testingr" : "testingl"}>
              {msg.text}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
