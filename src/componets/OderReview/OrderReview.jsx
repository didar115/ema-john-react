import React from 'react'
import useProducts from '../../Hooks/useProduct';
import useCart from '../../Hooks/useCart';
import Cart from '../Cart/Cart';

function OrderReview() {
    const [products,setProducts] = useProducts();
    const [cart] = useCart(products);
    return (
        <div className="shop-container">
            <div className='product-container'>

            </div>

            <div className='cart-container' >
                <Cart cart={cart}></Cart>

            </div>
            
            
        </div>
    )
}

export default OrderReview;
