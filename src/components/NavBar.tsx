/**
 * https://floatui.com/components/navbars
 * https://icon-sets.iconify.design/
 */
import NavBarLink from './NavBarLink';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function NavBar() {
	const { t } = useTranslation();
	const [state, setState] = useState(false);

	const navigation = [
		{ label: t('nav.home'), path: '/', icon: 'fluent:home-12-regular' },
		{ label: t('nav.prices'), path: '/pricing', icon: 'fluent:money-24-regular' },
		{ label: t('nav.contact'), path: '/contact', icon: 'fluent:contact-card-ribbon-16-regular' },
		{ label: t('nav.about'), path: '/about', icon: 'fluent:people-team-20-regular' },
	];

	return (
		<nav className='bg-white/90 backdrop-blur-md shadow-lg w-full border-2 border-black-100 z-50'>
			<div className='items-center px-1 max-w-screen-xl mx-auto md:flex md:px-1'>
				<div className='flex items-center justify-between py-1 md:py-3 md:block '>
					<a href='javascript:void(0)'>
						<img
							src='https://www.floatui.com/logo.svg'
							width={120}
							height={50}
							alt='Float UI logo'
						/>
					</a>
					<div className='md:hidden'>
						<button
							className='text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border'
							onClick={() => setState(!state)}
						>
							{state ? (
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-6 w-6'
									viewBox='0 0 20 20'
									fill='currentColor'
								>
									<path
										fillRule='evenodd'
										d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
										clipRule='evenodd'
									/>
								</svg>
							) : (
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-6 w-6'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M4 8h16M4 16h16'
									/>
								</svg>
							)}
						</button>
					</div>
				</div>
				<div
					className={`flex-1 justify-self-center pb-3 mt-0 md:block md:pb-0  ${
						state ? 'block' : 'hidden'
					}`}
				>
					<ul className='space-y-0 justify-end flex flex-col md:flex md:flex-row '>
						{navigation.map((item, idx) => {
							return (
								<li
									key={idx}
									className='mx-4'
								>
									<NavBarLink
										to={item.path}
										icon={item.icon}
										label={item.label}
									/>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
}
