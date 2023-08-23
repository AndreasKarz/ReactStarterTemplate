import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

function Contact() {
	const { t } = useTranslation();
	return (
		<>
			<Helmet>
				<title>{t('contact.seo.title')}</title>
				<meta
					name='description'
					content="{t('contact.seo.description')}"
				></meta>
				<meta
					name='keywords'
					content="{t('contact.seo.keywords')}"
				></meta>
			</Helmet>
			<div>Contact</div>
		</>
	);
}

export default Contact;
