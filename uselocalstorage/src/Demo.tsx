import { useState } from 'react'
import { useLocalStorage } from './hook/useLocalStorage'
import './Demo.css'


function Demo() {
  const [inputValue, setInputValue] = useState('')
  const [token, { setItem, removeItem }] = useLocalStorage('token');

  return (
    <div className='demo-container'>
      <p className='demo-token'>
        Твой токен: { token || 'Токен не установлен' }
      </p>
      <div>
        {/* Поле ввода токена*/}
        <input
          type='text'
          placeholder='Введите токен'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className='demo-input'
        />
        <button
          className='demo-button'
          onClick={(e) => setItem(inputValue
        )}>
          Задать токен
        </button>
        <button
          className='demo-button'
          onClick={() => removeItem()}>
          Удалить токен
        </button>
      </div>
    </div>
  );
}

export default Demo

