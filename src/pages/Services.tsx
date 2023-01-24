import useSetDocumentTitle from '../hooks/useSetDocumentTitle';

export default function Services() {
	useSetDocumentTitle({ separator: '-', reverse: true });

	let openingHours = JSON.parse(import.meta.env.VITE_OPENING_HOURS);

	return (
		<>
			<h1>Services</h1>
			<div>{import.meta.env.VITE_OPENING_HOURS}</div>
			<p>{openingHours[0]['dayOfWeek']}</p>
			<p>{import.meta.env.VITE_ADDRESS_STREET}</p>
		</>
	);
}
