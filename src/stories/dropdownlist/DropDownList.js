import classes from "./DropDownList.module.css";
function DropDownList({ text1, text2, text3 }) {
  return (
    <div>
      <div className={classes.bubble}>
        <div>{text1}</div>
        <div className={classes.second}>{text2}</div>
        <div className={classes.second}>{text3}</div>
      </div>
    </div>
  );
}

export default DropDownList;
