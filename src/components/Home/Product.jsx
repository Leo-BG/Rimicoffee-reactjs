import React from 'react'
import CurrencyFormat from 'react-currency-format';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {
    const [{ cart }, dispatch] = useStateValue();

    const addToCart = () => {
        //add item
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                key: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    };

    return (

        <div className="product">
            <img src={image} alt="" />
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <strong><CurrencyFormat
                        decimalScale={3}
                        value={price}
                        displayType={"text"}
                        thousandSpacing={3}
                        thousandSeparator={true}
                        suffix={"đ"} />
                    </strong>
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
            <button onClick={addToCart}>Mua hàng</button>
        </div>
    )
}

export default Product;
