import * as React from 'react';
import '../index.css'
import '../styles.css'

//components
import YoutubeEmbed from "../YoutubeEmbed";

//other
import {motion} from 'framer-motion'

//img
import Island from '../assets/otherpics/otherIsland.png'

import { Link } from 'react-router-dom';
import XoleLetters from '../assets/otherpics/otherXoleLetters.png'

export default function MiddleMain() {
  const [move, setMove] = React.useState(false);
  const [ymove, setyMove] = React.useState(false);
    return (
      <div>
        <div className='xoleLetters'>
          <Link to='/' className='siteTitle'>
            <motion.img
            whileHover={{scale: 1.4}}
            initial={{scale: 0}}
            animate={{
             scale:1,
            }}
            transition={{ duration: 1.5 }}
            className='xoleHeader' src={XoleLetters} />
          </Link>
        </div>
      
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

