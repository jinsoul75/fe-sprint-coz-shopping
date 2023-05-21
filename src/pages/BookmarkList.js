import React, { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import Item from "../components/item/Item";
import axios from "axios";
import classes from "./BookmarkList.module.css";
import { useSelector } from "react-redux";
import types from '../constants/types';
const {ALL, PRODUCT,CATEGORY,EXHIBITION,BRAND} = types;
function BookmarkList() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [ref, inView] = useInView();
  const [selectedType, setSelectedType] = useState(ALL);
  const [visible, setVisible] = useState({ start: 0, end: 16 });
  const bookmark = useSelector(state => state.bookmark)

  const fetchData = async () =>{
    try {
      const res = await axios.get(
        "http://cozshopping.codestates-seb.link/api/v1/products"
      );
      setData(res.data.filter(d=>{
        return bookmark.includes(d.id)
      }));
    } catch (error){
      setError("데이터를 가져오는 도중에 에러가 발생했습니다.");
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (inView) {
      setVisible((prevData) => ({
        start: prevData.start,
        end : prevData.end+16,
      }))
    }
  }, [inView]);

  useEffect(() => {
    setVisible({ start: 0, end: 16 });
  }, [selectedType]);

  return (
    <div className={classes.productListContainer}>
      <div className={classes.filterBtn}>
        <div onClick={()=>setSelectedType(ALL)}>
          <img src='../images/filterBtnMain.svg' alt='main'></img>
          <span className={selectedType === ALL&& classes.clickedBtn}>전체</span>
        </div>
        <div onClick={()=>setSelectedType(PRODUCT)}>
          <img src='../images/filterBtnProduct.svg' alt='main'></img>
          <span className={selectedType === PRODUCT&& classes.clickedBtn}>상품</span>
        </div>
        <div onClick={()=>setSelectedType(CATEGORY)}>
          <img src='../images/filterBtnCategory.svg' alt='main'></img>
          <span className={selectedType === CATEGORY&& classes.clickedBtn}>카테고리</span>
        </div>
        <div onClick={()=>setSelectedType(EXHIBITION)}>
          <img src='../images/filterBtnExhib.svg' alt='main'></img>
          <span className={selectedType === EXHIBITION&& classes.clickedBtn}>기획전</span>
        </div>
        <div onClick={()=>setSelectedType(BRAND)}>
          <img src='../images/filterBtnBrand.svg' alt='main'></img>
          <span className={selectedType === BRAND&& classes.clickedBtn}>브랜드</span>
        </div>
      </div>
      <ul className={classes.itemList}>
        {error ? (
          <div>{error}</div> // 에러 메시지 출력
        ) : (
          data
          .filter((d) => selectedType === null || d.type === selectedType)
          .slice(visible.start, visible.end)
          .map((d,idx) => <Item data={d} key={ `id${idx}`} />)        
        )}
        <div ref={ref}></div>
      </ul>
    </div>
  );
}

export default BookmarkList;
