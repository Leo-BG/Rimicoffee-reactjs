import React from 'react';
import { useStateValue } from '../Home/StateProvider';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const [{ cart }] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://payment.ueh.edu.vn/Upload/TrangChu/banner_160201094605.jpg" alt="" />
                {cart?.length === 0 ? (
                    <div>
                        <h2>Giỏ hàng của bạn trống</h2>
                    </div>
                ) : (
                        <div>
                            <h2 className="checkout__title">Đây là giỏ hàng của bạn</h2>
                            {cart?.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}

                        </div>
                    )}
            </div>
            {cart.length > 0 && (
                <div className="checkout__right">

                    <Subtotal />
                </div>
            )}

        </div>

    )
}

export default Checkout
