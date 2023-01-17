import React, { useState } from 'react';
import '../index.css';
import '../styles.css';
//cmpts
import MiddleMerch from './MiddleMerch';
import LinkedHeader from './LinkedHeader';

import Star from '../assets/otherpics/star.png'

function Merch() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  return (
   <div onMouseMove={(event) => setCursorPosition({ x: event.clientX, y: event.clientY })}>
       
       <LinkedHeader />
       <img
         src={Star}
         style={{ height: '1rem', width: '1rem', position: 'absolute', left: cursorPosition.x - 25, top: cursorPosition.y + 25}}
       />
       <MiddleMerch />
   </div> 
  )
  
}

export default Merch