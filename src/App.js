import * as React from 'react';
import './index.css';
import './styles.css';
//cmpts


//img
import starryBackground from './assets/backgrounds/starryBackground.png'
import { Routes, Route } from 'react-router-dom';
import Music from './components/Music';
import Merch from './components/Merch';
import Tour from './components/Tour';
import Contact from './components/Contact';
import Home from './components/Home';

//other



function App() {
  return (
  <>
    <div style={{ backgroundImage:`url(${starryBackground})`,
      minHeight: '10vh',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      
    }}>
    
    <Routes>
      <Route path='/' element = {<Home />}/>
      <Route path='/music' element = {<Music/>}/>
      <Route path='/merch' element = {<Merch/>}/>
      <Route path='/tour' element = {<Tour/>}/>
      <Route path='/contact' element = {<Contact/>}/>

    </Routes>
    </div>
  </>
  );
}

export default App;
