import { FC, useState } from 'react';
import { nanoid } from 'nanoid';
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
import { Chat } from 'src/common-types';

interface ChatListProps {
	chats: Chat[];
	addChat: (chat: Chat) => void;
}

export const ChatList: FC<ChatListProps> = ({ chats, addChat }) => {
	const [value, setValue] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (value) {
			addChat({
				id: nanoid(),
				name: value,
			});

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
							<Button >
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
					onChange={handleChange}
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
