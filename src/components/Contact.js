import React, { useState } from 'react';
import { motion } from "framer-motion";
import Button from "./Button"
import LinkedHeader from './LinkedHeader';

import Star from '../assets/otherpics/star.png'

function Contact() {
   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  return (
   <div onMouseMove={(event) => setCursorPosition({ x: event.clientX, y: event.clientY })}>
   <LinkedHeader />
   <div className='contactParent' >
         <img
          src={Star}
          style={{ height: '1rem', width: '1rem', position: 'absolute', left: cursorPosition.x - 25, top: cursorPosition.y + 25}}
         />
   <motion.div 
   className= 'gridContact'>
      <div className='contactChild'>
         <h2> 
         say hello! → heyxole@gmail.com
         </h2>
      </div> 
      <div className='contactChild'>
         <motion.h2 whileHover={{scale: 1.3}} className='discord'>
             <a href='http://bit.ly/xolediscord' target="_blank" rel="noopener noreferrer">
             join our community on discord
             </a>
         </motion.h2>
      </div>
         
   </motion.div> 
   <div className='footerParent'>
      <p className='footerItem'>
         website created by <br/>Wesley Patterson
      </p>

      <a href='https://wesleypatterson.netlify.app/' target="_blank" rel="noopener noreferrer">
         <Button className='footerItem' name={'my work'}/>
      </a>
   </div>
   </div>
   </div>
  )
}

export default Contact