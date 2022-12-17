import Logo from "../assets/images/logo_cosmo.svg"
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';

export default function Navbar() {
	const { i18n } = useTranslation();
	const [showNavBar, setShowNavBar] = useState(true);
	const navBar = useRef(null)

	useEffect(() => {
		// let prevScroll = window.pageYOffset;
		// window.onscroll = () => {
		// 	let currentScroll = window.pageYOffset;
		// 	if (prevScroll > currentScroll) setShowNavBar(true)
		// 	else setShowNavBar(false)
		// 	prevScroll = currentScroll;
		// }

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const id = entry.target.id
					const navLinks = document.querySelectorAll('nav a')
					navLinks.forEach((link) => {
						if (id === "home") link.classList.remove('text-[var(--mainColor)]')
						if (link.getAttribute('href').slice(2) === id) link.classList.add('text-[var(--mainColor)]')
						else link.classList.remove('text-[var(--mainColor)]')
					})
				}
			})
		}, { threshold: 0.6 })
		const sections = document.querySelectorAll('.section')
		sections.forEach((section) => observer.observe(section))
	}, [])

	return (
		<header className={`bg-gray-600 bg-opacity-50 backdrop-blur-sm sticky top-0 transition-transform translate-y-0 shadow-sm ${!showNavBar && "-translate-y-20"}`} ref={navBar}>
			<nav>
				<ul className="flex gap-5 p-3 justify-center items-center">
					<li><a href="/#about" className="uppercase font-bold">About</a></li>
					<li><a href="/#skills" className="uppercase font-bold">Skills</a></li>
					<li><button onClick={() => window.scrollTo(0, 0)}><img src={Logo} alt="Logo" className='w-10' /></button></li>
					<li><a href="/#proyects" className="uppercase font-bold">Proyects</a></li>
					<li><a href="/#contact" className="uppercase font-bold">Contact</a></li>
				</ul>
				<div className='absolute right-0 top-1/2'>
					<button key={'es'} style={{ fontWeight: i18n.resolvedLanguage === 'es' ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage('es')}>
						{'Español'}
					</button>
					<button key={'en'} style={{ fontWeight: i18n.resolvedLanguage === 'en' ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage('en')}>
						{'English'}
					</button>
				</div>
			</nav>
		</header>
	)
}