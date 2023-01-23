import { useDocumentTitle } from 'usehooks-ts';
import { useLocation } from 'react-router-dom';

function Services() {
	const location = useLocation().pathname.replaceAll('/', ' > ').toUpperCase();
	useDocumentTitle(`${import.meta.env.VITE_WEBSITE_NAME}${location}`);

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

export default Services;
