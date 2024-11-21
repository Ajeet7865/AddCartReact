import React, { useContext } from "react";
import { CartContext } from "./CartContext";


const Navbar = () => {
    const { totalItems } = useContext(CartContext);
    return (
        <>
            <header>
                <div className="continue-shopping">
                    <h3><i className="fa fa-solid fa-calendar"></i>  continue shoping</h3>
                </div>

                <div className="cart-icon">
                <i className="fa fa-cart"></i> 
                    <p>{totalItems}</p>
                </div>
            </header>
        </>
    );
};

export default Navbar;