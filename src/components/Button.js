import React from 'react'
import '../styles.css'
import { motion } from "framer-motion";

function Button(props) {
  return (
    <motion.div whileHover={{scale: 1.2}} className='buttonParent'>
      <div className="buttonChild">{props.name}</div>
    </motion.div>
    
  )
}
export default Button