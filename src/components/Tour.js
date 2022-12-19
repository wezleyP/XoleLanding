import React from 'react'
import '../styles.css'
import { useRef } from "react";
import { motion } from "framer-motion";

function Tour() {

   const constraintsRef = useRef(null);

  return (
   <div className='parentContainer'>
   <motion.p 
      initial={{scale: 0.5}}
      animate={{
         scale:1,
      }}
      transition={{ duration: 1.5 }} >drag it ;)</motion.p>
   <motion.div 
      initial={{scale: 0.5}}
      animate={{
         scale:1,
      }}
      transition={{ duration: 1.5 }} 
      className="container" ref={constraintsRef}>
      <motion.div 
         initial={{scale: 0}}
         animate={{
            scale:1,
          }}
          transition={{ duration: 1.5 }} 
          className="item" drag dragConstraints={constraintsRef}>
         <p>
            Coming Soon
         </p>
         
      </motion.div>
   </motion.div>
   
   </div>
  )
}

export default Tour