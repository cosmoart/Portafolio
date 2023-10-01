import '@/styles/settings.css'
import { useEffect, useState } from 'react'
import { useLanguage } from '@/context/language'

import LanguageIcon from '@/assets/settings/language.svg'
import SoundOnIcon from '@/assets/settings/sound-on.svg'
import SoundOffIcon from '@/assets/settings/sound-off.svg'
import DarkModeIcon from '@/assets/settings/darkmode.svg'
import LightModeIcon from '@/assets/settings/lightmode.svg'
import ExternalLinkIcon from '@/assets/settings/external-link.svg'
import CodeIcon from '@/assets/settings/code.svg'

export default function Settings () {
	const darkModeLocal = localStorage.getItem('darkmode')
		? localStorage.getItem('darkmode') === 'true'
		: true
	const soundLocal = localStorage.getItem('sound')
		? localStorage.getItem('sound') === 'true'
		: true

	const { translations, language, changeLanguage } = useLanguage()
	const [darkmode, setDarkmode] = useState(darkModeLocal)
	const [sound, setSound] = useState(soundLocal)

	function handleSound () {
		setSound(!sound)
		localStorage.setItem('sound', !sound)
	}

	useEffect(() => {
		document.documentElement.classList.toggle('darkmode', darkmode)
		localStorage.setItem('darkmode', darkmode)
	}, [darkmode])

	return (
		<nav className='section settings'>
			<ul>
				<li>
					<button
						className='sound-btn'
						onClick={() => setDarkmode(!darkmode)}
						title={`${translations.settings[darkmode ? 'lightmode' : 'darkmode']}`}>
						<img src={DarkModeIcon} alt='Dark Mode' className={`${darkmode ? '' : 'img-hidden'}`} data-sound='switch-on.mp3' />
						<img src={LightModeIcon} alt='Light Mode' className={`${darkmode ? 'img-hidden' : ''}`} data-sound='switch-off.mp3' />
					</button>
				</li>

				<li>
					<button
						onClick={() => changeLanguage(language === 'es' ? 'en' : 'es')}
						title={`${translations.settings[language === 'es' ? 'english' : 'spanish']}`}
						className='language-btn'>
						<img src={LanguageIcon} alt={`${language === 'es' ? 'English' : 'Español'}`} />
						<span className={`${language === 'es' ? 'hidden' : ''}`} data-sound='switch-on.mp3'>ES</span>
						<span className={`${language === 'es' ? '' : 'hidden'}`} data-sound='switch-off.mp3'>EN</span>
					</button>
				</li>

				<li>
					<button
						onClick={handleSound}
						className='sound-btn'
						title={`${translations.settings[sound ? 'mute' : 'sound']}`} >
						<img src={SoundOnIcon} alt='Sound on' className={`${sound ? '' : 'img-hidden'}`} data-sound='switch-on.mp3' />
						<img src={SoundOffIcon} alt='Sound off' className={`${sound ? 'img-hidden' : ''}`} data-sound='switch-off.mp3' />
					</button>
				</li>

				<li>
					<a href='https://github.com/cosmoart/Portafolio'
						className='code-btn'
						target='_blank'
						rel='noopener noreferrer'
						title={`${translations.settings.code}`}>
						<img src={CodeIcon} alt='Code' data-sound='switch-on.mp3' />
						<img src={ExternalLinkIcon} alt='' data-sound='switch-off.mp3' />
					</a>
				</li>
			</ul>
		</nav>
	)
}
