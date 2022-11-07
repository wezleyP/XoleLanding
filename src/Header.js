
import * as React from 'react';
import './index.css'
import './styles.css'

//components
import MobileLinks from './MobileLinks'

//other
import {motion} from 'framer-motion'
import { isMobile, browserName } from "react-device-detect";

//img
import XoleLetters from './assets/otherpics/otherXoleLetters.png'

//icons
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTiktok} from 'react-icons/fa'
import {BsSpotify} from 'react-icons/bs'

export default function Header() {
    return (
    <nav className='nav'>
      <ul className='socialLinks'>
        <motion.li 
        whileHover={{scale: 1.4}}
        className='webli'>
          <a href = "https://www.youtube.com/c/xolemusic">
            <AiFillYoutube />
          </a>
        </motion.li>
        <motion.li 
        whileHover={{scale: 1.4}}
        className='webli'>
          <a href = "https://open.spotify.com/artist/0k5vCy7OOIB6Cm3aNFRHS2">
            <BsSpotify />
          </a>
        </motion.li>
        <motion.li
        whileHover={{scale: 1.4}}
        className='webli'>
          <a href = "https://www.instagram.com/prodbyxole/">
            <AiFillInstagram />
          </a>
        </motion.li>
        <motion.li
        whileHover={{scale: 1.4}}
        className='webli'>
          <a href = "https://www.tiktok.com/@xolemusic">
            <FaTiktok />
          </a>
        </motion.li>
      </ul>
      <a href = '/' className='siteTitle'>
        <motion.img
        whileHover={{scale: 1.2}}
        initial={{scale: 0}}
        animate={{
            scale:1,
          }}
          transition={{ duration: 1.5 }}
           className='xoleHeader' src={XoleLetters} />
      </a>
      {isMobile ? 
      <MobileLinks />
     : 
      <ul className='webLinks'>
        <motion.li
        whileHover={{scale: 1.3}}
        className='webli'>
          <a href = "https://xolestore.com/">
            music
          </a>
        </motion.li>
        <motion.li
        whileHover={{scale: 1.3}}
        className='webli'>
          <a href = "https://xolestore.com/">
            store
          </a>
        </motion.li>
        <motion.li
        whileHover={{scale: 1.3}}
        className='webli'>
          <a href = "https://xolestore.com/">
            tour
          </a>
        </motion.li>
        <motion.li
        whileHover={{scale: 1.3}}
        className='webli'>
          <a href = "https://xolestore.com/">
            contact
          </a>
        </motion.li>
      </ul>
      }
      
    </nav>
    )
}
