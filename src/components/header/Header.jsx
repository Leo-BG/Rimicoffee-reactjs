import { Phone, Search, ShoppingCart } from '@material-ui/icons';

import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';
import { useStateValue } from '../Home/StateProvider';
import "./Header.css";
import logo from "./logo.png";

function Header() {
    const [{ cart, user }, dispatch] = useStateValue();
    const handleAuthentication = () => {
        if (user) {
            auth.signOut()
        }
    }
    return (
        <nav className="header">
            <Link to="/">

                <img className="header__logo" src={logo} alt="logo" />
                {/* logo img */}
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <Search className="header__searchIcon" />
                {/* search box */}
            </div>
            {/*  3 links*/}
            <div className="header___nav">


                <Link to={!user && '/login'} className="header__link">
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="header__optionLine">{user ? 'Đăng xuất' : "Đăng nhập"}</span>
                    </div>
                </Link>



                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLine">Đối tác</span>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLine"><Phone className="header__iconPhone" /></span>
                        <span className="header__optionLine2">0963xxxxxx</span>
                    </div>
                </Link>
                {/* 4th link */}
                <Link to="/checkout" className="header__link">
                    <div className="header__optionCart">
                        <span><ShoppingCart /></span>
                        <span className="header__optionLine2 header__cartCount">{cart?.length}</span>
                    </div>
                </Link>
            </div>
            {/* Cart icon with number */}
        </nav >
    )
}

export default Header
