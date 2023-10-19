import projectsJSON from '@/assets/json/projects.json'
import { useLanguage } from '@/context/language'
import { orderArray } from '@/utils/order-array'
import { useEffect, useState } from 'react'
import playSound from '@/utils/play-sound'

import repoIcon from '@/assets/icons/repo.svg'
import liveIcon from '@/assets/icons/live.svg'
import ProjectsDialog from './ProjectsDialog/ProjectsDialog'
import '@/styles/projects.css'

export default function Projects () {
	const [currentProject, setCurrentProject] = useState(Math.floor(projectsJSON.length / 2))
	const { translations, language } = useLanguage()
	const orderProjects = orderArray(projectsJSON)

	useEffect(() => {
		const handleWheel = (e) => {
			if (window.innerWidth < 1050) return
			e.preventDefault()
			document.querySelector('.projects-container').scrollLeft += e.deltaY
		}

		document.querySelector('.projects-container')
			.addEventListener('wheel', handleWheel, { passive: false })
		return () => document.querySelector('.projects-container')
	}, [])

	function handleProjectModal (name) {
		if (window.innerWidth < 1050) return
		setCurrentProject(orderProjects.findIndex(el => el.name === name))
		document.querySelector('.projects-dialog').showModal()
	}

	return (
		<section className='section projects'>
			<div className='wave'></div>

			<div className='projects-title'>
				<h2 >{translations.projects.title}</h2>
				<a className='see-more' href='https://github.com/cosmoart?tab=repositories' target='_blank' rel='noopener noreferrer'>
					<span>{translations.projects.more}</span>
					<img src={liveIcon} alt='' />
				</a>
			</div>

			<div className='projects-container'>
				{projectsJSON.map((project, index) => {
					return (
						<article className='project' key={index} onClick={() => handleProjectModal(project.name)} onMouseEnter={() => playSound('hover.ogg', 0.02)} tabIndex='0'>
							<div className='image-container'>
								<img src={project.poster} alt={project.name} />
								<div className='project-viewmore'>{translations.projects.more}</div>
							</div>
							<div className='project-info'>
								<h3 className='project-title'>{project.name}</h3>
								<p className='project-description'>{project.description.short[language]}</p>
								<p className='project-links'>
									{
										project.repo && (
											<a href={project.repo} target='_blank' rel='noopener noreferrer'>
												<img src={repoIcon} alt='repo' />
												{translations.projects.code}
											</a>
										)
									}
									{
										project.live && (
											<a href={project.live} target='_blank' rel='noopener noreferrer'>
												<img src={liveIcon} alt='live' />
												{translations.projects.live}
											</a>
										)
									}
								</p>
							</div>
						</article>
					)
				})}
			</div>

			<ProjectsDialog currentProject={currentProject} setCurrentProject={setCurrentProject} />
		</section >
	)
}
