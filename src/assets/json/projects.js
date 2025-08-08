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
		techs: [techs.css, techs.javascript, techs.react],
		poster: '/projects-images/quizi/poster2.svg',
		images: [
			'/projects-images/quizi/home.avif',
			'/projects-images/quizi/play-classic.avif',
			'/projects-images/quizi/play-infinity.avif'
		]
	},
	{
		name: 'Freesets',
		repo: 'https://github.com/cosmoart/Freesets',
		live: 'https://freesets.vercel.app/',
		description: {
			short: {
				en: 'Collection of free multimedia resources like icons, images, illustrations...',
				es: 'Colección de recursos gratuitos como iconos, imágenes, ilustraciones...'
			},
			long: {
				en: 'Collection of free resources. Made with Svelte and Tailwind using Supabase for the database and Cloudinary for image storage. With an average of 30 visitors daily and +200 resources.',
				es: 'Colección de recursos gratuitos. Hecha con Svelte y Tailwind usando Supabase para la base de datos y Cloudinary para el almacenamiento de imágenes. Con una media de 30 visitas diarias y +200 recursos.'
			}
		},
		techs: [techs.svelte, techs.javascript, techs.supabase],
		poster: '/projects-images/freesets/poster.avif',
		images: [
			'/projects-images/freesets/home.avif',
			'/projects-images/freesets/icons.avif',
			'/projects-images/freesets/light.avif'
		]
	},
	{
		name: 'Jobzilla',
		repo: 'https://github.com/cosmoart/jobzilla',
		live: 'https://jobzilla.vercel.app/',
		description: {
			short: {
				en: 'Web in Spanish for job and companies search, with filters and maps.',
				es: 'Buscador de empleos y empresas, con filtros y mapas.'
			},
			long: {
				en: 'Website in Spanish for job and company search, with filters and maps. The data is obtained from the Infojobs API and the map is made with Leaflet and the MapTiler API.',
				es: 'Página web para la búsqueda de empleos y empresas, con filtros y mapas. Los datos se obtienen de la API de Infojobs y el mapa está hecho con Leaflet y la API de MapTiler.'
			}
		},
		techs: [techs.nextjs, techs.leaflet, techs.tailwind],
		poster: '/projects-images/jobzilla/poster.avif',
		images: [
			'/projects-images/jobzilla/home.avif',
			'/projects-images/jobzilla/companies.avif',
			'/projects-images/jobzilla/company.avif',
			'/projects-images/jobzilla/jobs.avif',
			'/projects-images/jobzilla/job.avif'
		]
	},
	{
		name: 'CodeDev',
		repo: 'https://github.com/cosmoart/CodeDev',
		live: 'https://coodedev.netlify.app/',
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
		techs: [
			techs.astro,
			techs.tailwind,
			techs.gsap,
			techs.threejs
		],
		poster: '/projects-images/codedev/poster.avif',
		images: [
			'/projects-images/codedev/home.avif',
			'/projects-images/codedev/about.avif',
			'/projects-images/codedev/projects.avif',
			'/projects-images/codedev/contact.avif'
		],
		scroll: true
	},
	{
		name: 'Space tourism',
		repo: 'https://github.com/cosmoart/Space-tourism',
		live: 'https://space-tourists.netlify.app',
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
		techs: [techs.css, techs.javascript, techs.nextjs, techs.react],
		poster: '/projects-images/space-tourism/poster.avif',
		images: [
			'/projects-images/space-tourism/home.avif',
			'/projects-images/space-tourism/destination.avif',
			'/projects-images/space-tourism/crew.avif',
			'/projects-images/space-tourism/technology.avif'
		]
	}
]
