import { useLanguage } from '@/context/language'
import '@/styles/about.css'

export default function About () {
	const { translations } = useLanguage()

	return (
		<section className='section about'>
			<h2>{translations.about.title}</h2>
			<p>{translations.about.description}</p>
		</section>
	)
}
