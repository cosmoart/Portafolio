import '@/styles/ui/tooltip.css'

export default function Tooltip ({ children, dir = 'top', ariaHidden = 'true' }) {
	const direction = ['top', 'right', 'bottom', 'left'].includes(dir) ? dir : 'top'

	return (
		<div className='tooltip' data-dir={direction} aria-hidden={ariaHidden}>
			{children}
		</div>
	)
}
