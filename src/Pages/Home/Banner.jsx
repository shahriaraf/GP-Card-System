import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Banner.css';
import { useLayoutEffect } from 'react';
import gsap from 'gsap';

const slides = [
  {
    title: "Welcome to GP Card",
    subtitle: `Experience the future of digital convenience with GP Card. Manage, shop, and explore seamlessly all in one place.`,
    image: "https://i.ibb.co.com/p64Hc6Hm/grameen-add.png",
  },
  {
    title: "Explore Our Services",
    subtitle: `From mobile recharges to exclusive deals, discover everything GP Card has to offer.`,
    image: "https://i.ibb.co.com/LjK0T5s/109-Tk-1060x764.webp",
  },
  {
    title: "Join the Community",
    subtitle: `Be part of a growing network of smart users. Share, connect, and unlock exclusive benefits.`,
    image: "https://i.ibb.co.com/67TKhFRq/0c89ff110711549-Y3-Jvc-Cwx-NDAw-LDEw-OTUs-MCww.png",
  },
];

const Banner = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".img",
        { y: 10 },
        {
          y: 0,
          duration: 0.7,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-gradient-to-tr from-gray-50 via-[#bee9ff] to-[#3fc1fd] pt-20 md:pt-24 relative overflow-hidden">

      {/* Floating Animated Image */}
      <img
        src="https://i.ibb.co.com/rRJf2Z7p/atm-card-removebg-preview.png"
        alt="ATM Card"
        className="img object-contain drop-shadow-lg absolute mt-5 md:mt-0 top-6 left-4 sm:top-10 sm:left-10 h-20 sm:h-28 md:h-36 lg:h-48 z-10"
      />

      {/* Swiper Section */}
      <div className="h-auto min-h-[80vh] flex items-center">
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
          className="w-full swiper-custom-nav"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="w-full px-4 sm:px-8 py-8 md:pt-20 flex flex-col-reverse lg:flex-row items-center justify-evenly gap-10 lg:gap-16 max-w-[1400px] mx-auto">
                
                {/* Text Content */}
                <div className="text-center lg:text-left max-w-xl">
                  <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-gray-700">
                    {slide.subtitle}
                  </p>
                </div>

                {/* Image Content */}
                <div className="w-full max-w-[350px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[550px]">
                  <div className="rounded-full bg-[#47bbfa] flex items-center justify-center p-4 shadow-xl">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      loading="eager"
                      className="w-full object-cover rounded-full drop-shadow-xl"
                    />
                  </div>
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
