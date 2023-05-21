import { FaGift, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import classes from "./DropDownMenu.module.css";

function DropDownMenu({clickMenuCloseHandler}) {
  return (
    <div>
      <div
        className={classes.bubble}
        onClick={(event) => event.stopPropagation()}
      >
        <div>김코딩님, 안녕하세요!</div>
        <Link to='/products/list' onClick={clickMenuCloseHandler}>
          <FaGift />
          상품리스트 페이지
        </Link>
        <Link to='/bookmark' onClick={clickMenuCloseHandler}>
          <FaRegStar />
          북마크 페이지
        </Link>
      </div>
    </div>
  );
}

export default DropDownMenu;

