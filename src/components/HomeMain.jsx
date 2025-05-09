import React from 'react';
import data from '../data/HomeData.json';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Import slick-carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Import slick-carousel theme CSS

const homeMain = () => {
  const settings = {
    dots: true,
    arrows: true,
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
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div>
      <div className='w-full h-screen overflow-hidden flex  items-center justify-center opacity-100 pt-40 '>
        <Slider {...settings} className='w-[85%] md:w-[90%] h-[95%] bg-cover px-4'>
        {data.map((item, index) => (
          <div
            key={index}
            className="relative w-full h-[68vh] flex items-end justify-start overflow-hidden cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="relative w-full h-full bg-black/40 flex flex-col justify-end p-2 md:p-10 pb-4 z-10">
              <h1 className="text-white text-4xl montagu-slab font-bold mb-4 ml-4 uppercase">
                {item.title}
              </h1>
              <p className="text-white bg-black/80 px-4 py-4 md:px-10 md:py-8 rounded-3xl montagu-slab tracking-tighter md:tracking-tight leading-[20px] text-lg">
                {item.description}
              </p>
            </div>
          </div>
        ))}
        </Slider>
      </div>
    </div>
  );
};

export default homeMain;