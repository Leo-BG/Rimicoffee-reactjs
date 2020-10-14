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
                <Product
                    className="product"
                    id="12213131"
                    image="https://cafe.net.vn/media/catalog/product/cache/2a6aec2d01a0d2ad56a66dbbd17cfbf5/c/o/com0055_2.jpg"
                    title="Combo máy pha cà phê BFC 1 group"
                    price={96000000}
                    rating={5}
                />
                <Product
                    className="product"
                    id="12213131"
                    image="https://cafe.net.vn/media/catalog/product/cache/2a6aec2d01a0d2ad56a66dbbd17cfbf5/6/0/6002302.jpg"
                    title="Máy pha cafe tự động Scott Slimissimo"
                    price={96000000}
                    rating={5}
                />

            </div>
            <div className="home__row">
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
                    image="https://cafe.net.vn/media/catalog/product/cache/2a6aec2d01a0d2ad56a66dbbd17cfbf5/6/0/6002302.jpg"
                    title="Máy pha cafe tự động Scott Slimissimo"
                    price={96000000}
                    rating={5}
                />
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
                    image="https://cafe.net.vn/media/catalog/product/cache/2a6aec2d01a0d2ad56a66dbbd17cfbf5/6/0/6002302.jpg"
                    title="Máy pha cafe tự động Scott Slimissimo"
                    price={96000000}
                    rating={5}
                />

            </div>
        </div>
    )
}

export default Home
