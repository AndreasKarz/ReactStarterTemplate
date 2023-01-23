import { useDocumentTitle } from 'usehooks-ts';

function Contact() {
	useDocumentTitle(`CONTACT - ${import.meta.env.VITE_WEBSITE_NAME}`);

	return <div>Contact</div>;
}

export default Contact;
