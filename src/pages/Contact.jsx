import React from 'react'
import Navbar from '../components/Navbar'
import bgImage from '../../public/bg.png'

const Contact = () => {
  return (
    <div style={{ backgroundImage: `url(${bgImage})` }} className='bg-cover bg-center w-full min-h-screen'>
      <Navbar/>
    </div>
  )
}

export default Contact
