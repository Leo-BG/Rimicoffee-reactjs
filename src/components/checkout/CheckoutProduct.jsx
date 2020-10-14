import React from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from '../Home/StateProvider';
import CurrencyFormat from 'react-currency-format';

function CheckoutProduct({ id, title, image, price, rating }) {
    const [{ cart }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        })
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <strong><CurrencyFormat
                        decimalScale={3}
                        value={price}
                        displayType={"text"}
                        thousandSpacing={3}
                        thousandSeparator={true}
                        suffix={"đ"} />
                    </strong>
                </p>
                <div className="CheckoutProduct__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_, i) => (
                                <p>⭐</p>
                            ))
                    }
                </div>
                <button onClick={removeFromBasket}>Xóa</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
