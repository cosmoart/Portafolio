import arrowIcon from '@/assets/icons/arrow.svg'
import '@/styles/projectsDialog/images.css'
import { useEffect, useState } from 'react'

export default function Images ({ currentProject, orderProjects }) {
	const [currentImg, setCurrentImg] = useState(0)

	useEffect(() => changueCurrentImg(0), [currentProject])

	useEffect(() => {
		const handleWheel = (e) => changueCurrentImg(currentImg + (e.deltaY > 0 ? 1 : -1))

		document.querySelector('.project-imgs-container')
			.addEventListener('wheel', handleWheel, { passive: false })
		return () => document.querySelector('.images-slider')
	}, [currentImg])

	function changueCurrentImg (number) {
		if (number > orderProjects[currentProject].images.length - 1 || number < 0) return
		document.querySelectorAll('.project-image').forEach(projectImg => {
			projectImg.classList.remove('slide-left', 'slide-right')
			if (projectImg.id !== `project-image-${number}`) {
				projectImg.classList.add(Number(projectImg.id.replace('project-image-', '')) < number ? 'slide-left' : 'slide-right')
			}
		})
		setCurrentImg(number)
	}

	return (
		<section>
			<div className='project-imgs-container'>
				{
					orderProjects[currentProject].images && (
						orderProjects[currentProject].images.map((image, index) => {
							return <img key={index}
								src={image} alt={`Project ${orderProjects[currentProject].name} preview #${index + 1}`}
								className='project-image'
								loading='lazy'
								id={`project-image-${index}`}
							/>
						}
						)
					)
				}
				<button onClick={() => changueCurrentImg(currentImg - 1)} disabled={currentImg < 1} className='prev-img'>
					<img src={arrowIcon} alt='arrow' className='arrow-left' />
				</button>
				<button
					className='next-img'
					onClick={() => changueCurrentImg(currentImg + 1)}
					disabled={currentImg === orderProjects[currentProject].images.length - 1}>
					<img src={arrowIcon} alt='arrow' />
				</button>
			</div>

			<ul className='images-slider'>
				{
					orderProjects[currentProject].images && (
						orderProjects[currentProject].images.map((_, index) => {
							return <li key={index}
								className={currentImg === index ? 'selected-p' : ''}
								onClick={() => changueCurrentImg(index)}></li>
						}
						)
					)
				}
			</ul>
		</section>

	)
}
