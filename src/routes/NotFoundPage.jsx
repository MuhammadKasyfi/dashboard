import React from 'react'
import { Link } from 'react-router'

export default function NotFoundPage() {
  return (
    <>
      <div className='flex flex-col mx-auto items-center justify-center h-screen'>
        <h1 className='text-lg md:text-2xl sm:text-3xl font-bold mb-4'>
            <span className='text-slate-700 mx-2'>This Page doesn't Exist!</span>
            <i className="fa-solid fa-x text-red-700"></i>
        </h1>
        <Link to="/">
            <button className='text-sm md:text-base sm:text-lg cursor-pointer border-2 border-slate-700 rounded-md px-4 py-2 hover:bg-slate-700 hover:text-white transition'>
                Go back Home
            </button>
        </Link>
      </div>
    </>
  )
}
