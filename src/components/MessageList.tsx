import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import { FC } from 'react';
import { Message } from 'src/store/messages/reducer';

interface MessageListProps {
  messages: Message[];
}

export const MessageList: FC<MessageListProps> = ({ messages }) => (
  <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    {messages.map((message) => (
      <ListItem key={message.id}>
        <ListItemAvatar>
          <Avatar alt={message.author} src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText primary={message.author} secondary={message.text} />
      </ListItem>
    ))}
  </List>
);
