import '@/styles/loadingScreen.css'

export default function LoadingScreen () {
	if (window.innerWidth < 1050) return null

	return (
		<div className='loading-page'>
			<div className='container'>
				<div className='title' style={{ height: '111px' }}></div>
				<div className='about'>	</div>
				<div className='settings'>
					<div style={{ width: '23px' }}></div>
				</div>
				<div className='social'>
					<div style={{ height: '24px' }}></div>
				</div>
				<div className='skills'></div>
				<div className='projects'></div>
				<div className='logo'>
					<div style={{ height: '146px' }}></div>
				</div>
			</div>
		</div>
	)
}
