import { useDocumentTitle } from 'usehooks-ts';

function Policy() {
	useDocumentTitle(`PRIVACY - ${import.meta.env.VITE_WEBSITE_NAME}`);

	return <div>Policy</div>;
}

export default Policy;
