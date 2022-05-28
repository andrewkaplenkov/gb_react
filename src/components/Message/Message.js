
import { useState } from 'react';
import './Message.css'

export const Message = (props) => {


	return (
		<>
			<ul>
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

