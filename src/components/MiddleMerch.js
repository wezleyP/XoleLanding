import React from 'react'

import { useRef } from "react";
import { motion } from "framer-motion";

import Island from '../assets/otherpics/otherIsland.png'

function MiddleMerch() {
   const constraintsRef = useRef(null);
  return (
   <div className='parentContainer'>
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
  )
  
}

export default MiddleMerch