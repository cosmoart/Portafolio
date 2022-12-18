import { useTranslation } from 'react-i18next'

export default function Home() {
	const { t } = useTranslation();

	return (
		<main id='home' className="section min-h-screen bg-gray-800 text-center p-2 grid place-items-center items-center pt-4">
			<div>
				<h1 className="text-5xl">{t('home.title')}</h1>
				<span className='text-2xl block m-2'>{t('home.subtitle')}</span>
				<a href="#contact" className="bg-[var(--mainColor)] uppercase rounded-sm shadow-lg shadow-[var(--mainColor)] px-4 py-2 m-4 inline-block">{t("home.button")}</a>
			</div>
		</main>
	)
}