import React from 'react'

const ReviewItem = (props) => {
    const { name, price, quantity, img,key } = props.product;
    const { handleRemove } = props;
    return (
        <div className="product-card">
            {/* review item image part */}
            <div>
                <img src={img} alt="" />
            </div>

            {/* review item details numeric part */}
            <div>
                <h4 className="product-name">{name}</h4>
                <p>price: {price}</p>
                <p>Quantity:{quantity} </p>
                <button onClick={() => handleRemove(key)} className="regular-btn">Remove</button>
            </div>
		</div>
		);
}

export default ReviewItem;
