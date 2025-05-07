import React from 'react'
import discover from '../../public/discover.png'
import gif1 from "../../public/gif1.gif"
import gif2 from "../../public/gif2.gif"
import gif3 from "../../public/gif3.gif"


const homeMain = () => {
  return (
    <div className='flex flex-col gap-10 items-center justfiy-center pb-20 w-full min-h-screen'>
      <div className='flex flex-col items-center px-6  justify-center gap-12 md:gap-6 lg:gap-4'>
      <div className='md:w-2/3  md:h-1/2'>
      <img src={discover} className='home-bg brightness-200 z-1 bg-cover bg-center '/>
      </div>
      <p className='lg:w-1/2 md:w-2/3 text-[#5e0000] brightness-300 montagu-slab text-xl backdrop-blur-3xl'>To create a society where every woman is empowered to live with dignity, equality, and freedom. We envision a world where women lead, inspire, and thrive without limitations.</p>
      </div>
      <div className='flex items-center justify-center flex-col gap-12 lg:gap-6'>
        <div>
          <h1 className='text-[#5e0000] montagu-slab text-3xl brightness-200 font-bold'>OUR MISSIONS</h1>
        </div>
        <div className='flex flex-col lg:flex-row items-center  gap-20 justify-center '>
          <div className='h-70 w-80 md:w-100 lg:w-60 bg-red-400 bg-cover no-repeat bg-center cursor-pointer relative'>
            <img className='gif3 w-[100%] h-[100%]'  src={gif3}/>
            {/*<div className='upper-gif3 w-[100%] h-[100%] bg-[#5e0000] absolute top-0 hidden'></div>*/}
            <h2 className='text-center w-[100%] h-[20%] bg-[#5e0000] text-black montagu-slab text-xl flex items-center justify-center py-2 '>EDUCATION</h2>
          </div>
          <div className='h-70 w-80 md:w-100 lg:w-60 bg-red-400 cursor-pointer'>
          <img className='w-[100%] h-[100%]' src={gif2}/>
          <h2 className='text-center w-[100%] h-[20%] bg-[#5e0000] text-black montagu-slab text-xl flex items-center justify-center py-2 '>SKILLS AND RIGHTS</h2>
          </div>
          <div className='h-70 w-80 md:w-100 lg:w-60 bg-red-400 cursor-pointer'>
          <img className='w-[100%] h-[100%]' src={gif1}/>
          <h2 className='text-center w-[100%] h-[20%] bg-[#5e0000] text-black montagu-slab text-xl flex items-center justify-center py-2'>SKILL DEVELOPMENT</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default homeMain
