import { useLanguage } from '@/context/language'
import '@/styles/about.css'

export default function About () {
	const { translations } = useLanguage()

	return (
		<section className='section about'>
			<h2>{translations.about.title}</h2>
			{/* <p>Self-taught front-end web developer with <span>2 years of experience</span> working and learning from different personal and professional projects. I develop web applications with technologies such as React, Next.js, Tailwind, among others. I speak <span>Spanish and English</span>, and, most importantly, <span>I like coffee ☕</span>.</p> */}
			{/* <p dangerouslySetInnerHTML={{ __html: translations.about.description }}>{translations.about.description}</p> */}
			<p dangerouslySetInnerHTML={{ __html: translations.about.description }}></p>
		</section>
	)
}
