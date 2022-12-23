
import * as React from 'react';
import '../index.css'
import '../styles.css'

//components
import MobileHeader from './MobileHeader'

//other
import {motion} from 'framer-motion'
import { isMobile, browserName } from "react-device-detect";
import { Link } from 'react-router-dom';

//img


//icons
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTiktok} from 'react-icons/fa'
import {BsSpotify} from 'react-icons/bs'



export default function Header() {
    return (
  <>
  {isMobile  ? 
      <MobileHeader />
    : 
    <nav className='navWeb'>
      <ul className='socialLinks'>
        <motion.li 
        whileHover={{scale: 1.6}}
        className='webli'>
          <a target="_blank" href = "https://www.youtube.com/c/xolemusic">
            <AiFillYoutube size={21}/>
          </a>
        </motion.li>
        <motion.li 
        whileHover={{scale: 1.6}}
        className='webli'>
          <a target="_blank" href = "https://open.spotify.com/artist/0k5vCy7OOIB6Cm3aNFRHS2">
            <BsSpotify size={21}/>
          </a>
        </motion.li>
        <motion.li
        whileHover={{scale: 1.6}}
        className='webli'>
          <a target="_blank" href = "https://www.instagram.com/prodbyxole/">
            <AiFillInstagram size={21}/>
          </a>
        </motion.li>
        <motion.li
        whileHover={{scale: 1.6}}
        className='webli'>
          <a target="_blank" href = "https://www.tiktok.com/@xolemusic">
            <FaTiktok size={21}/>
          </a>
        </motion.li>
      </ul>
      
      
      <ul className='webLinks'>
        <motion.li
        whileHover={{scale: 1.3}}
        className='webli'>
          <Link to = '/music'>
            music
          </Link>
        </motion.li>
        <motion.li
        whileHover={{scale: 1.3}}
        className='webli'>
          <Link to = '/merch'>
            merch
          </Link>
        </motion.li>
        <motion.li
        whileHover={{scale: 1.3}}
        className='webli'>
          <Link to = '/tour'>
            tour
          </Link>
        </motion.li>
        <motion.li
        whileHover={{scale: 1.3}}
        className='webli'>
          <Link to = '/contact'>
            contact
          </Link>
        </motion.li>
      </ul>
      
    </nav>
    }
  </>
    )
}
