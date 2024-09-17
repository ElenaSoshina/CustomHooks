import { useEffect, useRef, useState } from 'react'

function useHover () {
	const [hovered, setHovered] = useState(false)
	
	const ref = useRef<HTMLDivElement | null>(null)
	
	useEffect(() => {
		const handleMouseOver = () => setHovered(true);
		const handleMouseOut = () => setHovered(false)
		
		const element = ref.current
		
		if (element) {
			element.addEventListener('mouseover', handleMouseOver)
			element.addEventListener('mouseout', handleMouseOut)
		}
		
		// очистка слушателей при размонтировании
		return () => {
			if (element) {
				element.removeEventListener('mouseover', handleMouseOver)
				element.removeEventListener('mouseout', handleMouseOut)
			}
		}
	}, [ref])
	
	return {hovered, ref}
}

export default useHover
