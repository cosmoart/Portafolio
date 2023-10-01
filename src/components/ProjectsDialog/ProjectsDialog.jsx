import { useRef } from 'react'
import projectsJSON from '@/assets/json/projects.json'
import closeIcon from '@/assets/icons/close.svg'
import '@/styles/projectsDialog/projectsDialog.css'

import { orderArray } from '@/utils/order-array'
import { useLanguage } from '@/context/language'
import Images from './Images'
import Project from './Project'
import Slider from './Slider'

export default function ProjectsDialog ({ currentProject, setCurrentProject }) {
	const orderProjects = orderArray(projectsJSON)
	const { translations } = useLanguage()
	const dialog = useRef(null)

	const handleClose = () => {
		dialog.current.classList.add('hide')
		setTimeout(() => {
			dialog.current.close()
			dialog.current.classList.remove('hide')
		}, 200)
	}

	const handleCloseOutside = (e) => {
		if (e.target.classList.contains('projects-dialog')) handleClose()
	}

	if (window.innerWidth < 1050) return null

	return (
		<dialog className='projects-dialog' onClick={handleCloseOutside} ref={dialog}>
			<div className='current-project'>
				<button className='close' onClick={() => handleClose()} title={translations.close} data-sound='switch-off.mp3'>
					<img src={closeIcon} alt={translations.close} data-sound='switch-off.mp3' />
				</button>

				<Images currentProject={currentProject} orderProjects={orderProjects} />
				<Project orderProjects={orderProjects} currentProject={currentProject} />
			</div>

			<Slider setCurrentProject={setCurrentProject} currentProject={currentProject} orderProjects={orderProjects} />
		</dialog>
	)
}
