import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
	const { t } = useTranslation();
	const color = useRef(null)

	useEffect(() => {
		document.body.style.setProperty("--mainColor", color.current.value)
		color.current.addEventListener("input", () =>
			document.body.style.setProperty("--mainColor", color.current.value)
		);
	}, [])

	return (
		<footer className='p-5 bg-gray-600 relative'>
			<ul className='columns-2'>
				<li><a href="https://github.com/cosmoart" target="_blank" rel="noopener noreferrer">Github</a></li>
				<li><a href="https://twitter.com/CosmoArt0" target="_blank" rel="noopener noreferrer">Twitter</a></li>
				<li><a href="https://www.instagram.com/cosmo_art0/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
				<li><a href="mailto:cosmohydra17@gmail.com" target="_blank" rel="noopener noreferrer">Email</a></li>
				<li><a href="https://discord.com/users/734087835472232559" target="_blank" rel="noopener noreferrer">Discord</a></li>
			</ul>
			<a href="https://github.com/cosmoart/Portafolio" target="_blank" rel="noopener noreferrer">Repo</a>
			<input type="color" name="" ref={color} defaultValue="#676eff" className="colorPicker w-full absolute top-0 left-0 h-2"></input>
		</footer>
	)
}