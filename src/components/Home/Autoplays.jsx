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
        <div className="autolays">
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
            <div className="auto__content">
                <div className="auto__contentQuality">
                    <img src="https://cafe.net.vn/static/version1595910385/frontend/Trungnguyen/default/vi_VN/images/espresso-pot-glass-coffee-bottle.png" alt="" />
                    <span>Chất lượng cà phê đạt chuẩn toàn cầu</span>
                </div>
                <div className="auto__contentQuality">
                    <img src="https://cafe.net.vn/static/version1595910385/frontend/Trungnguyen/default/vi_VN/images/van-truck-delivery-fast-service.png" alt="" />
                    <span>Giao hàng toàn quốc bảo đảm</span>
                </div>
                <div className="auto__contentQuality">
                    <img src="https://cafe.net.vn/static/version1595910385/frontend/Trungnguyen/default/vi_VN/images/shield-protection-guard-insurance-money.png" alt="" />
                    <span>Thanh toán an toàn tuyệt đối</span>
                </div>
                <div className="auto__contentQuality">
                    <img src="https://cafe.net.vn/static/version1595910385/frontend/Trungnguyen/default/vi_VN/images/handshake-collaboration-partnership.png" alt="" />
                    <span>Giá tốt dành cho đối tác mua số lượng lớn</span>
                </div>
            </div>
        </div>
    );
}
export default Autoplays;
