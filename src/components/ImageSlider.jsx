import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import img1 from "../assets/slide1.jpg";    
import img2 from "../assets/slide2.jpg";    
import img3 from "../assets/slide3.jpg";    

const slides = [
  {
    image: img1,
    alt: 'Yoga Class 1',
  },
  {
    image: img2,
    alt: 'Peaceful Meditation',
  },
  {
    image: img3,
    alt: 'Yoga Teacher Training',
  },
];

const ImageSlider = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="h-[500px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
