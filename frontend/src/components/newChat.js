import React, {useState, useEffect} from 'react';
import {appID,apiKey,userId} from "./config"
import {NotificationContainer,NotificationManager} from 'react-notifications';
import MDSpinner from 'react-md-spinner';
import {CometChat} from '@cometchat-pro/chat';
import "./chat.css"
import Loader from 'react-loader-spinner'

import "./chat.css"

const MESSAGE_LISTENER_KEY = 'listener-key';
const limit = 30;

const Chat = ({user}) => {
  const [friends, setFriends] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [chat, setChat] = useState([]);
  const [chatIsLoading, setChatIsLoading] = useState(false);
  const [friendisLoading, setFriendisLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // this useEffect will fetch all users available for chat
    // only run on mount
    const uid = window.localStorage.getItem("userId")

    CometChat.login(uid,apiKey).then(
        User => {
          // NotificationManager.success('You are now logged in', 'Login Success');
          console.log('Login Successful:', {User});
          window.localStorage.setItem("uid",User.uid)

          let usersRequest = new CometChat.UsersRequestBuilder()
          .setLimit(limit)
          .build();
    
        usersRequest.fetchNext().then(
          userList => {
            console.log('User list received:', userList);
            setFriends(userList);
            setFriendisLoading(false);
          },
          error => {
            console.log('User list fetching failed with error:', error);
          }
        );
        },
        error => {
          NotificationManager.error('Please try again', 'Login Failed');
          console.log('Login failed with exception:', {error});
        }
      )
  



   

    return () => {
      CometChat.removeMessageListener(MESSAGE_LISTENER_KEY);
      CometChat.logout();
    };
  }, []);

  useEffect(() => {
    // will run when selectedFriend variable value is updated
    // fetch previous messages, remove listener if any
    // create new listener for incoming message

    if (selectedFriend) {
      console.log(selectedFriend)
      let messagesRequest = new CometChat.MessagesRequestBuilder()
        .setUID(selectedFriend)
        .setLimit(limit)
        .build();

      messagesRequest.fetchPrevious().then(
        messages => {
          setChat(messages);
          setChatIsLoading(false);
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
            if (selectedFriend === message.sender.uid) {
              setChat(prevState => [...prevState, message]);
            }
          },
        })
      );
    }
  }, [selectedFriend]);

  const handleSubmit = event => {
    event.preventDefault();

    let textMessage = new CometChat.TextMessage(
      selectedFriend,
      message,
      CometChat.MESSAGE_TYPE.TEXT,
      CometChat.RECEIVER_TYPE.USER
    );

    CometChat.sendMessage(textMessage).then(
      message => {
        console.log('Message sent successfully:', message);
        setChat([...chat, message]);
      },
      error => {
        console.log('Message sending failed with error:', error);
      }
    );
    setMessage('');
  };

  const selectFriend = uid => {
    setSelectedFriend(uid);
    setChat([]);
    setChatIsLoading(true);
    
  };

  const scrollToBottom = () => {
    let node = document.getElementById('ccChatBoxEnd');
    node.scrollIntoView();
  };

  return (
    <>
    <br/>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-2' />
        <div className='col-md-8 h-100pr border rounded'>
          <div className='row'>
            <div className='col-lg-4 col-xs-12 bg-light' style={{height: 658}}>
              <div className='row p-3'>
                <h2 >Chat with:</h2>
              </div>
              <div
                className='row ml-0 mr-0 h-75 bg-white border rounded'
                style={{height: '100%', overflow: 'auto'}}>
                <FriendList
                  friends={friends}
                  friendisLoading={friendisLoading}
                  selectedFriend={selectedFriend}
                  selectFriend={selectFriend}
                />
              </div>
            </div>
            <div className='col-lg-8 col-xs-12 bg-light' style={{height: 658}}>
              <div className='row p-3 bg-white' >
                <h2
                style={{borderBottom:"1px solid gray",width:"100%",paddingBottom:"5px"}}
                >Messages:</h2>
              </div>
              <div
                className='row pt-5 bg-white'
                style={{height: 530, overflow: 'auto'}}>
                <ChatBox
                  chat={chat}
                  chatIsLoading={chatIsLoading}
                  user={user}
                />
              </div>
              <div className='row bg-light' style={{bottom: 0, width: '100%'}}>
                <form className='row m-0 p-0 w-100' onSubmit={handleSubmit}>
                  <div className='col-9 m-0 p-1'>
                    <input
                      id='text'
                      className='mw-100 border rounded form-control'
                      type='text'
                      onChange={event => {
                        setMessage(event.target.value);
                      }}
                      value={message}
                      placeholder='Type a message...'
                    />
                  </div>
                  <div  className='col-3 m-0 p-1'>
                    <button
                    
                      className='btn btn-info'
                      title='Send'
                      style={{color:"white",paddingBottom: 30,borderRadius:"50px",marginLeft:"15px"}}>
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
    </>
  );
};

const ChatBox = props => {
  const {chat, chatIsLoading, user} = props;
  const uid = window.localStorage.getItem("uid")
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
                chat.receiver !== uid ? 'balon1' : 'balon2'
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
  const {friends, friendisLoading, selectedFriend} = props;
  if (friendisLoading) {
    return (
      <div className='col-xl-12 my-auto text-center'>
        <Loader 
                    type="Puff"
                    color="#7A0400"
                    height="65"	
                    width="65"
                 />
      </div>
    );
  } else {
    return (
      <ul className='list-group list-group-flush w-100'>
        {friends.map(friend => (
          <li
            style={{opacity:"1"}}
            key={friend.uid}
            className={`list-group-item ${
              friend.uid === selectedFriend ? 'active' : ''
            }`}
            onClick={() => props.selectFriend(friend.uid)}>
            <b>{friend.name}</b>
            
          </li>
        ))}
      </ul>
    );
  }
};

export default Chat;
