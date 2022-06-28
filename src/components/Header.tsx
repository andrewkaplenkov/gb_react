
import { FC } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectAuth } from 'src/store/profile/selectors';
import { auth } from 'src/store/profile/slice';

export const nav = [
	{
		id: 1,
		name: 'Main',
		to: '/',
	},
	{
		id: 2,
		name: 'Profile',
		to: '/profile',
	},
	{
		id: 3,
		name: 'Chats',
		to: '/chats',
	},
	{
		id: 4,
		name: 'About',
		to: '/about',
	},
	{
		id: 5,
		name: 'Articles',
		to: '/articles'
	}
];

export const Header: FC = () => {



	return (
		<>
			<header
				style={{
					backgroundColor: 'lightblue',
					padding: '10px 0',
				}}
			>
				<ul
					style={{
						display: 'flex',
						justifyContent: 'space-around',
						listStyleType: 'none',
						textTransform: 'uppercase',
					}}
				>
					{nav.map((link) => (
						<li key={link.id}>
							<NavLink
								to={link.to}
								style={({ isActive }) => ({
									color: isActive ? 'red' : 'blue',
								})}
							>
								{link.name}
							</NavLink>
						</li>
					))}
				</ul>
			</header>
			<main>
				<Outlet />
			</main>
		</>
	);
};
