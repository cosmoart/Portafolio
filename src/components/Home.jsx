import { useTranslation } from 'react-i18next'
import contact from '../assets/contact.json';

export default function Home() {
	const { t } = useTranslation();

	return (
		<main id='home' className="section min-h-screen bg-gray-800 text-center p-2 grid place-items-center items-center pt-4">
			<div className='bg-main'></div>
			<div className='z-20'>
				<h1 className="text-3xl text-black">
					{t("home.title")} <span className='block uppercase text-7xl text-[var(--mainColor)] tracking-wider font-semibold'>Cosmo</span>
					<span className='text-xl block m-2'>{t('home.subtitle')}</span>
				</h1>
				<a href="#contact" className="bg-[var(--mainColor)] text-sm uppercase rounded-sm px-6 py-3 m-4 inline-block font-bold tracking-wide">
					{t("home.button")}
				</a>
			</div>
			<nav className='absolute left-4 top-1/2 -translate-y-1/2'>
				<ul className='flex flex-col gap-3 relative z-20'>
					{
						contact.map((item, index) => (
							<li key={index}>
								<a href={item.link} target="_blank" rel="noopener noreferrer" className='bg-[var(--bgColor)] rounded-full p-2 inline-block' style={{ "--bgColor": item.color }}>
									<img src={`/contact/${item.name}.svg`} alt={item.name} className="w-5 h-5 invert" />
								</a>
							</li>
						))
					}
				</ul>
			</nav>
		</main>
	)
}