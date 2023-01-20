import { Navbar } from 'flowbite-react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
	return (
		<Navbar
			fluid={false}
			rounded={false}
		>
			<Navbar.Brand>
				<img
					src='https://flowbite.com/docs/images/logo.svg'
					className='mr-3 h-6 sm:h-9'
					alt='Flowbite Logo'
				/>
				<span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
					Flowbite
				</span>
			</Navbar.Brand>
			<Navbar.Toggle />
			<Navbar.Collapse>
				<NavLink to='/'>Home</NavLink>
				<NavLink to='/about'>About</NavLink>

				<Navbar.Link href='/navbars'>Services</Navbar.Link>
				<Navbar.Link href='/navbars'>Pricing</Navbar.Link>
				<Navbar.Link href='/navbars'>Contact</Navbar.Link>
			</Navbar.Collapse>
		</Navbar>
	);
}
