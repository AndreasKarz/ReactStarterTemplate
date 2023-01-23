export default function Home() {
	return (
		<div className='container mx-auto px-4 mt-12'>
			<h1 className='mb-4 text-4xl font-light leading-none tracking-tight text-gray-500 md:text-5xl lg:text-6xl dark:text-white'>
				Work smarter, not harder
			</h1>
			<p className='mb-6 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400'>
				With this complete template, you'll have everything you need to get started with your
				project right away:
				<dl>
					<dt className='text-xl font-bold mt-4'>React</dt>
					<dd className='text-sm'></dd>
					<dt className='text-xl font-bold mt-4'>React Router</dt>
					<dd className='text-sm'>
						React Router enables _client side routing_. Client side routing allows your app to
						update the URL from a link click without making another request for another document
						from the server.
					</dd>
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
			</p>
			<div className='flex flex-row'>
				<div className='basis-1/4'>01</div>
				<div className='basis-1/4'>02</div>
				<div className='basis-1/4'>03</div>
				<div className='basis-1/4'>04</div>
			</div>
		</div>
	);
}
