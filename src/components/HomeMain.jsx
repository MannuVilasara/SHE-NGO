import React from 'react';
import data from '../data/HomeData.json';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Import slick-carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Import slick-carousel theme CSS

const homeMain = () => {
  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
  };

  return (
    <div>
      <div className='w-full h-screen overflow-hidden flex items-center justify-center opacity-100 pt-30'>
        
        <div style={{ backgroundImage: `url(https://images.unsplash.com/photo-1638768505959-6fc9d8c86c4b?w=600&auto=format&fit=crop&q=60)` }}
          className='w-[90%] h-[90%] bg-cover bg-center no-repeat '>
          <div className='w-full h-full backdrop-blur-sm flex flex-col justify-end p-2 md:p-10 pb-4'>
            <h1 className='text-black text-4xl montagu-slab font-bold mb-4 ml-4 z-90'>
              child rights
            </h1>
            <p className='text-white bg-black px-4 py-4 md:px-10 md:py-8 rounded-3xl montagu-slab tracking-tight leading-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, perspiciatis, voluptatum illum sed mollitia incidunt voluptates tempora, ipsum odio vel dolorum doloribus? Neque hic in voluptatem possimus vitae. Distinctio, maiores.
            </p>
          </div>
        </div>
    
        
      </div>
    </div>
  );
};

export default homeMain;