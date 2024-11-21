import React, { useContext } from "react";
import { CartContext } from "./CartContext";


const Items = ({ id, title, description, price, img, quantity }) => {
    const { removeItem, increment, decrement } = useContext(CartContext);
    return (
        <>
            <div className="items-info">
                <div className="product-img">
                    <img src={img} alt="tp" />
                </div>

                <div className="title">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className="add-minus-quantity">
                    <i className="fa fa-minus" onClick={() => decrement(id)}></i>
                    <input type="text" placeholder={quantity} disabled />
                    <i className="fa fa-plus add" onClick={() => increment(id)}></i>
                </div>
                <div className="price">
                    <h3>$ {price}</h3>
                </div>
                <div className="remove-item">
                    <i className="fa fa-3x fa-trash remove" onClick={() => removeItem(id)}></i>
                </div>
            </div>
            <hr />
        </>
    );
};

export default Items;