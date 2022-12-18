import { useTranslation } from 'react-i18next';

export default function Skills() {
	const { t } = useTranslation();

	return (
		<section id='skills' className="section bg-slate-800 min-h-screen">
			<h2 className="subtitle">{t("skills.title")}</h2>
			<p>HTML</p>
			<p>CSS</p>
			<p>JavaScript</p>
			<p>React</p>
			<p>Node</p>
			<p>Express</p>
			<p>Nextjs</p>
			<p>Git</p>
			<p>Figma</p>
		</section>
	)
}