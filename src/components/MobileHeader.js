
import * as React from 'react';
import { Link } from 'react-router-dom';
import '../mobile.css'

import {GiHamburgerMenu} from 'react-icons/gi'
export default function MobileHeader() {
    return (
    
    <div className='mobileNav'>
     
      <div>
        <GiHamburgerMenu size={28}/>
      </div>
      
    </div>
   
    )
}