import Logo from "../assets/images/logo_cosmo.svg"
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';

export default function Navbar() {
	const { t, i18n } = useTranslation();
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
		<header className={`w-full z-40 bg-opacity-50 backdrop-blur-sm fixed top-0 transition-transform translate-y-0 shadow-sm ${!showNavBar && "-translate-y-20"}`} ref={navBar}>
			<nav>
				<ul className="flex gap-9 p-2 justify-center items-center text-sm pl-12">
					<li className='text-center'>
						<a href="/#about" className="uppercase font-bold">{t("navBar.about")}</a>
					</li>
					<li className='text-center'>
						<a href="/#skills" className="uppercase font-bold">{t("navBar.skills")}</a>
					</li>
					<li>
						<button onClick={() => window.scrollTo(0, 0)}><img src={Logo} alt="Logo" className='w-9' /></button>
					</li>
					<li className='text-center'>
						<a href="/#projects" className="uppercase font-bold" >{t("navBar.projects")}</a>
					</li>
					<li className='text-center'>
						<a href="/#contact" className="uppercase font-bold">{t("navBar.contact")}</a>
					</li>
				</ul>
				<div className='absolute right-4 top-1/2 -translate-y-1/2 flex gap-2 text-sm'>
					<button key={'es'} style={{ fontWeight: i18n.resolvedLanguage === 'es' ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage('es')}>
						{'ESP'}
					</button>
					<button key={'en'} style={{ fontWeight: i18n.resolvedLanguage === 'en' ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage('en')}>
						{'ENG'}
					</button>
				</div>
				<div className='w-1 h-6 bg-red-500 absolute top-0 left-1/2 -translate-x-1/2 z-20'></div>
			</nav>
		</header>
	)
}