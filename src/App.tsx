import { Footer } from 'flowbite-react';
import { Navbar } from 'flowbite-react/lib/esm/components';
import { useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Navbar
				fluid={true}
				rounded={true}
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

			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='about'
					element={<h1>About</h1>}
				/>
			</Routes>
			<Footer container={true}>
				<Footer.Copyright
					href='#'
					by='Flowbite™'
					year={2022}
				/>
				<Footer.LinkGroup>
					<NavLink to='/about'>About</NavLink>
					<Footer.Link href='#'>Privacy Policy</Footer.Link>
					<Footer.Link href='#'>Licensing</Footer.Link>
					<Footer.Link href='#'>Contact</Footer.Link>
				</Footer.LinkGroup>
			</Footer>
		</>
	);
}

export default App;
