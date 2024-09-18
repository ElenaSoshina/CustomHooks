import { useState } from 'react'
import { useWindowEvent } from './useWindowEvent'

interface ScrollPosition {
	x: number;
	y: number
}

type ScrollToFunction = ({ x, y}: {x?: number; y?: number}) => void
export function useWindowScroll (): [ScrollPosition, ScrollToFunction] {
	const [scroll, setScroll] = useState<ScrollPosition>({
		x: typeof window !== 'undefined' ? window.scrollX : 0,
		y: typeof window !== 'undefined' ? window.scrollY : 0
	})
	
	useWindowEvent('scroll', () => {
		setScroll({
			x: window.scrollX,
			y: window.scrollY
		})
	}, {})
	
	// Функция для прокрутки окна до указанной позиции
	const scrollTo: ScrollToFunction = ({
		x = window.scrollX,
		y = window.scrollY
	}) => {
		window.scrollTo(x, y)
	}
	
	return [scroll, scrollTo]
}
