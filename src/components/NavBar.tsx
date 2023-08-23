/**
 * https://icon-sets.iconify.design/
 * https://tailwindcss.com/docs/margin
 */
import { Navbar } from 'flowbite-react';
import NavBarLink from './NavBarLink';
import { useTranslation } from 'react-i18next';

export default function NavBar() {
	const { t } = useTranslation();

	return (
		<Navbar
			fluid={false}
			rounded={false}
			className='bg-gray-200'
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
				<NavBarLink
					to='/'
					icon='fluent:home-12-regular'
					label={t('nav.home')}
				/>
				<NavBarLink
					to='/services'
					icon='fluent:service-bell-20-regular'
					label={t('nav.services')}
				/>
				<NavBarLink
					to='/pricing'
					icon='fluent:money-24-regular'
					label={t('nav.prices')}
				/>
				<NavBarLink
					to='/contact'
					icon='fluent:contact-card-ribbon-16-regular'
					label={t('nav.contact')}
				/>
				<NavBarLink
					to='/about'
					icon='fluent:people-team-20-regular'
					label={t('nav.about')}
				/>
			</Navbar.Collapse>
		</Navbar>
	);
}
