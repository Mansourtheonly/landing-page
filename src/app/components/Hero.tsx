"use client"; // Force this component to run on the client side

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'linear',
  };

  const images = [
    '/aerial-view-apartment-buildings.jpg',
    '/way-white-house.jpg',
    '/modern-country-houses-construction.jpg',
  ];

  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 w-full h-full">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <div
                className="w-full h-[80vh] bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Text Content */}
      <div className="relative text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold">ابحث عن منزل أحلامك في الجزائر</h1>
        <p className="mt-4 text-lg md:text-xl">اكتشف أفضل العقارات للبيع والإيجار</p>
        <button className="mt-6 bg-primary text-white py-2 px-6 rounded hover:bg-secondary transition">
          اكتشف المزيد
        </button>
      </div>
    </section>
  );
};

export default Hero;
