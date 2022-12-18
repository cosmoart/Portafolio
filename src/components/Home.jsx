import { useTranslation } from 'react-i18next'

export default function Home() {
	const { t } = useTranslation();

	return (
		<main id='home' className="section min-h-screen bg-gray-800 text-center p-2 grid place-items-center items-center pt-4">
			<div>
				<h1 className="text-3xl">
					{t("home.title")} <span className='block uppercase text-7xl text-[var(--mainColor)] tracking-wider font-semibold'>Cosmo</span>
				</h1>
				<span className='text-xl block m-2'>{t('home.subtitle')}</span>
				<a href="#contact" className="bg-[var(--mainColor)] text-sm uppercase rounded-sm shadow-lg shadow-[var(--mainColor)] px-6 py-3 m-4 inline-block font-bold tracking-wide">{t("home.button")}</a>
			</div>
		</main>
	)
}