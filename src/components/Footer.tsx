/**
 * https://icon-sets.iconify.design/
 * https://tailwindcss.com/docs/margin
 */
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LangLink from './LangLink';

export default function Footer() {
	const currentYear = new Date().getFullYear();
	const { t, i18n } = useTranslation();

	return (
		<footer className='w-full pb-2 bg-gray-100'>
			<div className='container flex justify-between w-full mt-4'>
				<div>
					{i18n.language != 'de' && <LangLink lang='de' />}
					{i18n.language != 'en' && <LangLink lang='en' />}
				</div>
				<div className='justify-center'>{currentYear}</div>
				<div>
					<NavLink to='/about'>{t('nav.about')}</NavLink>&nbsp;|&nbsp;
					<NavLink to='/policy'>{t('nav.legal')}</NavLink>&nbsp;|&nbsp;
					<NavLink to='/contact'>{t('nav.contact')}</NavLink>
				</div>
			</div>
		</footer>
	);
}
