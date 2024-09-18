import { useEffect } from 'react'

type EventType = keyof WindowEventMap;  // Тип события окна, например: 'resize'
type EventListenerType = (event: Event) => void;  // Тип слушателя события
type EventOptions = boolean | AddEventListenerOptions;  // Опции для слушателя события

export function useWindowEvent (type: EventType, listener: EventListenerType, options: EventOptions) {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener(type, listener, options)
			return () => window.removeEventListener(type, listener, options)
		}
	}, [type, listener])
}


