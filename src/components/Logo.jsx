import React from 'react'
import uitmLogo from '../assets/uitm.png'

export default function Logo() {
  return (
    <div className='logo h-16 w-16'>
        <img src={uitmLogo} alt='logo'></img>
    </div>
  )
}