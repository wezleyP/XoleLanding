import React, { useState } from 'react';
import '../styles.css'
import { useRef } from "react";
import { motion } from "framer-motion";
import LinkedHeader from './LinkedHeader';

import Island from '../assets/otherpics/otherIsland.png'
import Star from '../assets/otherpics/star.png'

function Tour() {
   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
   const constraintsRef = useRef(null);

  return (
   <div onMouseMove={(event) => setCursorPosition({ x: event.clientX, y: event.clientY })}>
   <LinkedHeader />
    <div className='parentContainer' >
         <img
            src={Star}
            style={{ height: '1rem', width: '1rem', position: 'absolute', left: cursorPosition.x - 25, top: cursorPosition.y + 25}}
         />
      <motion.div 
         initial={{scale: 0.5}}
         animate={{
         scale:1,
         }}
         transition={{ duration: 1.5 }} 
         className="container" ref={constraintsRef}>
         <motion.img 
            initial={{scale: 0}}
            animate={{
               scale:1,
            }}
            transition={{ duration: 1.5 }} 
            className='island'
            src={Island}  drag dragConstraints={constraintsRef}>
               
            </motion.img>
            <p>
               coming soon...
            </p>
      </motion.div>
    </div>
   </div>
  )
}

export default Tour