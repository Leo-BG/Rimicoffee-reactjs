import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../Home/StateProvider';
import { getCartToTal } from '../Home/reducer';

function Subtotal() {
    const [{ cart }] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Tổng({cart.length} sản phẩm): <strong>{`${value}`}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> Chọn tất cả sản phẩm
            </small>
                    </>
                )}
                decimalScale={3}
                value={getCartToTal(cart)}
                displayType={"text"}
                thousandSpacing={3}
                thousandSeparator={true}
                suffix={"đ"}
            />
            <button>Thanh toán</button>
        </div>
    )
}

export default Subtotal
