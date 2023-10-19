import techs from './techs.json'

export default [
	{
		name: 'Quizi',
		repo: 'https://github.com/cosmoart/quiz-game',
		live: 'https://quizi.vercel.app',
		description: {
			short: {
				en: 'Quiz game with questions made with AI, game modes and wildcards.',
				es: 'Juego de preguntas con IA, modos de juego y comodines.'
			},
			long: {
				en: 'Quiz/trivia game with AI generated questions, 3 game modes and wildcards. Made with Tailwind and the Cohere API in Next.js.',
				es: 'Juego de preguntas generadas por IA con 3 modos de juego y comodines. Hecha con Tailwind y la API de Cohere en Next.js.'
			}
		},
		tech: [techs.css, techs.javascript, techs.react],
		poster: '/projects-images/quizi/poster.svg',
		images: [
			'/projects-images/quizi/home.avif',
			'/projects-images/quizi/play-classic.avif',
			'/projects-images/quizi/play-infinity.avif'
		]
	},
	{
		name: 'Space tourism',
		repo: 'https://github.com/cosmoart/Space-tourism',
		live: 'https://space-tourist.vercel.app',
		description: {
			short: {
				en: 'Landing page for a fictional space travel company.',
				es: 'Página web para una empresa ficticia de viajes espaciales.'
			},
			long: {
				en: 'Landing page for a fictional space travel company. Made with CSS and React in Next.js.',
				es: 'Página web para una empresa ficticia de viajes espaciales. Hecha con CSS y React en Next.js.'
			}
		},
		tech: [techs.css, techs.javascript, techs.nextjs, techs.react],
		poster: '/projects-images/space-tourism/poster.avif',
		images: [
			'/projects-images/space-tourism/home.avif',
			'/projects-images/space-tourism/destination.avif',
			'/projects-images/space-tourism/crew.avif',
			'/projects-images/space-tourism/technology.avif'
		]
	},
	{
		name: 'Where in the World',
		repo: 'https://github.com/cosmoart/Where-in-the-world',
		live: 'https://where-world.vercel.app',
		description: {
			short: {
				en: 'Search and filter information from all countries.',
				es: 'Busca y filtra información de todos los países.'
			},
			long: {
				en: 'Search and filter information from all countries. Made with Tailwind and React using the REST Countries API.',
				es: 'Busca y filtra información de todos los países. Hecho con Tailwind y React usando la API de REST Countries.'
			}
		},
		tech: [techs.javascript, techs.tailwind, techs.react],
		poster: '/projects-images/where-in-the-world/poster.avif',
		images: [
			'/projects-images/where-in-the-world/home.avif',
			'/projects-images/where-in-the-world/home-light.avif',
			'/projects-images/where-in-the-world/country.avif'
		]
	},
	{
		name: 'IP address tracker',
		repo: 'https://github.com/cosmoart/IP-address-tracker',
		live: 'https://ip-trackerr.vercel.app',
		description: {
			short: {
				en: 'Track and obtain information based on an IP address or a domain.',
				es: 'Rastrea y obten información basada en una dirección IP o un dominio.'
			},
			long: {
				en: 'Track and obtain information based on an IP address or a domain. Made with the IPify IP Geolocation API and LeafletJS.',
				es: 'Rastrea y obten información basada en una dirección IP o un dominio. Hecho con la API de IP Geolocation y LeafletJS.'
			}
		},
		tech: [
			techs.css,
			techs.javascript,
			techs.styledComponents,
			techs.react,
			techs.leaflet,
			techs.axios
		],
		poster: '/projects-images/ip-address-tracker/poster.avif',
		images: [
			'/projects-images/ip-address-tracker/home2.avif',
			'/projects-images/ip-address-tracker/home1.avif'
		]
	},
	{
		name: 'Easybank',
		repo: 'https://github.com/cosmoart/Easybank-landing-page',
		live: 'https://eeasybank.vercel.app',
		description: {
			short: {
				en: 'Landing page of a fictitious banking company.',
				es: 'Página web de una empresa bancaria ficticia.'
			},
			long: {
				en: 'Landing page of a fictitious banking company, made with Tailwind and React.',
				es: 'Página web de una empresa bancaria ficticia, hecha con Tailwind y React.'
			}
		},
		tech: [techs.react, techs.tailwind],
		poster: '/projects-images/easybank/poster.avif',
		images: [
			'/projects-images/easybank/home-hero-section.avif',
			'/projects-images/easybank/home-middle.avif',
			'/projects-images/easybank/home-footer.avif'
		]
	}
]
