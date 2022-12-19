import { useTranslation } from 'react-i18next';
import contact from '../assets/contact.json';

export default function Contact() {
	const { t } = useTranslation();

	return (
		<section id='contact' className='section min-h-screen bg-gray-700'>
			<h2 className="subtitle">{t("contact.title")}</h2>
			<div className='flex gap-5 justify-center'>
				<form className='flex flex-col max-w-xl' action="https://formsubmit.co/cosmohydra17@gmail.com" method="POST">
					<label htmlFor="email">Email</label>
					<input type="email" name="email" id="email" className='p-2 text-black' />
					<label htmlFor="message">Message</label>
					<textarea name="message" id="message" cols="30" rows="10" className='p-2 text-black' ></textarea>
					<button type="submit">Send</button>
				</form>
				<ul className='columns-2'>
					{
						contact.map((item, index) => (
							<li key={index}>
								<a href={item.link} target="_blank" rel="noopener noreferrer" className='bg-[var(--bgColor)] rounded-full p-4 inline-block' style={{ "--bgColor": item.color }}>
									<img src={`/contact/${item.name}.svg`} alt={item.name} className="w-8 h-8 invert" />
								</a>
							</li>
						))
					}
				</ul>
			</div>
		</section>
	)
}