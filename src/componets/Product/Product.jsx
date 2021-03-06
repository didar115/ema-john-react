import React from "react";
import "./Product.css";

function Product(props) {
	// console.log(props);
	const { name, price, stock, img, seller } = props.Product;

	return (
		<div className="product-card">
			<div>
				<img src={img} alt="" />
			</div>

			<div>
				<h4 className='product-name'>{name}</h4>
                <p><small>by ; {seller}</small></p>
                <p> Price: {price}</p>
                <p><small>Only {stock} left in stock - order soon</small></p>
                
                <button className='regular-btn' onClick={()=>props.handleAddToCart(props.Product)}> <i className="fas fa-shopping-cart"></i> add to cart</button>
			</div>
		</div>
	);
}

export default Product;
