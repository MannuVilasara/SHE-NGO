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
      <div className='w-full h-screen overflow-hidden flex items-center justify-center opacity-100'>
        <Slider {...settings}>
          {data.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${item.image})`,
              }}
              className='w-[90%] h-[90%] bg-cover bg-center no-repeat'
            >
              <div className='w-full h-full backdrop-blur-sm flex flex-col justify-end p-10'>
                <h1 className='text-black text-4xl montagu-slab font-bold mb-4'>
                  {item.title}
                </h1>
                <p className='text-white bg-black px-10 py-8 rounded-lg montagu-slab tracking-tight'>
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