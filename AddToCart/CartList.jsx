import React, { useContext } from "react";
import Items from "./Items";
import Navbar from "./Navbar";
import { CartContext } from "./CartContext";



const CartList = () => {
    console.log(useContext(CartContext))
    const { items, totalAmount, totalItems, clearCart } = useContext(CartContext);


    if (items?.length === 0) {
        return (
            <>
                <Navbar />
                <section className="main-cart-section">
                    <h1>shopping Cart</h1>
                    <p className="total-items">
                        you have <span className="total-items-count">{totalItems} </span>
                        items in shopping cart
                    </p>

                    <div className="cart-items">
                        <div className="cart-items-container">
                            <h1>Empty Cart</h1>
                        </div>
                    </div>
                </section>
            </>
        );
    } else {
        return (
            <>
                <Navbar />
                <section className="main-cart-section">
                    <h1>shopping Cart</h1>
                    <p className="total-items">
                        you have <span className="total-items-count">{totalItems} </span>
                        items in shopping cart
                    </p>
                    <div className="card-total">
                        <h3>
                            card total: <span>$ {totalAmount} </span>
                        </h3>
                        <button className="btn btn-primary">CheckOut</button>
                        <button className="btn btn-danger" onClick={clearCart}>Clear Cart</button>
                    </div>
                    <div className="cart-items">
                        <div className="cart-items-container">
                            {items?.map((curItem) => {
                                return <Items key={curItem.id} {...curItem} />;
                            })}
                        </div>
                    </div>

                </section>
            </>
        );
    }

};

export default CartList;