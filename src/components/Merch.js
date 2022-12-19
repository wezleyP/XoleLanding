import * as React from 'react';
import '../index.css';
import '../styles.css';
//cmpts
import { useRef } from "react";
import { motion } from "framer-motion";
import Header from './Header';
import MiddleMerch from './MiddleMerch';

import starryBackground from '../assets/backgrounds/starryBackground.png'

function Merch() {
   const constraintsRef = useRef(null);
  return (
   <div style={{ backgroundImage:`url(${starryBackground})`,
   minHeight: '100vh',
   backgroundRepeat: 'no-repeat',
   backgroundSize: 'cover',
   }}>
       <Header />
       <MiddleMerch />
       
   </div> 
  )
  
}

export default Merch