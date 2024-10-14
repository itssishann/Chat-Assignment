// features/chatSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: [
    {
        user: 'Bot',
        message: 'Hello! I am your friendly random password generator bot. Please send me a message that includes the word "password," and I will generate a strong password for you!',
        timestamp: new Date().toLocaleTimeString(), // tolocalstring
      }
      
      
  ], // Array to hold chat messages
  currentUser: 'You', // Mocked current user
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload); // Add the message to the chat
    },
    receiveMessage: (state, action) => {
      state.messages.push(action.payload); // Add the received message
    },
  },
});

export const { addMessage, receiveMessage } = chatSlice.actions;

export default chatSlice.reducer;
