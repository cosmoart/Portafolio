import skills from '@/assets/json/skills.js'
import { useLanguage } from '@/context/language'
import Tooltip from './ui/Tooltip'
import '@/styles/skills.css'

export default function Skills () {
	const { translations } = useLanguage()

	return (
		<section className='section skills'>
			<h2>{translations.skills.title}</h2>

			<ul className='skills-container'>
				{skills.map((skill, index) => {
					return (
						<li key={index}
							style={{ '--skill-color': skill.color, '--animation-delay': `${index * 0.05}s` }}
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
