// тип для редюсера
import { useReducer } from 'react'

type Action<T> = { type: 'TOGGLE' } | { type: 'SET_VALUE', value: T }

// редюсер для управления переключением
function toggleReducer<T>(state: T, action: Action<T>, values: T[]): T {
	switch (action.type) {
		case 'TOGGLE': {
			const currentIndex = values.indexOf(state)
			const nextIndex = (currentIndex + 1) % values.length
			return values[nextIndex]
		}
		case 'SET_VALUE':
			return values.includes(action.value) ? action.value : state
		default:
			return state
	}
}

export function useToggle<T>(values: T[] | undefined = [true as unknown as T, false as unknown as T]) {
	// инициализация состояния с первым элементом массива
	const [state, dispatch] = useReducer((state: T, action: Action<T>) => toggleReducer(state, action, values), values[0])
	
	const toggle = (value?: T) => {
		if (value !== undefined) {
			dispatch({type: 'SET_VALUE', value})
		} else {
			dispatch({type: 'TOGGLE'})
		}
	}
	
	return [state, toggle] as const
}
