import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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
  return (
    <div className="bg-gradient-to-tr from-gray-50 via-[#edf7fc] to-[#84cdee] pt-40 h-[90vh]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={`w-full h-full flex items-center justify-center ${slide.bg}`}>
              <div className="text-center px-6">
                <h1 className="text-4xl text-gray-900 md:text-6xl font-bold mb-4">{slide.title}</h1>
                <p className="text-lg text-gray-700 md:text-2xl">{slide.subtitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
