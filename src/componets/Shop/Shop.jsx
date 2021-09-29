import React from 'react'
import { useState,useEffect } from 'react';
import Product from '../Product/Product';
import './Shop.css';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';

function Shop() {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    

    // fetch data from api 
    useEffect(() => {
        
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
        
    }, []);

    
    //for local storage
    useEffect(() => {
       
        if (products.length) {
            const savedCart = getStoredCart();
            const storeCart = [];
            for (const key in savedCart) {
                // console.log(savedCart[key]);
            // console.log(key);
            const addedProduct = products.find(product => product.key === key);
            // console.log(key, addedProduct);
            if (addedProduct) {
                const quantity = savedCart[key];
                addedProduct.quantity = quantity;
                // console.log(addedProduct);
                storeCart.push(addedProduct);
            }
            
            }
            setCart(storeCart);
            
            
        }
    }, [products]);

    // add to cart handle funtion 
    const handleAddToCart = product => {
        // console.log(product.name);
        const newCart = [...cart];
        const existing = cart.find(c => c.key === product.key);
        if (existing) {
            product.quantity = product.quantity + 1;
        }
        else {
            product.quantity = 1;
            newCart.push(product);
        }
        setCart(newCart);
        //save to local storage
        addToDb(product.key);
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
