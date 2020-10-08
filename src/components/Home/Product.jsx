import React from 'react'
import './Product.css';

function Products({ id, title, image, price, rating }) {
    return (
        <div className="product">
            <p>{title}</p>
            <p className="product__price">
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {
                    Array(rating)
                        .fill()
                        .map((_) => (
                            <p>⭐</p>
                        ))
                }
            </div>
        </div>
    )
}

export default Products
