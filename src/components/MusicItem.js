import React from 'react'
import '../styles.css';
import {motion} from 'framer-motion'

export default function MusicItem(props) {
  return (
      <motion.div 
         whileHover={{scale:1.1}}
         className='grid-item'>
         <a target="_blank" href={props.link}>
            <img className='musicItemImage' src={props.image} />
         </a>
      </motion.div>
  )
}
