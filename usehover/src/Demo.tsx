import useHover from './hook/useHover'

function Demo() {
  const { hovered, ref } = useHover();

  return (
    <div ref={ref} style={{ padding: '20px', border: '1px solid black', textAlign: 'center' }}>
      {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
    </div>
  );
}

export default Demo
