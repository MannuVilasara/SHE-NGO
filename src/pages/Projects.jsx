import React from 'react'
import Navbar from '../components/Navbar'
import bgImage from '../../public/bg.png'

const Projects = () => {
  return (
    <div style={{ backgroundImage: `url(${bgImage})` }} className='bg-cover bg-center w-full min-h-screen'>
      <Navbar/>
    </div>
  )
}

export default Projects
