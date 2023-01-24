import useSetDocumentTitle from '../hooks/useSetDocumentTitle';

export default function Pricing() {
	useSetDocumentTitle({ separator: '-', reverse: true });

	return <div>Pricing</div>;
}
