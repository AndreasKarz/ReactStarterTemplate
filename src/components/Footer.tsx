import { NavLink } from 'react-router-dom';

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='container w-full'>
			<div className='flex justify-between'>
				<div>01</div>
				<div className='justify-center'>{currentYear}</div>
				<div>
					<NavLink to='/about'>About</NavLink>
					<NavLink to='/policy'>Privacy Policy</NavLink>
					<NavLink to='/contact'>Contact</NavLink>
				</div>
			</div>
		</footer>
	);
}
