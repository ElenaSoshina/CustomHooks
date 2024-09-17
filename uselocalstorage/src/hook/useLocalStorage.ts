import { useState } from 'react'

type ReturnValue = [
	string | null,
  {
    setItem: (value: string) => void,
    removeItem: () => void,
  }
];

type UseLocalStorage = (key: string) => ReturnValue;
export const useLocalStorage:UseLocalStorage = (key: string): ReturnValue => {
	const [storedValue, setStoredValue] = useState<string | null>(() => {
		try {
			const item = localStorage.getItem(key)
			return item ? item : null
		} catch (error) {
			console.error('Ошибка чтения localStorage', error)
			return null
		}
	})
	
	const setItem = (value: string) => {
		try {
			window.localStorage.setItem(key, value)
			setStoredValue(value)
		} catch (error) {
			console.error('Ошибка сохранения в localStorage', error)
		}
	}
	
	const removeItem = () => {
		try {
			window.localStorage.removeItem(key)
			setStoredValue(null)
		} catch (error) {
			console.error('Ошибка удаления из localStorage', error)
		}
	}
	
	return [storedValue, { setItem, removeItem }]
}
