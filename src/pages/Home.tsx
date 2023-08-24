import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export default function Home() {
	const { t } = useTranslation();

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
			<div className='px-3 max-w-screen-xl mx-auto mt-4 md:px-0 md:mt-9'>
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
								className='max-w-xl'
							/>
						</div>
					</div>
				</section>

				<dl className='mb-6'>
					<dt className='text-xl font-bold mt-4'>React</dt>
					<dd className='text-sm'></dd>
					<dt className='text-xl font-bold mt-4'>React Router</dt>
					<dd className='text-sm'>{t('router')}</dd>
					<dt className='text-xl font-bold mt-4'>Tailwind CSS</dt>
					<dd className='text-sm'>
						A utility-first CSS framework packed with classes like flex, pt-4, text-center and
						rotate-90 that can be composed to build any design, directly in your markup.
					</dd>
					<dt className='text-xl font-bold mt-4'>Flowbite</dt>
					<dd className='text-sm'>
						Get started with the most popular open-source library of interactive UI components built
						with the utility classes from Tailwind CSS.
					</dd>
					<dt className='text-xl font-bold mt-4'>Flowbite React</dt>
					<dd className='text-sm'>rings Flowbite to React with special React Components.</dd>
					<dt className='text-xl font-bold mt-4'>Iconify</dt>
					<dd className='text-sm'>Over 100,000 open source vector icons as a React Component.</dd>
				</dl>
				<div className='flex space-x-8 flex-row'>
					<div className='basis-1/4 bg-gray-400 shadow-xl'>
						01 fdsaf saf asf
						<br /> asf asf af aff{' '}
					</div>
					<div className='basis-1/4 bg-h1_light-200 shadow-xl'>02</div>
					<div className='basis-1/4 bg-yellow-100 shadow-xl'>03</div>
					<div className='basis-1/4 bg-h1_light-300'>
						<a
							href='#'
							className='block max-w-sm p-6 border border-gray-200 shadow-xl hover:bg-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
						>
							<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
								Noteworthy technology acquisitions 2021
							</h5>
							<p className='font-normal text-gray-700 dark:text-gray-400'>
								Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
								chronological order.
							</p>
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
