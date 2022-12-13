import { useEffect } from 'react'
import proyects from '../assets/proyects.json'

export default function Proyects() {
	useEffect(() => {
		console.log(proyects)
	}, [])
	return (
		<section className='min-h-screen bg-cyan-700 flex'>
			<h2 id='proyects' className="subtitle">Proyects</h2>
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