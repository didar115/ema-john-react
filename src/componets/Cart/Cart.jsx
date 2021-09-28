import React from 'react';
import './Cart.css';

function Cart(props) {

    const { cart } = props;
    let total = 0;
    for (const product of cart) {
        total = total + product.price;
    }

    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;

    return (
			<div>
				<h3>Order Summary</h3>
                <h5>Item Odered: { props.cart.length} </h5>
                <h5>Total: {total.toFixed(2)}</h5>
                <h5>Shipping & Handing: { shipping.toFixed(2)}</h5>
                <h5>Tax: {tax.toFixed(2)}</h5>
                <h5>Grand Total: { grandTotal.toFixed(2)}</h5>
			</div>
		);
}

export default Cart;
