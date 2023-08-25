import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface Plan {
	name: string;
	desc: string;
	price: number;
	isMostPop: boolean;
	features: string[];
}

export default function Pricing() {
	const { t, i18n } = useTranslation();
	const [plans, setPlans] = useState<Plan[]>([]);

	useEffect(() => {
		axios
			.get(`/data/plans.${i18n.language}.json`)
			.then((res) => {
				setPlans(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [i18n.language]);

	return (
		<>
			<Helmet>
				<title>{t('pricing.seo.title')}</title>
				<meta
					name='description'
					content="{t('pricing.seo.description')}"
				></meta>
				<meta
					name='keywords'
					content="{t('pricing.seo.keywords')}"
				></meta>
			</Helmet>
			<div className='container page content'>
				<section className='py-14'>
					<div className=' text-gray-600 '>
						<div className='relative max-w-xl mx-auto sm:text-center'>
							<h3 className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
								Pricing for all sizes
							</h3>
							<div className='mt-3 max-w-xl'>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur
									consequat nunc.
								</p>
							</div>
						</div>
						<div className='mt-16 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3'>
							{plans.map((item, idx) => (
								<div
									key={idx}
									className={`relative flex-1 flex items-stretch flex-col rounded-xl border-2 mt-6 sm:mt-0 ${
										item.isMostPop ? 'mt-10' : ''
									}`}
								>
									{item.isMostPop ? (
										<span className='w-32 absolute -top-5 left-0 right-0 mx-auto px-3 py-2 rounded-full border shadow-md bg-white text-center text-gray-700 text-sm font-semibold'>
											Most popular
										</span>
									) : (
										''
									)}
									<div className='p-8 space-y-4 border-b'>
										<span className='text-tahiti-dark font-medium'>{item.name}</span>
										<div className='text-gray-600 text-3xl font-semibold'>
											${item.price} <span className='text-xl text-gray-800 font-normal'>/mo</span>
										</div>
										<p>{item.desc}</p>
										<button className='px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-tahiti hover:bg-tahiti-light active:bg-tahiti-light'>
											Get Started
										</button>
									</div>
									<ul className='p-8 space-y-3'>
										<li className='pb-2 text-gray-800 font-medium'>
											<p>Features</p>
										</li>
										{item.features.map((featureItem, idx) => (
											<li
												key={idx}
												className='flex items-center gap-5'
											>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													className='h-5 w-5 text-tahiti'
													viewBox='0 0 20 20'
													fill='currentColor'
												>
													<path
														fillRule='evenodd'
														d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
														clipRule='evenodd'
													></path>
												</svg>
												{featureItem}
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
