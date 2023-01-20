/**
 * https://icon-sets.iconify.design/
 * https://tailwindcss.com/docs/margin
 */
import { Icon } from '@iconify/react';
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
					src='/src/assets/react.svg'
					className='mr-3 h-6 sm:h-9'
					alt='Flowbite Logo'
				/>
				<span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
					Complete React Starter Template
				</span>
			</Navbar.Brand>
			<Navbar.Toggle />
			<Navbar.Collapse>
				<NavLink to='/'>
					<Icon
						icon='fluent:home-12-regular'
						height={18}
						className='inline-block float-left mr-1'
						inline={true}
					/>
					Home
				</NavLink>
				<Navbar.Link href='/navbars'>Services</Navbar.Link>
				<Navbar.Link href='/navbars'>Pricing</Navbar.Link>
				<Navbar.Link href='/navbars'>Contact</Navbar.Link>
				<NavLink to='/about'>About</NavLink>
			</Navbar.Collapse>
		</Navbar>
	);
}
