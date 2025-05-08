import React from 'react'
import Navbar from '../components/Navbar'
import bgImage from '../../public/bg.png'
import Main from '../components/HomeMain'


const Home = () => {
  return (
    <div style={{ backgroundImage: `url(${bgImage})` }} className='bg-cover bg-center w-full min-h-screen'>
      <Navbar/>
      <Main/>
    </div>
  )
}

export default Home
