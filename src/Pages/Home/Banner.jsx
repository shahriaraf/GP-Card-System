import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Banner.css'; // For custom swiper arrows
import { useLayoutEffect } from 'react';
import gsap from 'gsap';

const slides = [
  {
    title: "Welcome to MyApp",
    subtitle: "Discover something awesome!",
  },
  {
    title: "Explore Our Projects",
    subtitle: "See what we've built",
  },
  {
    title: "Join the Community",
    subtitle: "Connect with like-minded people",
  },
  {
    title: "Let's Build Together",
    subtitle: "Start your journey now",
  },
];

const Banner = () => {

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".img",
        { y: 30 },
        {
          y: 0,
          duration: 0.7,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        }
      );
    });

    return () => ctx.revert(); // correctly placed revert
  }, []);

  return (
    <div className="bg-gradient-to-tr from-gray-50 via-[#edf7fc] to-[#84cdee] pt-20 md:pt-24">
      
      {/* Top Section with Animated Image */}
      <div className="flex items-center gap-10 pl-6 sm:pl-20 bg-sky-200">
        <img
          src="https://i.ibb.co.com/rRJf2Z7p/atm-card-removebg-preview.png"
          alt="ATM Card"
          className="h-[230px] img object-contain"
        />
        <h1 className="text-2xl sm:text-4xl font-semibold text-gray-800 leading-snug">
          Unlock your card to experience <br /> the power of card
        </h1>
      </div>

      {/* Swiper Slider */}
      <div className="h-[60vh] sm:h-[50vh] md:h-[60vh]">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination, Navigation]}
          className="h-full swiper-custom-nav"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full flex items-center justify-center px-4 sm:px-8">
                <div className="text-center max-w-2xl">
                  <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 font-bold mb-4 leading-snug">
                    {slide.title}
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-gray-700">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
