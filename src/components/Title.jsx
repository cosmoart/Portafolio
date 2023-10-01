import { useLanguage } from '@/context/language'
import '@/styles/title.css'

export default function Title () {
	const { translations } = useLanguage()

	return (
		<section className='section title'>
			<h1>
				<span className='title-hello'>{translations.title.hello}</span>
				<span className='title-name'>COSMO</span>
				<span className='title-subtitle'>{translations.title.webdeveloper}</span>
			</h1>
		</section>
	)
}
