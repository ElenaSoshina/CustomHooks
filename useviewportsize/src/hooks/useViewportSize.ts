import { useState } from 'react'
import { useWindowEvent } from './useWindowEvent'

export function useViewportSize () {
	const [size, setSize] = useState({
		width: typeof window !== 'undefined' ? window.innerWidth : 0,
		height: typeof window !== 'undefined' ? window.innerHeight : 0
	})
	
	useWindowEvent('resize', () => {
		setSize({
			width: window.innerWidth,
			height: window.innerHeight
		})
	}, {})
	
	return size
}
