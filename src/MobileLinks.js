
import * as React from 'react';
import './mobile.css'

export default function Header() {
    return (
    <div className='mobileLinks'>
      <ul className='mobileul'>
      <li className='mobileli'>
        <a className='mobilea' href = "https://xolestore.com/">
          music
        </a>
      </li>
      <li className='mobileli'>
        <a className='mobilea' href = "https://xolestore.com/">
          store
        </a>
      </li>
      <li className='mobileli'>
        <a className='mobilea' href = "https://xolestore.com/">
          tour
        </a>
      </li>
      <li className='mobileli'>
        <a className='mobilea' href = "https://xolestore.com/">
          contact
        </a>
      </li>
      </ul>
    </div>
    )
}