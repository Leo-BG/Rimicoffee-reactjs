import React from 'react'
import Autoplays from './Autoplays';
import "./Home.css";
import Product from './Product';


function Home() {
    return (
        <div className="home">
            <Autoplays />
            <div className="home__content">
                <div className="home__contentQuality">
                    <img src="https://cafe.net.vn/static/version1595910385/frontend/Trungnguyen/default/vi_VN/images/espresso-pot-glass-coffee-bottle.png" alt="" />
                    <span>Chất lượng cà phê đạt chuẩn toàn cầu</span>
                </div>
                <div className="home__contentQuality">
                    <img src="https://cafe.net.vn/static/version1595910385/frontend/Trungnguyen/default/vi_VN/images/van-truck-delivery-fast-service.png" alt="" />
                    <span>Giao hàng toàn quốc bảo đảm</span>
                </div>
                <div className="home__contentQuality">
                    <img src="https://cafe.net.vn/static/version1595910385/frontend/Trungnguyen/default/vi_VN/images/shield-protection-guard-insurance-money.png" alt="" />
                    <span>Thanh toán an toàn tuyệt đối</span>
                </div>
                <div className="home__contentQuality">
                    <img src="https://cafe.net.vn/static/version1595910385/frontend/Trungnguyen/default/vi_VN/images/handshake-collaboration-partnership.png" alt="" />
                    <span>Giá tốt dành cho đối tác mua số lượng lớn</span>
                </div>
            </div>
            <Product

                id="12213131"
                title="Máy pha cafe tự động Scott Slimissimo"
                price={`19.190.000 đ`}
                rating={5}
                image="https://cafe.net.vn/media/catalog/product/cache/2a6aec2d01a0d2ad56a66dbbd17cfbf5/6/0/6002302.jpg"
            />
        </div>
    )
}

export default Home
