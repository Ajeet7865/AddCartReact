import React, { useEffect, useReducer } from 'react'
import { CartProvider, useCart } from './CartContext'
import CartList from './CartList'
import reducer from './reducer'
//import { products } from './Product'
import './cart.css'


const Cart = () => {
    //const items = products;
    //const [items, setItems] = useState(products)

    const [state, dispatch] = useReducer(reducer, useCart());

    const decrement = (id) => {
        return dispatch({
            type: "DECREMENT",
            payload: id,
        });
    };
    const increment = (id) => {
        return dispatch({
            type: "INCREMENT",
            payload: id,
        });
    };
    const clearCart = () => {
        return dispatch({ type: "CLEAR_CART" });
    };

    const removeItem = (id) => {
        return dispatch({
            type: "REMOVE_ITEM",
            payload: id,
        });
    };

    useEffect(() => {
        dispatch({ type: "GET_TOTAL" });
    }, [state.items]);

    return (
        <>
            <CartProvider value={{ ...state, increment, removeItem, clearCart, decrement }}>
                <CartList />
            </CartProvider>

        </>
    )
}

export default Cart