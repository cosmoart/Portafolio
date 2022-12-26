import { useTranslation } from 'react-i18next';
import skills from '../assets/skills.json'


export default function Skills() {
	const { t } = useTranslation();

	return (
		<section id='skills' className="section bg-slate-800 min-h-screen p-4 grid place-items-center content-center">
			<h2 className="subtitle">{t("skills.title")}</h2>
			<div className='grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-2 w-full xl:max-w-5xl'>
				{skills.map((skill, index) => (
					<figure key={index + "skills"} className="text-lg text-gray-300 m-2 text-center rounded-md border backdrop-blur-md p-3">
						<div className="relative bg-[var(--bgColor)] aspect-square p-2 rounded-full" style={{ "--bgColor": skill.color.toLowerCase() }}>
							<img title={skill.name} src={`/skills/${skill.name}.svg`} className="w-10 h-10 invert z-10 absolute-center" />
						</div>
						<figcaption>{skill.name}</figcaption>
					</figure>
				))}
			</div>
		</section>
	)
}