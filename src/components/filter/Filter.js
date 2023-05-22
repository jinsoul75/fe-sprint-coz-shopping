import { React } from "react";
import types from '../../constants/types';
import classes from "./Filter.module.css";
import filterBtnMain from "../../assets/filterBtnMain.svg";
import filterBtnProduct from "../../assets/filterBtnProduct.svg";
import filterBtnCategory from "../../assets/filterBtnCategory.svg";
import filterBtnExhib from "../../assets/filterBtnExhib.svg";
import filterBtnBrand from "../../assets/filterBtnBrand.svg";
function Filter({ selectedType, setSelectedType }) {
    const {PRODUCT,CATEGORY,EXHIBITION,BRAND} = types;
  return (
    <div className={classes.filterBtn}>
      <div onClick={() => setSelectedType(null)}>
        <img src={filterBtnMain} alt='main'></img>
        <span className={selectedType === null && classes.clickedBtn}>
          전체
        </span>
      </div>
      <div onClick={() => setSelectedType(PRODUCT)}>
        <img src={filterBtnProduct} alt={PRODUCT}></img>
        <span className={selectedType === PRODUCT && classes.clickedBtn}>
          상품
        </span>
      </div>
      <div onClick={() => setSelectedType(CATEGORY)}>
        <img src={filterBtnCategory} alt={CATEGORY}></img>
        <span className={selectedType === CATEGORY && classes.clickedBtn}>
          카테고리
        </span>
      </div>
      <div onClick={() => setSelectedType(EXHIBITION)}>
        <img src={filterBtnExhib} alt={EXHIBITION}></img>
        <span className={selectedType === EXHIBITION && classes.clickedBtn}>
          기획전
        </span>
      </div>
      <div onClick={() => setSelectedType(BRAND)}>
        <img src={filterBtnBrand} alt={BRAND}></img>
        <span className={selectedType === BRAND && classes.clickedBtn}>
          브랜드
        </span>
      </div>
    </div>
  );
}
export default Filter;
