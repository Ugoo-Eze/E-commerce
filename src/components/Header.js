import "../styles/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/ArrowDropDownOutlined";
import { useSelector } from "react-redux";
import { selectItems } from "../features/basketSlice";
import { Link } from "react-router-dom";

function Header({ changeMenu, changeSecondMenu }) {
  const items = useSelector(selectItems);
  return (
    <nav className="header">
      <Link style={{width: '20%'}} to="/home">
        <img 
          style={{width: '58%'}}
          className="header__logo"
          src="https://venturesafrica.com/wp-content/uploads/2015/10/JUMIA.png"
          alt="logo img"
        />
      </Link>

      <div className="header__search">
        <div className="headerSearch__input">
          <SearchIcon className="header__searchIcon" />
          <input
            type="text"
            placeholder="Search Products, brands and cartigories"
          />
        </div>
        <Button className="headerSearch__button">search</Button>
      </div>

      <div className="header__right">
        <div className="headerRight__option" onClick={changeMenu}>
          <PersonOutlineIcon />
          <h5>Account</h5>
          <ArrowDropDownOutlinedIcon />
        </div>
        <div className="headerRight__option" onClick={changeSecondMenu}>
          <HelpOutlineIcon />
          <h5>Help</h5>
          <ArrowDropDownOutlinedIcon />
        </div>
        <Link to="/checkout">
          <div
            className="headerRight__option"
            style={{ textDecoration: "none" }}
          >
            <div className="headerRight__optionCart">
              <ShoppingCartOutlinedIcon />
              <strong>{items.length}</strong>
            </div>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
