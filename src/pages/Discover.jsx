import React from 'react'
import Navbar from '../components/Navbar'
import bgImage from '../../public/bg.png'
import HomeMain from '../components/homeMain'


const Discover = () => {
  return (
    <div style={{ backgroundImage: `url(${bgImage})` }} className='bg-cover bg-center w-full min-h-screen'>
      <Navbar/>
      <HomeMain/>
    </div>
  )
}

export default Discover
