import Logo from "../assets/images/logo_cosmo.svg"
import { useEffect, useRef, useState } from 'react'

export default function Navbar() {
	const [showNavBar, setShowNavBar] = useState(true);
	const navBar = useRef(null)

	useEffect(() => {
		let prevScroll = window.pageYOffset;
		window.onscroll = () => {
			let currentScroll = window.pageYOffset;
			if (prevScroll > currentScroll) setShowNavBar(true)
			else setShowNavBar(false)
			prevScroll = currentScroll;
		}
	}, [])

	return (
		<header className={`bg-red-600 sticky top-0 transition-transform translate-y-0 ${!showNavBar && "-translate-y-20"}`} ref={navBar}>
			<nav>
				<ul className="flex gap-5 p-3 justify-center items-center">
					<li><a href="/#about" className="uppercase font-bold">About</a></li>
					<li><a href="/#skills" className="uppercase font-bold">Skills</a></li>
					<li><button onClick={() => window.scrollTo(0, 0)}><img src={Logo} alt="Logo" className='w-10' /></button></li>
					<li><a href="/#proyects" className="uppercase font-bold">Proyects</a></li>
					<li><a href="/#contact" className="uppercase font-bold">Contact</a></li>
				</ul>
			</nav>
		</header>
	)
}