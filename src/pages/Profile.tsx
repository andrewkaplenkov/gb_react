import { FC } from 'react';
import { changeName, toggleProfile } from 'store/profile/slice';
import { useDispatch, useSelector } from 'react-redux';
import { selectName, selectVisible } from './../store/profile/selectors';

export const Profile: FC = () => {
	const visible = useSelector(selectVisible);
	const name = useSelector(selectName);

	const dispatch = useDispatch();

	return (
		<>
			<h2>Profile Page</h2>

			<p>{name}</p>
			<input
				type="text"
				value={name}
				onChange={(e) => dispatch(changeName(e.target.value))}
			/>

			<hr />

			<input type="checkbox" checked={visible} readOnly />
			<button onClick={() => dispatch(toggleProfile())}>change visible</button>
		</>
	);
};
