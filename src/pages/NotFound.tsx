import Countdown from 'react-countdown';
import { useNavigate } from 'react-router-dom';
import { useDocumentTitle } from 'usehooks-ts';

/**
 * A customizable countdown component for React.
 * https://www.npmjs.com/package/react-countdown
 */

export default function NotFound() {
	useDocumentTitle(`NOT FOUND - ${import.meta.env.VITE_WEBSITE_NAME}`);
	const navigate = useNavigate();

	const renderer = ({ seconds, completed }) => {
		if (completed) {
			navigate(-1);
		} else {
			return <span>{seconds}</span>;
		}
	};

	return (
		<div className='container'>
			NotFound -- we bring you back to the last page in{' '}
			<Countdown
				date={Date.now() + 4000}
				renderer={renderer}
			/>{' '}
			seconds
		</div>
	);
}
