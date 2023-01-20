import { Sidebar } from 'flowbite-react';
import { ReactComponent as Logo } from '../assets/react.svg';

function SideBar() {
	return (
		<div
			id='sidebar'
			className='w-fit drop-shadow-2xl'
		>
			<Sidebar
				collapsed={false}
				className='fixed z-0 h-screen overflow-y-auto pt-24 pb-24'
			>
				<Sidebar.Items className='bg-gray-50'>
					<Sidebar.ItemGroup>
						<Sidebar.Item href='#'>Dashboard</Sidebar.Item>
						<Sidebar.Item
							href='#'
							label='Pro'
							labelColor='alternative'
							icon={Logo}
						>
							Kanban
						</Sidebar.Item>
						<Sidebar.Item
							href='#'
							label='3'
						>
							Inbox
						</Sidebar.Item>
						<Sidebar.Item href='#'>Users</Sidebar.Item>
						<Sidebar.Item href='#'>Products</Sidebar.Item>
						<Sidebar.Item href='#'>Sign In</Sidebar.Item>
						<Sidebar.Item href='#'>Sign Up</Sidebar.Item>
					</Sidebar.ItemGroup>
				</Sidebar.Items>
			</Sidebar>
		</div>
	);
}

export default SideBar;
