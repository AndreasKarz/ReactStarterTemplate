import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import * as Pages from './pages/_index';

/**
 * Learn React Router v6 in 45 minutes
 * https://www.youtube.com/watch?v=Ul3y1LXxzdU
 */

export default function App() {
	return (
		<div className='container mx-auto '>
			<NavBar />

			<Routes>
				<Route
					path='/'
					element={<Pages.Home />}
				/>
				<Route
					path='services'
					element={<Pages.Services />}
				/>
				<Route
					path='pricing'
					element={<Pages.Pricing />}
				/>
				<Route
					path='about'
					element={<Pages.About />}
				/>
				<Route
					path='contact'
					element={<Pages.Contact />}
				/>
				<Route
					path='policy'
					element={<Pages.Policy />}
				/>
				<Route
					path='*'
					element={<Pages.NotFound />}
				/>
			</Routes>

			<Footer />
		</div>
	);
}
