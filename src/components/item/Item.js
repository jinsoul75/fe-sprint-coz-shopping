import classes from "./Item.module.css";
import { useSelector, useDispatch } from "react-redux";
import { modalActions } from "../../store/modal";
import { bookmarkActions } from "../../store/bookmark";
import bookmarkIconOff from "../../assets/bookmarkIconOff.svg";
import bookmarkIconOn from "../../assets/bookmarkIconOn.svg";

function Item({ data }) {
  if (!data) {
    return null;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isMarked = useSelector((state) => state.bookmark.includes(data.id));

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const clickBookmarkHandler = (event) => {
    event.stopPropagation();
    dispatch(bookmarkActions.toggleBookmark(data.id));
  };
  const clickModalOpenHandler = () => {
    dispatch(modalActions.open());
    dispatch(modalActions.showModal(data));
  };

  return (
    <li className={classes.itemContainer}>
      <div className={classes.imgContainer} onClick={clickModalOpenHandler}>
        <img
          className={classes.productImg}
          key={data.id}
          src={data.image_url || data.brand_image_url}
          alt={data.name}
        ></img>
        <img
          onClick={clickBookmarkHandler}
          className={classes.boomarkIconToggle}
          src={isMarked ? `${bookmarkIconOn}` : `${bookmarkIconOff}`}
          alt={isMarked ? "bookmark-icon-on" : "bookmark-icon-off"}
        ></img>
      </div>
      <div className={classes.description}>
        {data.type === "Product" ? (
          <div className={classes.product}>
            <h3 className={classes.title}>{data.title}</h3>
            <div>
              <div
                className={classes.discount}
              >{`${data.discountPercentage}%`}</div>
              <div className={classes.price}>{`${Number(
                data.price
              ).toLocaleString()}원`}</div>
            </div>
          </div>
        ) : data.type === "Category" ? (
          <div className={classes.category}>
            <h3 className={classes.title}>{`# ${data.title}`}</h3>
          </div>
        ) : data.type === "Exhibition" ? (
          <div className={classes.exhibition}>
            <h3 className={classes.title}>{data.title}</h3>
            <div className={classes.sub_title}>{data.sub_title}</div>
          </div>
        ) : (
          <div className={classes.brand}>
            <h3>{data.brand_name}</h3>
            <div>
              <div className={classes.follower}>관심고객수</div>
              <div
                className={classes.follower_number}
              >{`${data.follower.toLocaleString()}`}</div>
            </div>
          </div>
        )}
      </div>
    </li>
  );
}

export default Item;
