/**
 * https://icon-sets.iconify.design/
 * https://tailwindcss.com/docs/margin
 */
import { Icon } from '@iconify/react';
import { NavLink } from 'react-router-dom';

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='container w-full pb-3'>
			<div className='flex justify-between'>
				<div>
					{' '}
					<Icon
						icon='carbon:visual-recognition'
						height={25}
						className='inline-block float-left mr-1'
						inline={true}
					/>
				</div>
				<div className='justify-center'>{currentYear}</div>
				<div>
					<NavLink to='/about'>About</NavLink>&nbsp;|&nbsp;
					<NavLink to='/policy'>Privacy Policy</NavLink>&nbsp;|&nbsp;
					<NavLink to='/contact'>Contact</NavLink>
				</div>
			</div>
		</footer>
	);
}
