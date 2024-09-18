import { useViewportSize } from './hooks/useViewportSize'

function Demo () {
	const {width, height} = useViewportSize();
	
	return (
		<div style={{padding: '20px', border: '1px solid #ccc', textAlign: 'center', margin: '20px'}}>
			<h2>Текущие размеры окна:</h2>
			<p>Ширина: {width}px</p>
			<p>Высота: {height}px</p>
		</div>
	)
}

export default Demo
