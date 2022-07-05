import React from 'react';
import './Cosmetic.css';
const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic;
    const addToCart = (id) =>{
        console.log('item added', id);
    }

    // const addToCartWithParam = () => addToCart(id);

    return (
        <div className='product'>
            {/* <h2>Buy this:{props.cosmetic.name}</h2> */}
            <h2>Buy this:{name}</h2>
            {/* <p>Only for: ${props.cosmetic.price}</p> */}
            <p>Only for: ${price}</p>
            <p><small>it has id: {id}</small></p>
            {/* <button onClick={addToCartWithParam}>Add to Cart</button> */}
            {/* <button onClick={() => addToCart(id)}>Add to Cart: shortcut</button> */}
            <button onClick={() => addToCart(id)}>Add to Cart</button>
        </div>
    );
};

export default Cosmetic;