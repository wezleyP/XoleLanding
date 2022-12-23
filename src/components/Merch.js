import * as React from 'react';
import '../index.css';
import '../styles.css';
//cmpts
import { useRef } from "react";
import { motion } from "framer-motion";
import MiddleMerch from './MiddleMerch';
import LinkedHeader from './LinkedHeader';



function Merch() {
  return (
   <div >
       <LinkedHeader />
       <MiddleMerch />
       
   </div> 
  )
  
}

export default Merch