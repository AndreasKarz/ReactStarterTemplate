import { Icon } from '@iconify/react';
import { NavLink } from 'react-router-dom';

interface LinkProps {
	to: string;
	icon: string;
	label: string;
}

export default function NavBarLink(props: LinkProps) {
	return (
		<NavLink
			to={props.to}
			className='flex flex-row items-center gap-x-2 py-2 px-2 text-tahiti-dark hover:text-tahiti-light active:text-tahiti-light duration-150'
		>
			<Icon
				icon={props.icon}
				height={18}
				className='inline-block float-left mr-1'
				inline={true}
			/>
			{props.label}
		</NavLink>
	);
}
