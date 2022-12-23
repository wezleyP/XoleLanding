import React from 'react'
import { motion } from "framer-motion";
import Button from "./Button"
import LinkedHeader from './LinkedHeader';

function Contact() {
  return (
   <>
   <LinkedHeader />
   <motion.div 
   className= 'parentContainer'
      initial={{scale: 0.5}}
      animate={{
       scale:1,
      }}
      transition={{ duration: 1.5 }}>

      <div className='contactChild'>
         <h2
         initial={{scale: 0.5}}
         animate={{
            scale:1,
         }}
         transition={{ duration: 1.5 }}> 
         say hello! → heyxole@gmail.com
         </h2>
      </div> 
      <div className='contactChild'>
         <h2>
             join our community on  
            <a href="https://discord.com/channels/   592037684269023232/709569319943667824?query=xole&offset=0&limit=12&preferredLocale=en-US&categoryId=-1&tag="> 
                  <Button name="Discord"/>
            </a>
         </h2>
      </div>
   </motion.div> 
   </>
  )
}

export default Contact