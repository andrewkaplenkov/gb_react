import { FC, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeName, toggleProfile } from "src/store/profile/actions";
import { ProfileState } from "src/store/profile/reducer"


export const Profile: FC = () => {

	const visible = useSelector((state: ProfileState) => state.visible);
	const name = useSelector((state: ProfileState) => state.name)

	const dispatch = useDispatch();

	// const [value, setValue] = useState('');

	return (
		<>
			<h2>Profile Page</h2>

			<p>{name}</p>
			<input
				type="text"
				value={name}
				onChange={(e) => dispatch(changeName(e.target.value))} />

			<hr />

			<input type="checkbox" checked={visible} readOnly />
			<button onClick={() => dispatch(toggleProfile())}>change visible</button>
		</>
	)
}
