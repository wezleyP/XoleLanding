import React, { useState } from 'react';
import '../index.css';
import '../styles.css';
//cmpts
import LinkedHeader from './LinkedHeader'
import MiddleMain from './MiddleMain'

//img
import starryBackground from '../assets/backgrounds/starryBackground.png'
import Star from '../assets/otherpics/star.png'


function Home() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  return (
    <>
   <div onMouseMove={(event) => setCursorPosition({ x: event.clientX, y: event.clientY })}
    style={{ backgroundImage:`url(${starryBackground})`,
      minHeight: '100vh',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
   }}>
        <img
          src={Star}
          style={{ height: '1rem', width: '1rem', position: 'absolute', left: cursorPosition.x - 25, top: cursorPosition.y + 25}}
        />
       <LinkedHeader />
       <MiddleMain />
   </div> 

   </>
  )
}

export default Home