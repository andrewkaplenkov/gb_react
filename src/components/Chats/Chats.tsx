import React, { FC } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Chat } from 'src/common-types';

const chats: Chat = [
  {
    id: 1,
    name: 'Sarah',
    text: 'Lorem ipsum',
  },
  {
    id: 2,
    name: 'Vik',
    text: 'Lorem ipsum',
  },
  {
    id: 3,
    name: 'John',
    text: 'Lorem ipsum',
  },
];

export const ChatList = () => (
  <List
    sx={{
      backgroundColor: '#00a6ff85',
      marginRight: '50px',
      borderRadius: '10px',
    }}
  >
    {chats.map((el) => (
      <ListItem
        key={el.id}
        sx={{
          backgroundColor: '#d6ef55',
          marginBottom: '10px',
        }}
      >
        <ListItemText primary={el.name} secondary={el.text} />
      </ListItem>
    ))}
  </List>
);
