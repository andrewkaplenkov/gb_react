import { FC } from 'react';
import style from './MessageList.module.css';
import { Message } from 'src/common-types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

interface MessageListProps {
	messages: Message[];
}

export const MessageList: FC<MessageListProps> = ({ messages }) => (
	<List
		className={style.messageBlock}
		sx={{
			backgroundColor: 'primary.light',
		}}>
		{messages.map((el, idx) => (
			<>
				<ListItem key={idx} alignItems="flex-start">
					<ListItemAvatar>
						<Avatar alt="User" />
					</ListItemAvatar>
					<ListItemText
						primary={
							<>
								<Typography
									sx={{ display: 'inline' }}
									component="span"
									variant="body2"
									color="text.primary"
								>
									{el.author}:
								</Typography>
								{el.text}
							</>
						}
					/>
				</ListItem>
				<Divider variant="inset" component="li" />
			</>
		))}
	</List>
);
