import React from 'react';
import SwiperCore, { Autoplay, Controller, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './Autoplays.css';


SwiperCore.use([Navigation, Pagination, Controller, Autoplay]);

function Autoplays() {


    const slides = [];
    for (let i = 0; i < 4; i++) {

        slides.push(
            <SwiperSlide key={`slide-${i}`} tag="li">
                <img
                    src={`/img/${i + 1}.jpg`}
                    style={{ listStyle: 'none' }}
                    alt={`Slide ${i}`}
                    className="auto__img"
                />
            </SwiperSlide>
        );

    }

    const params = {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
    }

    return (

        <Swiper
            {...params}
            id="main"
            tag="section"
            wrapperTag="ul"
            loop={true}
            navigation
            pagination
            slidesPerView={1}
        >

            {slides}
        </Swiper>
    );
}
export default Autoplays;
