import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
    return (
        <div className='header'>
            <img 
                className='header_logo' 
                src='https://pngimg.com/uploads/amazon/amazon_PNG25.png'
                alt="loading ..."
            />
            <div className='header_search'>
                <input
                    className='header_searchInput'
                    type="text"
                />
                <SearchIcon 
                    className="header_searchIcon" 
                    />
            </div>
            <div className='header_nav'>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Hello Guest</span>
                    <span className='header__optionLineTwo'>Sign in</span>
                </div>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__optionLineTwo'>Orders</span>
                </div>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>
                </div>
                <div className='header__optionBasket'>
                    <ShoppingCartIcon />
                    <span className='header__optionLineTwo header__basketCount'>0</span>
                </div>
            </div>
        </div>
    )
}

export default Header
