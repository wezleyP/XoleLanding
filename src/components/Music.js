import React, { useState } from 'react';
import '../styles.css';

//img
import LinkedHeader from './LinkedHeader'
import MusicItem from './MusicItem';
import SanFrancisco from '../assets/coverArts/sanFranciscoCover.png'
import Adventure from '../assets/coverArts/adventureCover.png'
import Christmas from '../assets/coverArts/ChristmasCover.png'
import Star from '../assets/otherpics/star.png'

function Music() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  return (
   <div onMouseMove={(event) => setCursorPosition({ x: event.clientX, y: event.clientY })}>
   <LinkedHeader />
    <div className='musicMainDiv' >
        <img
          src={Star}
          style={{ height: '1rem', width: '1rem', position: 'absolute', left: cursorPosition.x - 25, top: cursorPosition.y + 25}}
        />
      <div className='grid'>
        <MusicItem image = {SanFrancisco} link={"https://fanlink.to/sanfranxolefeezo"} />
        <MusicItem image = {Adventure} link={"https://fanlink.to/adventureEP"} />
        <MusicItem image = {Christmas} link={"https://fanlink.to/acozychristmas"} />
      </div>
    </div>
   </div> 
  )
}

export default Music