import arrowIcon from '@/assets/icons/arrow.svg'
import '@/styles/projectsDialog/slider.css'

export default function Slider ({ setCurrentProject, currentProject, orderProjects }) {
	const handleWheel = (e) => {
		if (e.deltaY < 0 && currentProject === 0) return
		if (e.deltaY > 0 && currentProject === orderProjects.length - 1) return
		setCurrentProject(currentProject + (e.deltaY > 0 ? 1 : -1))
	}

	return (
		<div className='projects-slider'>
			<div className='project-buttons'>
				<button onClick={() => setCurrentProject(currentProject - 1)} disabled={currentProject === 0}>
					<img src={arrowIcon} alt='arrow' className='arrow-left' />
				</button>
				<button onClick={() => setCurrentProject(currentProject + 1)} disabled={currentProject === orderProjects.length - 1}>
					<img src={arrowIcon} alt='arrow' />
				</button>
			</div>

			<div className='slider' onWheel={handleWheel}>
				{orderProjects.map((project, index) => {
					return (
						<article className={`project ${currentProject === index ? 'project-selected' : ''}`} key={index} onClick={() => setCurrentProject(index)}>
							<img src={project.poster} alt={project.name} />
						</article>
					)
				})}
			</div>
		</div>
	)
}
