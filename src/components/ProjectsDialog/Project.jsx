import { useLanguage } from '@/context/language'
import repoIcon from '@/assets/icons/repo.svg'
import liveIcon from '@/assets/icons/live.svg'
import '@/styles/projectsDialog/project.css'

export default function Project ({ orderProjects, currentProject }) {
	const { translations, language } = useLanguage()

	return (
		<section>
			<h3 className='project-title'>
				<a href={orderProjects[currentProject].live} target='_blank' rel='noopener noreferrer'>
					{orderProjects[currentProject].name}
				</a>
			</h3>
			<p className='project-description'>
				{orderProjects[currentProject].description.long[language]}
			</p>
			<ul className='project-technologies'>
				{orderProjects[currentProject].techs.map((tech, index) => {
					return <li key={index}
						className={`project-skill ${tech.contrast ? 'skill-contrast' : ''}`}
						style={{ backgroundColor: tech.color ?? 'var(--primary-color)' }}>
						{tech.image !== false &&
							<img src={`/skills/${tech.name.toLowerCase()}.svg`} alt={tech} />
						}
						{tech.name}
					</li>
				})}
			</ul>

			<p className='project-links'>
				{
					orderProjects[currentProject]?.repo && (
						<a href={orderProjects[currentProject].repo} target='_blank' rel='noopener noreferrer'>
							<img src={repoIcon} alt='' />
							{translations.projects.code}
						</a>
					)
				}
				{
					orderProjects[currentProject]?.live && (
						<a href={orderProjects[currentProject].live} target='_blank' rel='noopener noreferrer'>
							<img src={liveIcon} alt='' />
							{translations.projects.live}
						</a>
					)
				}
			</p>
		</section>
	)
}
