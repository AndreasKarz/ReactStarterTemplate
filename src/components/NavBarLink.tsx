import { Icon } from '@iconify/react';
import { NavLink } from 'react-router-dom';

/**
 * https://www.pluralsight.com/guides/defining-props-in-react-function-component-with-typescript
 */

interface LinkProps {
	to: string;
	icon: string;
	label: string;
}

export default function NavBarLink(props: LinkProps) {
	return (
		<NavLink to={props.to}>
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
