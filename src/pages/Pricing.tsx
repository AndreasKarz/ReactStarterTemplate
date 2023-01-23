import { useDocumentTitle } from 'usehooks-ts';

export default function Pricing() {
	useDocumentTitle(`PRICING - ${import.meta.env.VITE_WEBSITE_NAME}`);

	return <div>Pricing</div>;
}
