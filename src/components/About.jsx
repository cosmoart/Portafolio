import { useTranslation } from 'react-i18next';

export default function About() {
	const { t } = useTranslation();

	return (
		<section id='about' className="section min-h-screen bg-purple-400">
			<h2 className="subtitle">{t("about.title")}</h2>
			<p>
				I am a web developer with a passion for learning new technologies and
				creating new things. I am currently learning Nextjs and I am looking for
				opportunities to work with it.
			</p>
		</section>
	)
}