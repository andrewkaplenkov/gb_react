import { FC } from 'react';
import style from './MessageList.module.css';
import { Message } from 'src/common-types'

interface MessageListProps {
	messages: Message[]
}


export const MessageList: FC<MessageListProps> = ({ messages }) => (
	<>
		<ul className={style.messageBlock}>
			{messages.map((el, idx) => (
				<li className={style.message} key={idx}>
					<span className={style.user}>{el.author}:</span>
					<span className={style.text}>{el.text}</span>
				</li>
			))}
		</ul>
	</>
);
