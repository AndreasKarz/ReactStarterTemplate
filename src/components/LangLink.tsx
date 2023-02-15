import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next';

interface LinkProps {
	lang: string;
}

const icons: { [id: string]: string } = {
	de: 'flagpack:de',
	en: 'flagpack:gb-ukm',
	ru: 'flagpack:ru',
};

export default function LangLink(props: LinkProps) {
	const { i18n } = useTranslation();

	return (
		<div
			onClick={() => i18n.changeLanguage(props.lang)}
			className='leading-7'
			style={{ cursor: 'pointer' }}
		>
			<Icon
				icon={icons[props.lang]}
				height={20}
				className='inline-block float-left mt-1 mr-0'
				inline={true}
			/>
		</div>
	);
}
