import skills from '@/assets/json/skills.json'
import { useLanguage } from '@/context/language'
import Tooltip from './ui/Tooltip'
import '@/styles/skills.css'
import skillss from '@/assets/json/techs.json'
import projects from '@/assets/json/projects.js'

export default function Skills () {
	const { translations } = useLanguage()
	console.log(skillss)
	console.log(projects)
	return (
		<section className='section skills'>
			<h2>{translations.skills.title}</h2>

			<ul className='skills-container'>
				{skills.map((skill, index) => {
					return (
						<li key={index}
							style={{ '--skill-color': skill.color }}
							className='skill tooltip-container'>
							<img src={`/skills/${skill.name.toLowerCase()}.svg`}
								className='invert skills_skill'
								alt={skill.name} />
							<Tooltip class='skill' ariaHidden='true'>{skill.name}</Tooltip>
						</li>
					)
				})}
			</ul>
		</section>
	)
}
