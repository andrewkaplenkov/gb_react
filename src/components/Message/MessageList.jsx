import style from './MessageList.module.css';

export const MessageList = ({ messages }) => (

	<ul className={style.messageBlock}>
		{messages.map((el, idx) => (
			<li className={style.message} key={idx}>
				<span className={style.user}>{el.author}:</span>
				<span className={style.text}>{el.text}</span>
			</li>
		))}
	</ul>
)