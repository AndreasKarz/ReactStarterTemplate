import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Icon } from '@iconify/react';

export default function Home() {
	const { t } = useTranslation();

	const features = [
		{
			icon: 'devicon:react',
			title: 'React',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius.',
		},
		{
			icon: 'devicon:reactrouter',
			title: 'React Router',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius.',
		},
		{
			icon: 'simple-icons:i18next',
			title: 'React i18n',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius.',
		},
		{
			icon: 'icon-park:helmet',
			title: 'Recat Helmet Async',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius.',
		},
		{
			icon: 'devicon:tailwindcss',
			title: 'Tailwind',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius.',
		},
		{
			icon: 'bi:ui-radios',
			title: 'FloatUI',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius.',
		},
		{
			icon: 'devicon:vitejs',
			title: 'Vite',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius.',
		},
		{
			icon: 'devicon-plain:axios',
			title: 'Axios',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius.',
		},
		{
			icon: 'simple-icons:iconify',
			title: 'Iconify',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius.',
		},
	];

	return (
		<>
			<Helmet>
				<title>{t('home.seo.title')}</title>
				<meta
					name='description'
					content="{t('home.seo.description')}"
				></meta>
				<meta
					name='keywords'
					content="{t('home.seo.keywords')}"
				></meta>
			</Helmet>
			<div className='container page content'>
				<section>
					<div className='py-28 gap-12 overflow-hidden md:flex'>
						<div className='flex-1 space-y-5'>
							<a
								href='javascript:void(0)'
								className='inline-flex gap-x-6 items-center rounded-full p-1 pr-6 border text-sm font-medium duration-150 hover:bg-white'
							>
								<span className='inline-block rounded-full px-3 py-1 bg-tahiti text-white'>
									News
								</span>
								<p className='flex items-center'>
									Read the launch post from here
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 20 20'
										fill='currentColor'
										className='w-5 h-5'
									>
										<path
											fillRule='evenodd'
											d='M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z'
											clipRule='evenodd'
										/>
									</svg>
								</p>
							</a>
							<h1 className='mb-4 text-4xl font-light leading-none tracking-tight text-gray-500 md:text-5xl lg:text-6xl'>
								Build your SaaS exactly how you want
							</h1>
							<p>
								Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque
								laudantium, totam rem aperiam, eaque ipsa quae.
							</p>
							<div className='flex items-center gap-x-3 sm:text-sm'>
								<a
									href='javascript:void(0)'
									className='flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex'
								>
									Get started
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 20 20'
										fill='currentColor'
										className='w-5 h-5'
									>
										<path
											fillRule='evenodd'
											d='M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z'
											clipRule='evenodd'
										/>
									</svg>
								</a>
								<a
									href='javascript:void(0)'
									className='flex items-center justify-center gap-x-1 py-2 px-4 text-gray-700 hover:text-gray-900 font-medium duration-150 md:inline-flex'
								>
									Contact sales
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 20 20'
										fill='currentColor'
										className='w-5 h-5'
									>
										<path
											fillRule='evenodd'
											d='M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z'
											clipRule='evenodd'
										/>
									</svg>
								</a>
							</div>
						</div>
						<div className='flex-1 hidden lg:block'>
							<img
								src='https://picsum.photos/id/4/800/400'
								className='max-w-2xl'
							/>
						</div>
					</div>
				</section>

				<section className='py-10'>
					<div className=' text-gray-600 '>
						<div className='relative max-w-2xl mx-auto sm:text-center'>
							<div className='relative z-10'>
								<h3 className='text-gray-800 text-3xl font-light sm:text-4xl'>What's inside?</h3>
								<p className='mt-3'>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget
									molestie varius, enim ex faucibus purus.
								</p>
							</div>
							<div
								className='absolute inset-0 max-w-xs mx-auto h-44 blur-[118px]'
								style={{
									background:
										'linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)',
								}}
							></div>
						</div>
						<div className='relative mt-12'>
							<ul className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
								{features.map((item, idx) => (
									<li
										key={idx}
										className='bg-white space-y-3 p-4 border rounded-lg'
									>
										<div className='text-center'>
											<Icon
												icon={item.icon}
												height={32}
												inline={true}
												className='inline-block'
											/>
										</div>
										<h4 className='text-lg text-gray-800 font-semibold'>{item.title}</h4>
										<p>{item.desc}</p>
									</li>
								))}
							</ul>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
