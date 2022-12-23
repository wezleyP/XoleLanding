
import React, {useState} from "react";

import '../mobile.css'

//components

//other
import { Link } from 'react-router-dom';
//img


//icons
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTiktok} from 'react-icons/fa'
import {BsSpotify} from 'react-icons/bs'

const MobileHeader = () => {

    // to change burger classes
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return(
        <div className="mobileMainDiv">
            <div className="navMobile">
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
            </div>

            <div className={menu_class}>
              <ul>
                <li>
                  <h1>
                    <Link to='/' className='siteTitle'>
                    home
                   </Link>
                  </h1>
                </li>
                <li>
                  <h1>
                    <Link to = '/music'>
                    music
                    </Link>
                  </h1>
                </li>
                <li>
                  <h1>
                    <Link to = '/merch'>
                    merch
                    </Link>
                  </h1>
                </li>
                <li>
                  <h1>
                    <Link to = '/tour'>
                    tour
                    </Link>
                  </h1>
                </li>
                <li>
                  <h1>
                    <Link to = '/contact'>
                    contact
                    </Link>
                  </h1>
                </li>
              </ul>
            </div>
        </div>
    )
}

export default MobileHeader