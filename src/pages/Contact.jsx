import React from 'react'
import Navbar from '../components/Navbar'
import bgImage from '../../public/bg.png'
import Form from '../components/ContactForm'


const Contact = () => {
  return (
    <div style={{ backgroundImage: `url(${bgImage})` }} className='bg-cover bg-center w-full min-h-screen'>
      <Navbar/>
      <Form/>
    </div>
  )
}

export default Contact
