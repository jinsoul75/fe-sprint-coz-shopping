import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/logo.svg";
import DropDownMenu from "../dropdown/DropDownMenu";

function Header({ isOpen, clickMenuOpenHandler, clickMenuCloseHandler }) {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to='/'>
          <img src={logo} alt='logo'></img>
          <span>COZ Shopping</span>
        </Link>
      </div>
      <div>
        <div className={classes.menu} onClick={clickMenuOpenHandler}>
          <FaBars />
        </div>
        {isOpen ? <DropDownMenu clickMenuCloseHandler={clickMenuCloseHandler}/> : null}
      </div>
    </header>
  );
}
export default Header;
