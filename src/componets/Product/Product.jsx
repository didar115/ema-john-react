import React from 'react';
import './Product.css';

function Product(props) {
    // console.log(props.product);
    const {name,price,stock,img } = props.Product;


    return (
        <div>

            <img src={img} alt="" />
            <h4>{ name}</h4>
            
        </div>
    )
}

export default Product;
