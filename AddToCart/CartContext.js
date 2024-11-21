import { createContext, useContext } from "react";
import { products } from "./Product";


export const CartContext = createContext({
    items: products,
    totalAmount: 0,
    totalItems: 0,
    quantity: 0,
});

export const useCart = () => {
    return useContext(CartContext)
}


export const CartProvider = CartContext.Provider;