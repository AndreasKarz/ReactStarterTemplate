import { useDocumentTitle } from 'usehooks-ts';

function About() {
	useDocumentTitle(`ABOUT - ${import.meta.env.VITE_WEBSITE_NAME}`);

	return <div>About</div>;
}

export default About;
