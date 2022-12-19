import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import SearchIcon from "@mui/icons-material/SearchRounded";
import ShoppingBasket from "@mui/icons-material/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  console.log(basket);

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          alt="amazon Logo"
          src="https://i0.wp.com/www.dafontfree.co/wp-content/uploads/2021/11/Amazon-Logo-Font-1-scaled.jpg?resize=2560%2C1578"
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text"></input>
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__Nav">
        <Link to="/login" className="header__link">
          <div onClick={login} className="header__option">
            <span className="header__optionLineOne">Hello {user?.email}</span>
            <span  className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'} </span>
          </div>
        </Link>
        <Link to={!user && "/login"} className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Return</span>
            <span className="header__optionLineTwo"> & Order</span>
          </div>
        </Link>
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo"> Prime</span>
          </div>
        </Link>
        <Link to="Checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingBasket />
            <span className="header__optionLineTwo__basketCount">
              {" "}
              {basket?.length}{" "}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
