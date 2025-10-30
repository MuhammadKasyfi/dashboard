import React from 'react'
import Logo from './Logo'
import Nav from './Nav'

export default function Header() {
  return (
    <header className='flex sticky flex-wrap top-0 z-[20] w-full mx-auto items-center justify-between border-b border-gray-500 p-8'>
        <Logo />
        <Nav />
    </header>
  )
}
