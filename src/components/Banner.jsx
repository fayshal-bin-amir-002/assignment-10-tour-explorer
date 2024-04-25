import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import slide1 from "./slides/Slide1";
import slide2 from "./slides/Slide2";
import slide3 from "./slides/Slide3";
import slide4 from "./slides/Slide4";
import slide5 from "./slides/Slide5";

const Banner = () => {

    const slides = [slide1, slide2, slide3, slide4, slide5];

    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    slides.map((slide, i) => <SwiperSlide key={i}>{slide}</SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Banner;