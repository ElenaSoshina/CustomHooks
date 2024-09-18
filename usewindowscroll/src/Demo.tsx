import React from 'react';
import { useWindowScroll } from './hooks/useWindowScroll'


function Demo() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <div style={{ height: '200vh', padding: '20px', position: 'relative' }}>
     
      <div style={{
        position: 'fixed',
        top: '10px',
        left: '10px',
        padding: '10px',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: '#fff',
        borderRadius: '8px'
      }}>
        <p>Scroll position</p>
        <p>X: {scroll.x}px</p>
        <p>Y: {scroll.y}px</p>
      </div>

      
      <button
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007BFF',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
        onClick={() => scrollTo({ y: 0 })}
      >
        Scroll to top
      </button>
    </div>
  );
}

export default Demo;
