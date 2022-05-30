import { useState } from "react"

export const Counter = () => {

	const [count, setCount] = useState(0);

	const oneMore = () => {
		setCount(count + 1);
	}

	const oneLess = () => {
		setCount(count - 1);
	}


	return (
		<>
			<button onClick={oneLess}>-</button>
			<span>{count}</span>
			<button onClick={oneMore}>+</button>
		</>
	)
}