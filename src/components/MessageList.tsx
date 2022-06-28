import {
	Avatar,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
} from '@mui/material';
import { FC } from 'react';
import { Message } from 'src/common-types';

interface MessageListProps {
	messages: Message[];
}

export const MessageList: FC<MessageListProps> = ({ messages }) => (
	<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
		{messages.map((message, idx) => (
			<ListItem key={idx}>
				<ListItemAvatar>
					<Avatar alt={message.author} src="/static/images/avatar/1.jpg" />
				</ListItemAvatar>
				<ListItemText primary={message.author} secondary={message.text} />
			</ListItem>
		))}
	</List>
);
