import type { KeyboardEvent } from 'react';

import React, { useRef, useState, useEffect } from 'react';

import {
  Box,
  Card,
  Paper,
  Alert,
  Avatar,
  styled,
  TextField,
  IconButton,
  Typography,
} from '@mui/material';

const StyledPaper = styled(Paper)(() => ({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 16,
  overflow: 'hidden',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  flex: 1,
}));

const MessageContainer = styled(Box)<{ isCurrentUser: boolean }>(({ theme, isCurrentUser }) => ({
  display: 'flex',
  justifyContent: isCurrentUser ? 'flex-end' : 'flex-start',
  marginBottom: theme.spacing(2),
  padding: theme.spacing(0, 2),
}));

const MessageBubble = styled(Box)<{ isCurrentUser: boolean }>(({ theme, isCurrentUser }) => ({
  maxWidth: '70%',
  padding: theme.spacing(1.5),
  borderRadius: 12,
  backgroundColor: isCurrentUser ? '#1976d2' : '#f5f5f5',
  color: isCurrentUser ? '#fff' : '#000',
  position: 'relative',
  animation: 'fadeIn 0.3s ease-in',
  '@keyframes fadeIn': {
    from: { opacity: 0, transform: 'translateY(10px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  },
}));

const ChatComponent = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Hi there! How are you?',
      sender: 'John Doe',
      avatar: 'images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      timestamp: '22:00',
      isCurrentUser: false,
    },
    {
      id: 2,
      text: "I'm doing great, thanks for asking!",
      sender: 'Current User',
      avatar: 'images.unsplash.com/photo-1494790108377-be9c29b29330',
      timestamp: '22:00',
      isCurrentUser: true,
    },
  ]);

  const [newMessage, setNewMessage] = useState('');
  const [error, setError] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!newMessage.trim()) {
      setError('Message cannot be empty');
      return;
    }

    setError('');
    const newMsg = {
      id: messages.length + 1,
      text: newMessage,
      sender: 'Current User',
      avatar: 'images.unsplash.com/photo-1494790108377-be9c29b29330',
      timestamp: '22:00',
      isCurrentUser: true,
    };

    setMessages([...messages, newMsg]);
    setNewMessage('');
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Card>
      <StyledPaper elevation={3}>
        <Box
          sx={{
            flex: 1,
            overflowY: 'auto',
            padding: 2,
            display: 'flex',
            flexDirection: 'column',
          }}
          role="log"
          aria-label="Chat messages"
        >
          {messages.map((message) => (
            <MessageContainer key={message.id} isCurrentUser={message.isCurrentUser}>
              {!message.isCurrentUser && (
                <Avatar
                  src={`https://${message.avatar}`}
                  alt={message.sender}
                  sx={{ marginRight: 1 }}
                />
              )}
              <Box>
                {!message.isCurrentUser && (
                  <Typography variant="caption" sx={{ ml: 1 }}>
                    {message.sender}
                  </Typography>
                )}
                <MessageBubble isCurrentUser={message.isCurrentUser}>
                  <Typography variant="body1">{message.text}</Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      display: 'block',
                      textAlign: 'right',
                      mt: 0.5,
                      opacity: 0.8,
                    }}
                  >
                    {message.timestamp}
                  </Typography>
                </MessageBubble>
              </Box>
              {message.isCurrentUser && (
                <Avatar
                  src={`https://${message.avatar}`}
                  alt={message.sender}
                  sx={{ marginLeft: 1 }}
                />
              )}
            </MessageContainer>
          ))}
          <div ref={messagesEndRef} />
        </Box>

        <Box
          sx={{
            p: 2,
            backgroundColor: 'background.paper',
            borderTop: 1,
            borderColor: 'divider',
          }}
        >
          {error && (
            <Alert severity="error" sx={{ mb: 1 }}>
              {error}
            </Alert>
          )}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <TextField
              fullWidth
              multiline
              maxRows={4}
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a message..."
              variant="outlined"
              size="small"
              aria-label="Message input"
            />
            <IconButton
              color="primary"
              onClick={handleSendMessage}
              sx={{ ml: 1 }}
              aria-label="Send message"
            >
              Отправить
            </IconButton>
          </Box>
        </Box>
      </StyledPaper>
    </Card>
  );
};

export default ChatComponent;
