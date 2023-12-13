import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './CartItem.css'

const CartItem = ({ id, name, price, quantity}) => {
    const { removeItem } = useContext(CartContext);

    return (
        <div className="CartItem">
            <div>
                <h4>Titulo: {name}</h4>
                <p>Precio: ${price}</p>
                <p>Cantidad: {quantity}</p>
                <p>Total: ${price * quantity}</p>
            </div>
            <button onClick={() => removeItem(id)}>Remove</button>
            
        </div>
    );
};

export default CartItem;
