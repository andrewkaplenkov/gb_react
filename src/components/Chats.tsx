import { FC, useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addChat, deleteChat } from 'src/store/messages/actions';
import { selectChats } from 'src/store/messages/selectors';

export const ChatList: FC = () => {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const chats = useSelector(
    selectChats,
    (prev, next) => prev.length === next.length
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value) {
      dispatch(addChat(value));
      setValue('');
    }
  };

  return (
    <>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {chats.map((chat) => (
          <>
            <ListItem key={chat.id} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={chat.name} src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <Link to={`/chats/${chat.name}`}>
                <ListItemText primary={chat.name} />
              </Link>
              <Button onClick={() => dispatch(deleteChat(chat.name))}>
                <ClearIcon />
              </Button>
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        ))}
      </List>
      <Box
        onSubmit={handleSubmit}
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          id="outlined-basic"
          label="New chat"
          variant="outlined"
          size="small"
        />
        <Button>Create Chat</Button>
      </Box>
    </>
  );
};
