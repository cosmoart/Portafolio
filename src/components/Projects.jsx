import proyects from '../assets/projects.json'
import { useTranslation } from 'react-i18next';

export default function Proyects() {
	const { t } = useTranslation();
	return (
		<section id='projects' className='section min-h-screen bg-cyan-700 flex'>
			<h2 className="subtitle">{t("projects.title")}</h2>
			{
				proyects.map((proyect, index) => (
					<div key={index} className="border-red-500 border">
						<p>{index + 1}</p>
						<h3>{proyect.name}</h3>
						<p>{proyect.description}</p>
						<a href={proyect.repo} target="_blank" rel="noopener noreferrer">Go to proyect</a>
					</div>
				))
			}
		</section>
	)
}