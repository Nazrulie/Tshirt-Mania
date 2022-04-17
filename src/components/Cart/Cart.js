import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveCart }) => {
    // Conditional rendering options 
    // 1. Element variable
    // 2. ternary operator condition ? true : false
    // 3. && operator (shorthand)
    // 4. || 
    let command;
    if (cart.length === 0) {
        command = <div>
            <h5>Ohh kipta, koros kor</h5>
            <p>Kinos na kan</p>
        </div>
    }
    else if (cart.length === 1) {
        command = <p><small>You can add more...</small></p>
    }
    else {
        command = <p><small>thanks for adding item</small></p>
    }
    return (
        <div>
            <h2>Item selected: {cart.length}</h2>

            {
                cart.map(tshirt => <p>{tshirt.name}
                    <button onClick={() => handleRemoveCart(tshirt)}>X</button></p>)
            }
            {cart.length === 0 || <p className='orange'>YAY! uou are buying</p>}
            {cart.length === 3 && <div className='orange'>
                <h3>Trigonal</h3>
                <p>tin jon ka ki gift diva</p>
            </div>}
            {command}
            {cart.length !== 4 ? <p>keep adding</p> : <button>Remove all</button>}
            {cart.length === 4 && <button className='orange'>Review order</button>}
        </div>
    );
};

export default Cart;