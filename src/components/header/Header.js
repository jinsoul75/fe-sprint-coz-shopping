import { Link } from "react-router-dom";
import { useState } from "react";
import classes from "./Header.module.css";
import { FaBars,FaGift,FaRegStar } from "react-icons/fa";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const clickMenuHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to='/'>
          <img src='../images/logo.svg' alt='logo'></img>
          <span>COZ Shopping</span>
        </Link>
      </div>
      <div>
        <div className={classes.menu}>
          <span onClick={() => clickMenuHandler()}>
            <FaBars />
          </span>
        </div>
        {isOpen ? (
          <div className={classes.bubble}>
            <div>김코딩님, 안녕하세요!</div>
            <Link to='/products/list'><FaGift />상품리스트 페이지</Link>
            <Link to='/bookmark'><FaRegStar />북마크 페이지</Link>
          </div>
        ) : null}
      </div>
    </header>
  );
}
export default Header;
