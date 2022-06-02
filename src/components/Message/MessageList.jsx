import style from './MessageList.module.css';

export const MessageList = ({ messages }) => {
	return (
		<>
			<ul className={style.messageBlock}>
				{messages.map((el, idx) => {
					return (
						<li className={style.message} key={idx}>
							<span className={style.text}>{el.author}</span>:
							<span className={style.user}>{el.text}</span>
						</li>
					);
				})}
			</ul>
		</>
	);
};
