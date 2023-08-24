import useSetDocumentTitle from '../hooks/useSetDocumentTitle';

export default function Pricing() {
	useSetDocumentTitle({ separator: '-', reverse: true });

	return <div className='px-1 max-w-screen-xl mx-auto mt-4 md:px-1 md:mt-9'>Pricing</div>;
}
