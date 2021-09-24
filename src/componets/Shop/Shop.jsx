import React from 'react'
import { useState,useEffect } from 'react';
import Product from '../Product/Product';
import './Shop.css';

function Shop() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
        
    }, [])
    return (
        <div className='shop-container'>
            <div className="product-container">
                <h3>Products:</h3>
                {
                    products.map(productData =>
                        
                        <Product key={ productData.key} Product={ productData}></Product>
                        )
                }
            </div>
            <div className="cart-container">
                <h3>Order Summary</h3>
                <h5>Item Odered</h5>
            </div>
            
        </div>
    )
}

export default Shop;
