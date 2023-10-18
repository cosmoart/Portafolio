import '@/styles/logo.css'

export default function Logo () {
	function changeColor (e) {
		document.documentElement.style.setProperty('--primary-color', e.target.value)
	}

	return (
		<div className='section logo'>
			<input type='color' aria-label='Main color' className='color-picker' defaultValue='#713dff' onChange={changeColor} data-sound='bite.mp3' />
			<div className='logo-border'></div>
			<img src='./favicon.svg' alt='' data-sound='bite.mp3' />
		</div>
	)
}
