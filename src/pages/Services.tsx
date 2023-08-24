import useSetDocumentTitle from '../hooks/useSetDocumentTitle';

export default function Services() {
	useSetDocumentTitle({ separator: '-', reverse: true });

	let openingHours = JSON.parse(import.meta.env.VITE_OPENING_HOURS);

	return (
		<div className='px-1 max-w-screen-xl mx-auto mt-4 md:px-1 md:mt-9'>
			<h1>Services</h1>
			<div>{import.meta.env.VITE_OPENING_HOURS}</div>
			<p>{openingHours[0]['dayOfWeek']}</p>
			<p>{import.meta.env.VITE_ADDRESS_STREET}</p>
		</div>
	);
}
