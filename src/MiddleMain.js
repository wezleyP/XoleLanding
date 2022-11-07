import * as React from 'react';
import './index.css'
import './styles.css'

//components
import YoutubeEmbed from "./YoutubeEmbed";

//other
import {motion} from 'framer-motion'

//img
import Island from './assets/otherpics/otherIsland.png'
import XoleMates from './assets/otherpics/otherXolemates.png'




export default function MiddleMain() {
  const [move, setMove] = React.useState(false);
  const [ymove, setyMove] = React.useState(false);
    return (
      <div>
        <motion.img 
          initial={{scale: 0}}
          animate={{
              x: move ? -35 : 35,
              y: ymove ? -10 : 10,
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
        
      <div className='parent'>
       <div className='child'>
         <YoutubeEmbed embedId="mfWe7ezPCN4" />
        </div>
        
      </div>
      <motion.img 
          whileHover = {{scale: 1.5}}
          initial={{scale: 0}}
          animate={{
              scale:1,
              }}
          transition={{type: "spring", bounce: .75, duration: 3}} 
          className='island'
          src={XoleMates} 
        />
        
    </div>
    )
}

