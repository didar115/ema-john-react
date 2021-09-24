import React from 'react';
import './Cart.css';

function Cart(props) {

    const { cart } = props;
    let total = 0;
    for (const product of cart) {
        total = total + product.price;
    }
    return (
			<div>
				<h3>Order Summary</h3>
                <h5>Item Odered: { props.cart.length} </h5>
                <p>Items: </p>
                <p>Total: {total}</p>
                <p>Shipping & Handing: </p>
				
			</div>
		);
}

export default Cart;
