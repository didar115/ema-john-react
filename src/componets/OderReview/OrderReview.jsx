import React from 'react'
import useProducts from '../../Hooks/useProduct';
import useCart from '../../Hooks/useCart';
import Cart from '../Cart/Cart';
import ReviewItem from '../../ReviewItem/ReviewItem';

function OrderReview() {
    const [products,setProducts] = useProducts();
    const [cart,setCart] = useCart(products);
    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className='product-container'>

                {
                    cart.map(product => <ReviewItem
                        key={product.key}
                        handleRemove={handleRemove}
                        product={product}></ReviewItem>)
                }

            </div>

            <div className='cart-container' >
                <Cart cart={cart}></Cart>

            </div>
            
            
        </div>
    )
}

export default OrderReview;
