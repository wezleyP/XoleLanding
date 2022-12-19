import * as React from 'react';
import '../index.css';
import '../styles.css';
//cmpts
import Header from './Header'
import MiddleMain from './MiddleMain'

//img
import starryBackground from '../assets/backgrounds/starryBackground.png'
import { BrowserRouter, Route } from 'react-router-dom';
import Footer from './Footer';


function Home() {
  return (
   <div style={{ backgroundImage:`url(${starryBackground})`,
   minHeight: '100vh',
   backgroundRepeat: 'no-repeat',
   backgroundSize: 'cover',
   }}>
       <Header />
       <MiddleMain />
       <Footer />
   </div> 
  )
}

export default Home