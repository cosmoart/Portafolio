import { useTranslation } from 'react-i18next';

export default function About() {
	const { t } = useTranslation();

	return (
		<section id='about' className="section grid place-items-center p-4 min-h-screen bg-cover bg-[url(https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)]">
			<div className='max-w-3xl backdrop-blur-md p-4'>
				<h2 className="subtitle">{t("about.title")}</h2>
				<p>
					{t("about.description")}
				</p>
			</div>
		</section>
	)
}