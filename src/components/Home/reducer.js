export const initialState = {
    cart: [{
            id: "12213",
            image: "https://cafe.net.vn/media/catalog/product/cache/2a6aec2d01a0d2ad56a66dbbd17cfbf5/6/0/6002302.jpg",
            title: "Máy pha cafe tự động Scott Slimissimo",
            price: 19190000,
            rating: 4,
        },
        {
            id: "22221",
            image: "https://cafe.net.vn/media/catalog/product/cache/2a6aec2d01a0d2ad56a66dbbd17cfbf5/6/0/6002302.jpg",
            title: "Máy pha cafe tự động Scott Slimissimo",
            price: 19190000,
            rating: 4,
        },
    ],
    user: null,
};
export const getCartToTal = (cart) =>
    cart.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
    console.log(action);
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }
        case 'ADD_TO_CART':
            //logic for adding to cart
            return {
                ...state,
                cart: [...state.cart, action.item]
            };

        case 'REMOVE_FROM_CART':
            // logic for  remove from cart

            //clone cart
            let newCart = [...state.cart];

            // check to see if 
            const index = state.cart.findIndex(
                (cartItem) => cartItem.id === action.id)
            if (index >= 0) {
                newCart.splice(index, 1)

            } else {
                console.warn(
                    `Không thể xóa sản phẩm (id:${action.id})`
                );
            }


            return {...state,
                cart: newCart,
            };
        default:
            return state;
    }
}
export default reducer;