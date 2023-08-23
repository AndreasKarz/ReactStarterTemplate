import Countdown from 'react-countdown';
import { useNavigate } from 'react-router-dom';
import useSetDocumentTitle from '../hooks/useSetDocumentTitle';

/**
 * A customizable countdown component for React.
 * https://www.npmjs.com/package/react-countdown
 */

export default function NotFound() {
	useSetDocumentTitle();
	const navigate = useNavigate();

	// How can I solve the issue with the any type?
	const renderer = ({ seconds, completed }: { seconds: Number; completed: Boolean }) => {
		if (completed) {
			navigate(-1);
		} else {
			return <span>{seconds.toString()}</span>;
		}
	};

	return (
		<div className='container'>
			NotFound -- we bring you back to the last page in&nbsp;
			<Countdown
				date={Date.now() + 4000}
				renderer={renderer}
			/>
			&nbsp; seconds
		</div>
	);
}
