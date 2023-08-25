import useSetDocumentTitle from '../hooks/useSetDocumentTitle';

function About() {
	useSetDocumentTitle();

	return (
		<div className='container page content'>
			<section className='py-14'>
				<h3 className='text-gray-800 text-3xl font-semibold sm:text-4xl'>Pricing for all sizes</h3>
			</section>
		</div>
	);
}

export default About;
