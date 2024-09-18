import { useToggle } from './hooks/useToggle'

function Demo () {
	// с массивом цветов
	const [color, toggleColor] = useToggle(['blue', 'orange', 'cyan', 'teal'])
	
	// с true/false
	const[isOn, toggleOnOff] = useToggle()
	
	return (
		 <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <h2>Color Toggle</h2>
        <button
          onClick={() => toggleColor()}
          style={{
            backgroundColor: color,
            padding: '10px 20px',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          Current Color: {color}
        </button>
      </div>

			 <div>
        <h2>On/Off Toggle</h2>
        <button
          onClick={() => toggleOnOff()}
          style={{
            padding: '10px 20px',
            backgroundColor: isOn ? 'green' : 'red',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          {isOn ? 'ON' : 'OFF'}
        </button>
      </div>
    </div>
	)
}

export default Demo
