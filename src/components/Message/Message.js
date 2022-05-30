

import style from './Message.module.css'

export const Message = (props) => {


	return (
		<>
			<ul className={style.message}>
				{props.users.map(el => {
					return <li key={el.id} >
						<p>Name: {el.name}</p>
						<p>Age: {el.age}</p>
					</li>
				})}
			</ul>
		</>
	);

}

