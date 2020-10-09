import React from 'react'
import Autoplays from './Autoplays';
import "./Home.css";
import Product from './Product';


function Home() {
    return (
        <div className="home">
            <Autoplays className="home_auto" />
            <Product
                className="product"
                id="12213131"
                image="https://cafe.net.vn/media/catalog/product/cache/2a6aec2d01a0d2ad56a66dbbd17cfbf5/6/0/6002302.jpg"
                title="Máy pha cafe tự động Scott Slimissimo"
                price={`19.190.000 đ`}
                rating={5}
            />
        </div>
    )
}

export default Home
