import React from 'react'
import '../styles.css';
//other
import {motion} from 'framer-motion'

//img
import LinkedHeader from './LinkedHeader'
import MusicItem from './MusicItem';
import SanFrancisco from '../assets/coverArts/sanFranciscoCover.png'
import Adventure from '../assets/coverArts/adventureCover.png'
import Christmas from '../assets/coverArts/ChristmasCover.png'

function Music() {
  return (
   <>
   <LinkedHeader />
    <div className='musicMainDiv'>
      <div className='grid'>
        <MusicItem image = {SanFrancisco} link={"https://fanlink.to/sanfranxolefeezo"} />
        <MusicItem image = {Adventure} link={"https://fanlink.to/adventureEP"} />
        <MusicItem image = {Christmas} link={"https://fanlink.to/acozychristmas"} />
      </div>
    </div>
   </> 
  )
}

export default Music