import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';       

const slides = [
  {
    image: '/images/slide1.jpg',
    alt: 'Yoga Class 1',
  },
  {
    image: '/images/slide2.jpg',
    alt: 'Peaceful Meditation',
  },
  {
    image: '/images/slide3.jpg',
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
        className="h-[60vh] md:h-[500px]"
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
