import React from 'react'

//other
import {motion} from 'framer-motion'

//img
import starryBackground from '../assets/backgrounds/starryBackground.png'

function Music() {
  return (
   <div style={{ backgroundImage:`url(${starryBackground})`,
   minHeight: '50%',
   minwidth: '50%',
   backgroundRepeat: 'no-repeat',
   backgroundSize: 'cover',
   }}>
       
   </div> 
  )
}

export default Music