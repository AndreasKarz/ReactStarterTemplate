/**
 * https://icon-sets.iconify.design/
 * https://tailwindcss.com/docs/margin
 */
import { Icon } from '@iconify/react';

function Home() {
	return (
		<div className='text-orange-500'>
			<Icon
				icon='material-symbols:10k-rounded'
				height={25}
				className='inline-block float-left mr-1'
			/>
			Home
		</div>
	);
}

export default Home;
