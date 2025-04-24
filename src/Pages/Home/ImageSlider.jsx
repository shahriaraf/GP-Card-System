import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ImageSlider = () => {
    return (
        <div className="bg-gray-50">
             <h1 className='text-3xl  md:text-5xl text-center font-semibold mb-4 text-gray-900'>Trending Offers</h1>
             <p className='text-center text-lg md:text-xl font-medium text-gray-700 mb-10'>Recharge your prepaid account or pay bill of your postpaid account here.</p>
            <div className="max-w-2xs md:h-full md:max-w-4xl mx-auto py-20">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true, color: 'white' }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    className="rounded-2xl overflow-hidden shadow-lg"
                >
                    <SwiperSlide>
                        <img
                            src="https://www.cmgassets.com/s3fs-public/users/user12778/mygp-home-1.png"
                            alt="Slide 1"
                            className="w-full h-[500px] object-cover"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://cdn01da.grameenphone.com/sites/default/files/2024-07/thumb_inner_7.jpg"
                            alt="Slide 2"
                            className="w-full h-[500px] object-cover"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>

    );
};

export default ImageSlider;
