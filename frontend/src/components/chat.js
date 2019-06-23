import { CometChat } from "@cometchat-pro/chat";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserInfo } from "../actions/UserItemsAction.js";
import axios from "axios";
import request  from "request";
import {apiKey,appID,userId,username} from "./config"


class Chat extends Component {
  constructor(props) {
    super(props);
    //UID sender Id
    //RId reciver Id
    this.state = {
      chat: ["ok"],
      message: "",
      UID: "eedddee",
      RID: "SUPERHERO2",
      owners:[]
    };
    this.onChange = this.onChange.bind(this);
    this.sendmsg = this.sendmsg.bind(this);
  }
  componentWillMount() {
    

    this.setState({
      RID:this.props.userId
    })



    CometChat.init(appID).then(
      () => {
        
        


        console.log("Initialization completed successfully");
       
        
      },
      error => {
        console.log("Initialization failed with error:", error);
      }
    ).then(()=>{
     
      var options = {
        method: 'POST',
        url: 'https://api.cometchat.com/v1.6/users',
        headers: {
          apikey: 'd2b55cf8dc958dc80cfdd60bf8e3d2a5df8fe4cf',
          appid: '44982b6860ce08',
          'content-type': 'application/json',
        },
        body: `{"uid":"${userId}","name":"${username}"}`
      };
      
      request(options, function (error, response, body) {
        if (error) throw new Error(error);
      
        console.log(body,"hiii");

    }
  )
    }).then(()=>{
      this.loginChat(userId, apiKey);
    });

    // this.recivemsg("SUPERHERO1SUPERHERO1SUPERHERO1");
    this.recivemsg("SUPERHERO1SUPEaaRHERO1SUPERHERO1");
  }

  
  loginChat(UID, apiKey) {
    CometChat.login(userId, apiKey).then(
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
        
        console.log("Message sent successfully:", message);
        
      },
      error => {
        console.log("Message sending failed with error:", error);
      }
    ).then(()=>{
      console.log("listen")
      var listenerID = "18";
      CometChat.addMessageListener(
        listenerID,
        new CometChat.MessageListener({
          onTextMessageReceived: message => {
            console.log(message)
            this.setState({
              chat: [...this.state.chat, message.data.text]
            });
          }
        })
      );
    });
  }

  recivemsg() {
     var listenerID = "13";
    CometChat.addMessageListener(
      listenerID,
      new CometChat.MessageListener({
        onTextMessageReceived: message => {
          this.setState({
            chat: [...this.state.chat, message.data.text]
          });
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
          {this.state.chat.map(msg => (
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
