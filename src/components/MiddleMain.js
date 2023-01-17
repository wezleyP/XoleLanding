import React, { useState } from 'react';
import '../index.css'
import '../styles.css'

//components
import YoutubeEmbed from "../YoutubeEmbed";


//other
import {motion} from 'framer-motion'

//img
import Island from '../assets/otherpics/otherIsland.png'
import Star from '../assets/otherpics/star.png'
import StarTwo from '../assets/otherpics/starTwo.png'

export default function MiddleMain() {
  const [move, setMove] = React.useState(false);
  const [ymove, setyMove] = React.useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const imageLocations = [
    {x: '2.5%', y: 300 + cursorPosition.y * 0.02 },
    {x: '10%', y: 500+ cursorPosition.y * 0.02 },
    {x: '85%', y: 180 + cursorPosition.y * 0.02 },
    {x: '10%', y: 100 + cursorPosition.y * 0.02 },
    {x: '80%', y: 680 + cursorPosition.y * 0.02 },
  ];
    return (

      <div >
        {imageLocations.map(({ x, y }) => (
        <motion.img
        animate={{
          scale: [1, 1.5, 1.5, 1, 1],
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
        }}
          src={StarTwo}
          style={{ height: '2rem', width: '2rem', position: 'absolute', left: x, top: y }}
        />
      ))}

      
      <div className='parent'>
       <div className='child'>
         <YoutubeEmbed embedId="mfWe7ezPCN4" />
        </div>
      </div>
      
      <motion.img 
          initial={{scale: 0}}
          animate={{
              x: move ? -50 : 50,
              y: ymove ? -50 : 50,
              scale:1,
              }}
          transition={{type: "spring", bounce: .75, duration: 3}} 
          onClick={() => {
            setMove(!move)
            setyMove(!ymove)
          }}
          className='island'
          src={Island} 
        />
       
    </div>
    

    )
}

