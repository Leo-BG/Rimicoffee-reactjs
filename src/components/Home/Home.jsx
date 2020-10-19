import React from 'react'
import Autoplays from './Autoplays';
import "./Home.css";
import Product from './Product';


function Home() {
    return (
        <div className="home">
            <div className="home__autoplays">
                <Autoplays />
            </div>

            <div className="home__row">
                <span><h1>Sản phẩm khuyến mãi</h1></span>
                <Product
                    className="product"
                    id="1"
                    image="https://cafe.net.vn/media/catalog/product/cache/2a6aec2d01a0d2ad56a66dbbd17cfbf5/c/o/com0055_2.jpg"
                    title="Combo máy pha cà phê BFC 1 group"
                    price={96000000}
                    rating={5}
                />
                <Product
                    className="product"
                    id="2"
                    image="https://cafe.net.vn/media/catalog/product/cache/2a6aec2d01a0d2ad56a66dbbd17cfbf5/c/o/combo_9.jpg"
                    title="Combo máy pha cafe Conti 1G"
                    price={54700000}
                    rating={5}
                />

            </div>
            <div className="home__row">
                <h1>Sản phẩm mới về</h1>
                <Product
                    className="product"
                    id="12213131"
                    image="https://cafe.net.vn/media/catalog/product/cache/2a6aec2d01a0d2ad56a66dbbd17cfbf5/6/0/6002302.jpg"
                    title="Máy pha cafe tự động Scott Slimissimo"
                    price={96000000}
                    rating={5}
                />
                <Product
                    className="product"
                    id="12213131"
                    image="https://cafe.net.vn/media/catalog/product/cache/2a6aec2d01a0d2ad56a66dbbd17cfbf5/6/0/6001709.jpg"
                    title="Máy pha cà phê BFC AVIATOR 2G/14/EL"
                    price={332000000}
                    rating={5}
                />
                <Product
                    className="product"
                    id="12213131"
                    image="https://cafe.net.vn/media/catalog/product/cache/2a6aec2d01a0d2ad56a66dbbd17cfbf5/6/0/6001858.jpg"
                    title="Máy pha CF viên nén LegendEra I - TC01 - đen"
                    price={3000000}
                    rating={5}
                />
                <Product
                    className="product"
                    id="12213131"
                    image="https://cafe.net.vn/media/catalog/product/cache/2a6aec2d01a0d2ad56a66dbbd17cfbf5/6/0/6001984.jpg"
                    title="Máy xay cà phê Fiorenzato F4 Eco"
                    price={17000000}
                    rating={5}
                />
            </div>
            <div className="home__row">
                <h1>Sản phẩm bán chạy nhất</h1>
                <Product
                    className="product"
                    id="12213131"
                    image="https://cafe.net.vn/media/catalog/product/cache/2a6aec2d01a0d2ad56a66dbbd17cfbf5/6/0/6000401.jpg"
                    title="JTC OmniBlend V TM-800A - Máy làm cà phê đá xay"
                    price={4700000}
                    rating={5}
                />
                <Product
                    className="product"
                    id="12213131"
                    image="https://cafe.net.vn/media/catalog/product/cache/2a6aec2d01a0d2ad56a66dbbd17cfbf5/5/0/5000124_1_4.jpg"
                    title="Cà phê SÁNG TẠO 8 (Hộp)"
                    price={345634}
                    rating={5}
                />
                <Product
                    className="product"
                    id="12213131"
                    image="https://cafe.net.vn/media/catalog/product/cache/2a6aec2d01a0d2ad56a66dbbd17cfbf5/5/0/5000519.jpg"
                    title="Cà phê LEGEND"
                    price={884312}
                    rating={5}
                />
                <Product
                    className="product"
                    id="12213131"
                    image="https://cafe.net.vn/media/catalog/product/cache/2a6aec2d01a0d2ad56a66dbbd17cfbf5/6/0/6001053_-_cordial_peach_iced_tea_0.jpg"
                    title="Bickford's  syrup trà đào 750ml"
                    price={126000}
                    rating={5}
                />

            </div>
        </div>
    )
}

export default Home
