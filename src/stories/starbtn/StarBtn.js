import classes from "./StarBtn.module.css";
import bookmarkIconOff from "../../assets/bookmarkIconOff.svg";
import bookmarkIconOn from "../../assets/bookmarkIconOn.svg";

export default function StarBtn({ Primary }) {
  return (
    <div>
      {Primary ? (
        <img src={bookmarkIconOn} className={classes.onStar} alt={'on-star'}></img>
      ) : (
        <img src={bookmarkIconOff} className={classes.offStar} alt={'off-star'}></img>
      )}
    </div>
  );
}
