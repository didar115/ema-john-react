import React from 'react'
import { useState,useEffect } from 'react';
import Product from '../Product/Product';
import './Shop.css';
import Cart from '../Cart/Cart';

function Shop() {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    

    // fetch data from api 

    useEffect(() => {
        
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
        
    }, []);

    const handleAddToCart = product => {
        // console.log(product.name);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                <h3>Products:</h3>
                {
                    products.map(productData =>
                        
                        <Product key={productData.key}
                            handleAddToCart={ handleAddToCart}    Product={productData}></Product>
                        )
                }
            </div>

             {/* cart division  */}
            <div className="cart-container">
              <Cart cart={cart}></Cart>
            </div>
            
        </div>
    )
}

export default Shop;
