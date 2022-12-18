import { useTranslation } from 'react-i18next';

export default function Contact() {
	const { t } = useTranslation();

	return (
		<section id='contact' className='section min-h-screen bg-green-500'>
			<h2 className="subtitle">{t("contact.title")}</h2>
			<div className='flex'>
				<form className='flex flex-col max-w-xl mx-auto'>
					<label htmlFor="email">Email</label>
					<input type="email" name="email" id="email" />
					<label htmlFor="message">Message</label>
					<textarea name="message" id="message" cols="30" rows="10"></textarea>
					<button type="submit">Send</button>
				</form>
				<ul className='columns-2'>
					<li><a href="https://github.com/cosmoart" target="_blank" rel="noopener noreferrer">Github</a></li>
					<li><a href="https://twitter.com/CosmoArt0" target="_blank" rel="noopener noreferrer">Twitter</a></li>
					<li><a href="https://www.instagram.com/cosmo_art0/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
					<li><a href="mailto:cosmohydra17@gmail.com" target="_blank" rel="noopener noreferrer">Email</a></li>
					<li><a href="https://discord.com/users/734087835472232559" target="_blank" rel="noopener noreferrer">Discord</a></li>
				</ul>
			</div>
		</section>
	)
}