export default function Contact() {
	return (
		<section id='contact' className='section min-h-screen bg-green-500'>
			<h2 className="subtitle">Contact</h2>
			<form className='flex flex-col max-w-xl mx-auto'>
				<label htmlFor="email">Email</label>
				<input type="email" name="email" id="email" />
				<label htmlFor="message">Message</label>
				<textarea name="message" id="message" cols="30" rows="10"></textarea>
				<button type="submit">Send</button>
			</form>
		</section>
	)
}