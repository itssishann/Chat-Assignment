// App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMessage, receiveMessage } from './redux/slices/ChatSlice';
import {  Container, Typography } from '@mui/material';
import ChatMessage from './components/ChatMessage';
import InputMessage from './components/InputMessage';
import { customAlphabet } from 'nanoid';

// Define a custom alphabet and length for the password
const nanoid = customAlphabet('1234567890ABCDEFGHIJKLMNOPabcdefghijklmnop-:+*/@#$^');

const App = () => {
  const dispatch = useDispatch();
  const { messages, currentUser } = useSelector((state) => state.chat);
  const [messageInput, setMessageInput] = React.useState('');
  // const [loading,setLoading] = React.useState(false)

  // Handle sending messages
  const handleSendMessage = () => {
    if (messageInput.trim()) {
      // Dispatch the user's message
      dispatch(
        addMessage({
          user: currentUser,
          message: messageInput,
          timestamp: new Date().toLocaleTimeString(),
        })
      );

      // Clear the input field
      setMessageInput('');

      // Check if the message includes the word "password" so bot user can genrate random password
      if (messageInput.toLowerCase().includes('password')) {
       
        setTimeout(() => {
          const generatedPassword = nanoid(12); // Generate a password using nanoid with passsword length of 12
          dispatch(
            receiveMessage({
              user: 'Bot',
              message: `Here is your generated password: ${generatedPassword}`,
              timestamp: new Date().toLocaleTimeString(),
            })
          );
        }, 1200);
      } else {
        // If the message does not include "password", show bot message please include password keyword
        setTimeout(() => {
          dispatch(
            receiveMessage({
              user: 'Bot',
              message: 'Please include the word "password" in your message so I can generate one for you! eg -> need password ,send me random password',
              timestamp: new Date().toLocaleTimeString(),
            })
          );
        }, 1200);
      }
    }
  };

  return (
    <Container>
      <Typography sx={{marginTop:"0.5rem"} }variant="h4" align="center" >
       Welcome to Chat Application
      </Typography>

      {/* Chat Display Component */}
      <ChatMessage messages={messages} />

      <InputMessage
        messageInput={messageInput}
        setMessageInput={setMessageInput}
        handleSendMessage={handleSendMessage}
      />
    </Container>
  );
};

export default App;
