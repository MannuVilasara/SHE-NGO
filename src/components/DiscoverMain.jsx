import React from 'react';
import discover from '../../public/discover.png';
import gif1 from "../../public/gif1.gif";
import gif2 from "../../public/gif2.gif";
import gif3 from "../../public/gif3.gif";
import Slider from "react-slick";
import Members from '../../src/Members.json';

const homeMain = () => {
  /*var settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };*/


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
      <div className='w-full h-[50vh] mt-14 px-10 flex flex-col gap-6 items-center justify-center'>
        <div>
          <h5>
            Project She was founded by Sanskriti Mohan and is a dedicated group of changemakers, activists, educators, and volunteers united by a common purpose — to uplift and empower women across all sections of society. We believe that every woman has the right to dream, achieve, and lead a life of respect and opportunity.
          </h5>
        </div>
        <div className='bg-green-400 w-[45%] lg:w-[25%] h-[60%] lg:h-[100%] flex-col items-center justify-center gap-10'>
          <h1 className='w-[100%] h-[20%] flex items-center justify-center text-2xl text-[#5e0000] montagu-slab font-bold'>
            OUR CORE MEMBERS
          </h1>
          <div  className='w-[100%] h-[80%] bg-red-400 flex flex-col items-center justify-center gap-6'>
                <div className='h-20 w-20 rounded-full bg-white'>
                  <img  className='h-full w-full rounded-full object-cover' />
                </div>
                <h4>NAME</h4>
                <h5>I believe in women’s rights, raising awareness and making a real difference</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default homeMain;
