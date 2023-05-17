import classes from "./Modal.module.css";
import { useSelector, useDispatch } from "react-redux";
import { modalActions } from "../../store/modal";
import { bookmarkActions } from "../../store/bookmark";

function Modal() {
  const isShowModal = useSelector((state) => state.modal.showModal);
  const isMarked = useSelector(state => state.bookmark.includes(isShowModal.id))
  const dispatch = useDispatch();
  const clickModalCloseHandler = () => {
    dispatch(modalActions.close());
  };
  const clickBookmarkHandler = () => {
    dispatch(bookmarkActions.toggleBookmark(isShowModal.id));
  };
  return (
    <div className={classes.modalBackDrop} onClick={clickModalCloseHandler}>
      <div
        className={classes.modalContainer}
        onClick={(event) => event.stopPropagation()}
      >
        <img
          className={classes.productImg}
          key={isShowModal.id}
          src={isShowModal.image_url || isShowModal.brand_image_url}
          alt={isShowModal.name}
        ></img>
        <img
          onClick={clickModalCloseHandler}
          className={classes.closeBtn}
          src='../images/closeBtn.svg'
          alt='close-button'
        ></img>
        <div className={classes.bookmarkAndTitle}>
          <img
            onClick={() => clickBookmarkHandler(isShowModal)}
            className={classes.bookmarkIcon}
            src={
              isMarked
                ? `${"../images/bookmarkIconOn.svg"}`
                : `${"../images/bookmarkIconOff.svg"}`
            }
            alt='bookmark-icon'
          ></img>
          <div className={classes.title}>
            {isShowModal.type === "Category" ? (
              <h3>{`# ${isShowModal.title}`}</h3>
            ) : (
              <h3>{isShowModal.title || isShowModal.brand_name}</h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
