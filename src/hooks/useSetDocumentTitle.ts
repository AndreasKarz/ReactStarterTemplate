import { useLocation } from 'react-router-dom';

/**
 * https://www.toptal.com/react/react-hooks-typescript-example
 */

type UseProps = {
	separator?: string;
	reverse?: boolean;
};

/**
 * Sets the document title depending on the path. Seperator can be set via the props. Also reverse.
 * With reverse=true the path appears first and then the website name follows.
 * @param {UseProps} [props]
 */
export default function useSetDocumentTitle(props: UseProps = { separator: '>', reverse: false }) {
	const location = useLocation().pathname.replaceAll('/', ` ${props.separator} `).toUpperCase();

	if (props.reverse) {
		window.document.title = `${location.substring(3)} ${props.separator} ${
			import.meta.env.VITE_WEBSITE_NAME
		}`;
	} else {
		window.document.title = `${import.meta.env.VITE_WEBSITE_NAME}${location}`;
	}
}
