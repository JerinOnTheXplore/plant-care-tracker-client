import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    title: 'Bonsai Bliss',
    subtitle: 'Nurture your plants with love 🌿',
    image: 'https://i.ibb.co/hRn6bt6D/snake-plant-colorful-pot.jpg',
  },
  {
    title: 'Grow Green, Live Clean',
    subtitle: 'Track, care, and thrive together 🌱',
    image: 'https://i.ibb.co/FLxr0Qmn/pothos-plant-pot-bench.jpg',
  },
  {
    title: "Your Plant's Best Friend",
    subtitle: 'Smart care reminders & plant profiles 🌼',
    image: 'https://i.ibb.co/JF7rbHrM/beautiful-biophilic-scene.jpg',
  },
  {
    title: 'Hydration Matters',
    subtitle: 'Never forget watering again 💧',
    image: 'https://i.ibb.co/s9gXvwp2/water-drops-blade.jpg',
  },
  {
    title: 'Light Up Their Lives',
    subtitle: 'Track sunlight needs 🌞',
    image: 'https://i.ibb.co/hFYYSScr/view-palm-tree-species-with-green-foliage.jpg',
  },
  {
    title: 'Succulent Sanctuary',
    subtitle: 'Perfect care tips for dry climate plants 🌵',
    image: 'https://i.ibb.co/twxfHVWd/close-up-woman-watering-potted-plant-hold-by-his-husband.jpg',
  },
  {
    title: 'Tropical Touch',
    subtitle: 'Keep humidity-loving plants thriving 🌴',
    image: 'https://i.ibb.co/YF2JNpSH/banner-Image.jpg',
  },
  {
    title: 'Leafy Legends',
    subtitle: 'Identify and track your favorite species 🌿',
    image: 'https://i.ibb.co/LzR8Y54g/beautiful-eucalyptus-arrangement.jpg',
  },
];

const Hero = () => {
  return (
    <div className="relative">
      <Swiper
      modules={[Pagination, Autoplay, EffectFade]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      loop effect="fade"
      className="w-full h-[60vh] md:h-[90vh]">
      {slides.map((slide, id) => (
      <SwiperSlide key={id}>
      <div
        className="w-full h-full bg-cover bg-center flex items-center justify-center text-white relative"
        style={{ backgroundImage: `url(${slide.image})`}}>
        <div className="absolute inset-0 bg-gradient-to-r from-[#556B2F]/80 to-[#8F9779]/50"></div>
        <div className="z-60 px-4 sm:px-6 md:px-10 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif drop-shadow-lg">
        {slide.title}
        </h1>
        <p className="mt-3 text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto drop-shadow">
        {slide.subtitle}</p>
        </div>
      </div>
      </SwiperSlide>
            ))}
    </Swiper>
    </div>
  );
};

export default Hero;
