import { useTranslation } from 'react-i18next'
import contact from '../assets/contact.json';

export default function Home() {
	const { t } = useTranslation();

	return (
		<main id='home' className="section min-h-screen bg-gray-800 text-center p-2 grid place-items-center items-center pt-4">
			<div className='bg-main'></div>
			<div className='z-20 uppercase'>
				<h1 className="text-2xl text-black">
					{t("home.title")} <span className='block text-8xl text-[var(--mainColor)] tracking-wider font-semibold'>Cosmo</span>
					<span className='text-xl block m-2'>{t('home.subtitle')}</span>
				</h1>
				<a href="#contact" className="bg-[var(--mainColor)] text-sm rounded-sm px-6 py-3 m-4 inline-block font-bold tracking-wide">
					{t("home.button")}
				</a>
			</div>
			<nav className='absolute left-5 top-1/2 -translate-y-1/2'>
				<ul className='flex flex-col gap-5 relative z-20'>
					{
						contact.map((item, index) => (
							<li key={index}>
								<a href={item.link} target="_blank" rel="noopener noreferrer" className='rounded-full inline-block hover:scale-105 transition-transform'>
									<img src={`/contact/${item.name}.svg`} title={item.name} className="w-5 h-5 invert" />
								</a>
							</li>
						))
					}
				</ul>
			</nav>
		</main>
	)
}