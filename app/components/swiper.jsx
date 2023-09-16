"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./swiper.css";
// import Swiper core and required modules
import {
  Pagination,
  A11y,
  Autoplay,
  EffectCards,
  EffectCoverflow,
  Navigation
} from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import slidesData from "../data/swiperdata";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

export default function SwiperFunc() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1015); // Adjust the breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const slides = () => {
    return slidesData.map((slide) => {
      return (
        <SwiperSlide key={slide.id}>
          {!isSmallScreen && (
            <div className="swiper-container">
            <Image
              src={slide.images.light}
              alt="Picture of the author"
              width={200}
              className="rounded-2xl border-4 border-black"
            />
            <div className="flex flex-col items-center">
              <h1 className="pb-16 text-center text-5xl text-gray-500 font-bold">
                {slide.title} <span className="text-teal-300 ml-5">.</span>
              </h1>
              <p className="flex-1 px-5 text-xl text-gray-500 ">{slide.description}</p>
              <a href={slide.link} target="_blank">
                <button className="bg-black hover:bg-gray-700 text-white font-bold py-3 px-4 mt-5 rounded-2xl">
                  View Project
                </button>
              </a>
            </div>
          </div>
          )}
          {isSmallScreen && (
            <div className="swiper-container">
            <Image
              src={slide.images.light}
              alt="Picture of the author"
              width={150}
              className="rounded-2xl border-4 border-black"
            />
            <div className="flex flex-col items-center">
              <h1 className="pb-16 text-center text-sm">
                {slide.title} <span className="text-teal-300 ml-5">.</span>
              </h1>
              <p className="flex-1 px-5">{slide.description}</p>
              <a href={slide.link} target="_blank" className="underline pt-5 text-gray-700">
                View Project
              </a>
            </div>
          </div>
          )}
        </SwiperSlide>
      );
    });
  };

  return (
    <Swiper
      // install Swiper modules
      modules={[
        Pagination,
        A11y,
        Autoplay,
        EffectCards,
        EffectCoverflow,
        Navigation,
      ]}
      spaceBetween={0}
      slidesPerView={1}
      draggable={true}
      loop={true}
      navigation={true}
      grabCursor={true}
      pagination={{
        dynamicBullets: true,
      }}
      autoplay={{ delay: 7000, disableOnInteraction: false }}
      effect={"coverflow"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      style={{
        "--swiper-pagination-color": "#000",
        "--swiper-pagination-bullet-inactive-color": "#999999",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-size": "10px",
        "--swiper-pagination-bullet-horizontal-gap": "6px",
        "--swiper-navigation-color": "#000",
        "--swiper-navigation-size": "15px",
        "--swiper-effect-cards-next": "",

        
      }}
    >
      {slides()}
    </Swiper>
  );
}
