import React, { useEffect } from 'react';
import { Box, List, ListItem, Typography } from '@mui/material';
import { SmartToy, Person } from '@mui/icons-material';

const ChatMessage = ({ messages }) => {
  // Auto-scroll to the latest message
  useEffect(() => {
    const chatBox = document.getElementById('chat-box');
    if (chatBox) {
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  }, [messages]);

  return (
    <Box
      id="chat-box"
      sx={{
        height: '80vh',
        overflowY: 'scroll',
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        backgroundColor: '#f9f9f9',
      }}
    >
      <List>
        {messages.map((msg, index) => (
          <ListItem
            key={index}
            sx={{
              marginBottom: '10px',
              padding: '10px',
              borderRadius: '8px',
              backgroundColor: msg.user === 'Bot' ? '#e3f2fd' : '#ffe0b2',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {msg.user === 'Bot' ? (
              <SmartToy sx={{ color: '#3f51b5', marginRight: '10px' }} />
            ) : (
              <Person sx={{ color: '#ff5722', marginRight: '10px' }} />
            )}
            <Typography variant="body1" sx={{ flexGrow: 1 }}>
              <strong>{msg.user}:</strong> {msg.message} <em>({msg.timestamp})</em>
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ChatMessage;
