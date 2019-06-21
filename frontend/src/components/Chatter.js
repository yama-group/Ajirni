import React from 'react';
import {NotificationContainer,NotificationManager} from 'react-notifications';

import MDSpinner from 'react-md-spinner';
import {CometChat} from '@cometchat-pro/chat';
import {appID,apiKey,userId,username} from "./config"

const MESSAGE_LISTENER_KEY = 'listener-key';
const limit = 30;


class Chat extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
        this.state={
        friends:[],
        selectedFriend:null,
        chat:[],
        chatIsLoading:false,
        friendisLoading:true,
        message:""
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }


      setFriends(list){
        this.setState({
            friends:list,
          })
      }
      
      setSelectedFriend(selected){
          this.setState({
            selectedFriend:selected
          })
      }

      setChat(chat){
          this.setState({
              chat:chat
          })
      }

      setChatIsLoading(boolean){
          this.setState({
            chatIsLoading:boolean
          })
      }

      setMessage(message){
          this.setState({
              message:message
          })
      }

      setFriendisLoading(boolean){
        this.setState({
            friendisLoading:boolean
          })
      }

       selectFriend (uid) {
        this.setSelectedFriend(uid);
        this.setChat([]);
       this.setChatIsLoading(true);
      };

      scrollToBottom() {
        let node = document.getElementById('ccChatBoxEnd');
        node.scrollIntoView();
      };



    componentWillMount(){
        var that =this
        //init the connection with cometchat
        CometChat.init(appID).then(() => {
 console.log("Initialization completed successfully");
              },
            error => {
              console.log("Initialization failed with error:", error);
            }
          );

            //login to cometchat

          CometChat.login("11",apiKey).then(
            User => {
              NotificationManager.success('You are now logged in', 'Login Success');
              console.log('Login Successful:', {User});
            },
            error => {
              NotificationManager.error('Please try again', 'Login Failed');
              console.log('Login failed with exception:', {error});
            }
          );


          //fetch users from cometchat

          let usersRequest = new CometChat.UsersRequestBuilder()
    .setLimit(limit)
    .build();
    usersRequest.fetchNext().then(
      userList => {
        console.log('User list received:', userList);
        that.setFriends(userList)
        that.setFriendisLoading(false)
      },
      error => {
        console.log('User list fetching failed with error:', error);
      }
    );
    
   
    
}

    componentWillUnmount(){
        CometChat.removeMessageListener(MESSAGE_LISTENER_KEY);
        CometChat.logout();
    }


    componentDidUpdate(prevState){
        var that=this
        if (prevState.selectedFriend !== this.state.selectedFriend) {
            let messagesRequest = new CometChat.MessagesRequestBuilder()
              .setUID(this.state.selectedFriend)
              .setLimit(limit)
              .build();
            
            messagesRequest.fetchPrevious().then(
              messages => {
                that.setChat(messages);
                that.setChatIsLoading(false);
                // that.scrollToBottom();
              },
              error => {
                console.log('Message fetching failed with error:', error);
              }
            );
            
            CometChat.removeMessageListener(MESSAGE_LISTENER_KEY);
            
            CometChat.addMessageListener(
              MESSAGE_LISTENER_KEY,
              new CometChat.MessageListener({
                onTextMessageReceived: message => {
                  console.log('Incoming Message Log', {message});
                  if (that.state.selectedFriend === message.sender.uid) {
                    that.setChat(prevState => [...prevState, message]);
                  }
                },
              })
            );
          }
    }

    handleSubmit  (event){
        var that =this
        event.preventDefault();
        let textMessage = new CometChat.TextMessage(
          that.state.selectedFriend,
          that.state.message,
          CometChat.MESSAGE_TYPE.TEXT,
          CometChat.RECEIVER_TYPE.USER
        );
        CometChat.sendMessage(textMessage).then(
          message => {
            console.log('Message sent successfully:', message);
            that.setChat([...that.state.chat, message]);
          },
          error => {
            console.log('Message sending failed with error:', error);
          }
        );
        that.setMessage('');
      };




    render(){
        return(
            <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-2' />
              <div className='col-md-8 h-100pr border rounded'>
                <div className='row'>
                  <div className='col-lg-4 col-xs-12 bg-light' style={{height: 658}}>
                    <div className='row p-3'>
                      <h2>Friend List</h2>
                    </div>
                    <div
                      className='row ml-0 mr-0 h-75 bg-white border rounded'
                      style={{height: '100%', overflow: 'auto'}}>
                      <FriendList
                        friends={this.state.friends}
                        friendisLoading={this.state.friendisLoading}
                        selectedFriend={this.state.selectedFriend}
                        selectFriend={this.state.selectFriend}
                        selectedFriendFun={this.selectFriend.bind(this)}
                      />
                    </div>
                  </div>
                  <div className='col-lg-8 col-xs-12 bg-light' style={{height: 658}}>
                    <div className='row p-3 bg-white'>
                      <h2>Who you gonna chat with?</h2>
                    </div>
                    <div
                      className='row pt-5 bg-white'
                      style={{height: 530, overflow: 'auto'}}>
                      <ChatBox
                        chat={this.state.chat}
                        chatIsLoading={this.state.chatIsLoading}
                        user={userId}
                      />
                    </div>
                    <div className='row bg-light' style={{bottom: 0, width: '100%'}}>
                      <form className='row m-0 p-0 w-100' onSubmit={this.handleSubmit.bind(this)}>
                        <div className='col-9 m-0 p-1'>
                          <input
                            id='text'
                            className='mw-100 border rounded form-control'
                            type='text'
                            onChange={
                                this.onChange.bind(this)
                            }
                            value={this.state.message}
                            name="message"
                            placeholder='Type a message...'
                          />
                        </div>
                        <div className='col-3 m-0 p-1'>
                          <button
                            className='btn btn-outline-secondary rounded border w-100'
                            title='Send'
                            style={{paddingRight: 16}}>
                            Send
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }

}


const ChatBox = props => {
    const {chat, chatIsLoading, user} = props;
    if (chatIsLoading) {
      return (
        <div className='col-xl-12 my-auto text-center'>
          <MDSpinner size='72' />
        </div>
      );
    } else {
      return (
        <div className='col-xl-12'>
          {chat.map(chat => (
            <div key={chat.id} className='message'>
              <div
                className={`${
                  chat.receiver !== user.uid ? 'balon1' : 'balon2'
                } p-3 m-1`}>
                {chat.text}
              </div>
            </div>
          ))}
          <div id='ccChatBoxEnd' />
        </div>
      );
    }
  };
  


const FriendList = props => {
    const {friends, friendisLoading, selectedFriend,selectedFriendFun} = props;
    if (friendisLoading) {
      return (
        <div className='col-xl-12 my-auto text-center'>
          <MDSpinner size='72' />
        </div>
      );
    } else {
      return (
        <ul className='list-group list-group-flush w-100'>
          {friends.map(friend => (
            <li
              key={friend.uid}
              className={`list-group-item ${
                friend.uid === selectedFriend ? 'active' : ''
              }`}
              onClick={() => {selectedFriendFun(friend.uid)}}>
              {friend.name}
            </li>
          ))}
        </ul>
      );
    }
  };


  export default Chat