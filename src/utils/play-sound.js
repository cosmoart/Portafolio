export default function playSound (sound, volume = 0.25) {
	if (localStorage.getItem('sound') === 'false') return
	const audio = new Audio(`/sounds/${sound}`)
	audio.volume = volume
	audio.play()
}
