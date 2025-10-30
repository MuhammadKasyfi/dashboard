import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/header'
import Home from './routes/_index';
import { Route } from 'react-router';

function App() {

  return (
    <div className='flex flex-col mx-auto w-full'>
      <section className='min-h-screen flex flex-col'>
        <Header />
      </section>
    </div>
  )
}

export default App
