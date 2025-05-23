import { GmailIcon, GithubIcon, DiscordIcon, InstagramIcon, XIcon } from '@/assets/icons/social-links'
import { useLanguage } from '@/context/language'
import '@/styles/social.css'

export default function Social () {
	const { translations } = useLanguage()
	const socialInfo = [
		{
			name: 'Github',
			link: 'https://github.com/cosmoart',
			user: 'cosmoart',
			color: '#181717',
			icon: <GithubIcon />,
			invert: true
		},
		{
			name: 'Gmail',
			link: 'mailto:cosmohydra17@gmail.com',
			user: 'cosmohydra17@gmail.com',
			color: '#EA4335',
			icon: <GmailIcon />
		},
		{
			name: 'Discord',
			link: 'https://discord.com/users/734087835472232559',
			user: 'Cosmo#3910',
			color: '#5865F2',
			icon: <DiscordIcon />
		},
		{
			name: 'X',
			link: 'https://x.com/CosmoArt0',
			user: 'CosmoArt0',
			color: '#000000',
			icon: <XIcon />,
			invert: true
		},
		{
			name: 'Instagram',
			link: 'https://www.instagram.com/cosmoart0/',
			user: 'cosmo_art0',
			color: 'radial-gradient(circle at 30% 107%, #fdf497 0%,  #fdf497 5%, #fd5949 45%, #d6249f 60%,#285AEB 90%)',
			icon: <InstagramIcon />
		}
	]

	return (
		<section className='section social'>
			<h2 className='hidden'>{translations.social.title}</h2>

			<nav>
				<ul className='social-container'>
					{socialInfo.map((social, index) => {
						return (
							<li key={index} className={`social-link ${social.invert ? 'invert' : ''} `} style={{ '--bg-color': social.color, '--animation-delay': `${index * 0.1}s` }} title={social.name} >
								<a href={social.link} target='_blank' rel='noopener noreferrer' aria-label={social.name}>
									{social.icon}
								</a>
							</li>
						)
					})}
				</ul>
			</nav>
		</section>
	)
}
