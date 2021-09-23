import React from "react";
import logo from '../../images/logo.png'
import  './Header.css';

const Header = () => {
	return (
		<div className='header-container'>
            <img className='logo' src={logo} alt="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/order">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
            </nav>
            <div className='search-div'>
               <input  className='search-box' placeholder="Type here to search" type="text" />

            </div>
		</div>
	);
};

export default Header;
