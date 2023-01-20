/**
 * https://www.freecodecamp.org/news/how-to-import-svgs-in-react-and-vite/
 */
import { ReactComponent as Logo } from '../assets/react.svg';

function Home() {
	return (
		<div>
			Home <Logo />
		</div>
	);
}

export default Home;
