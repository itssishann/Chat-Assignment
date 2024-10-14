
import React from 'react';
import { Box, TextField, Button } from '@mui/material';
import { Send } from '@mui/icons-material';

const InputMessage = ({ messageInput, setMessageInput, handleSendMessage }) => {
  return (
    <Box display="flex" mt={2}>
      <TextField
        variant="outlined"
        fullWidth
        placeholder="Type your message..."
        value={messageInput}
        onChange={(e) => setMessageInput(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            handleSendMessage();
          }
        }}
      />
      <Button sx={{marginLeft:"0.5rem"}} variant="contained" color="primary" onClick={handleSendMessage}>
         <Send/>
      </Button>
    </Box>
  );
};

export default InputMessage;
