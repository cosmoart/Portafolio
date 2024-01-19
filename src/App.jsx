import LoadingScreen from '@/components/LoadingScreen'
import Settings from '@/components/Settings'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Social from '@/components/Social'
import Title from '@/components/Title'
import About from '@/components/About'
import Logo from '@/components/Logo'

import playSound from '@/utils/play-sound'
import { useEffect } from 'react'

export default function App () {
	console.log('%cHELLO DEV!', 'color: #9d58fd; font-size: 1rem; font-weight: bold; font-family: sans-serif;')

	useEffect(() => {
		function clickSound (e) {
			if (e.target.dataset.sound) return playSound(e.target.dataset.sound)
			playSound('click.wav')
		}

		function onLoad () {
			document.querySelectorAll('.loading-page .container > div').forEach(div => {
				div.style.animation = 'none'
			})
			const loadingPage = document.querySelector('.loading-page')
			if (loadingPage) loadingPage.style.animation = 'loading-pag 1s cubic-bezier(0.53, 0.55, 0.23, 1.07) forwards'
		}

		window.addEventListener('load', onLoad)
		document.addEventListener('click', clickSound)

		return () => {
			window.removeEventListener('load', onLoad)
			document.removeEventListener('click', clickSound)
		}
	}, [])

	return (
		<>
			<LoadingScreen />
			<main>
				<Title />
				<About />
				<Skills />
				<Social />
				<Logo />
				<Projects />
				<Settings />
			</main>
		</>
	)
}
