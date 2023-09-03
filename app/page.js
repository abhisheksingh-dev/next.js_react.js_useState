'use client'
import React from 'react'
import { useState } from 'react'

const Home = () => {
  const [UserState, setUserState] = useState('Idle')

  const idleOntap = () => {
    setUserState('Idle')
  }

  const loginOnTap = () => {
    setUserState('Logged In')
  }

  const logOutOnTap = () => {
    setUserState('Logged Out')
  }

  return (
    <section className='flex flex-col'>
      <p>{UserState}</p>
      <button
        className='rounded bg-green-600 pl-2 pr-2 pt-1 pb-1 text-white w-[80px]'
        onClick={idleOntap}
      >
        Idle
      </button>
      <button
        className='rounded bg-green-600 pl-2 pr-2 pt-1 pb-1 text-white w-[80px]'
        onClick={loginOnTap}
      >
        Login
      </button>
      <button
        className='rounded bg-red-500 pl-2 pr-2 pt-1 pb-1 text-white w-[80px]'
        onClick={logOutOnTap}
      >
        Logout
      </button>
    </section>
  )
}

export default Home
