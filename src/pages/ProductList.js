import React, { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import Item from "../components/item/Item";
import axios from "axios";
import classes from "./ProductList.module.css";

function ProductList() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [ref, inView] = useInView();
  const [selectedType, setSelectedType] = useState(null);
  const [visible, setVisible] = useState({ start: 0, end: 16 });

  const fetchData = async () =>{
    try {
      const res = await axios.get(
        "http://cozshopping.codestates-seb.link/api/v1/products"
      );
      setData(res.data);
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
        <div onClick={()=>setSelectedType(null)}>
          <img src='../images/filterBtnMain.svg' alt='main'></img>
          <span className={selectedType === null&& classes.clickedBtn}>전체</span>
        </div>
        <div onClick={()=>setSelectedType('Product')}>
          <img src='../images/filterBtnProduct.svg' alt='main'></img>
          <span className={selectedType === 'Product'&& classes.clickedBtn}>상품</span>
        </div>
        <div onClick={()=>setSelectedType('Category')}>
          <img src='../images/filterBtnCategory.svg' alt='main'></img>
          <span className={selectedType === 'Category'&& classes.clickedBtn}>카테고리</span>
        </div>
        <div onClick={()=>setSelectedType('Exhibition')}>
          <img src='../images/filterBtnExhib.svg' alt='main'></img>
          <span className={selectedType === 'Exhibition'&& classes.clickedBtn}>기획전</span>
        </div>
        <div onClick={()=>setSelectedType('Brand')}>
          <img src='../images/filterBtnBrand.svg' alt='main'></img>
          <span className={selectedType === 'Brand'&& classes.clickedBtn}>브랜드</span>
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

export default ProductList;
