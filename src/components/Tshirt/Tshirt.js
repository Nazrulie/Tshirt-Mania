import React from 'react';
import './Tshirt.css';

const Tshirt = (props) => {
    const { handleaddtoCart, tshirt } = props;
    const { name, picture, pricr } = props.tshirt;
    return (
        <div className='tshirt'>
            <img src={picture} alt="" />
            <h4>Name: {name}</h4>
            <p>Price: ${pricr}</p>
            <button onClick={() => handleaddtoCart(tshirt)}>Add to Cart</button>
        </div>
    );
};

export default Tshirt;