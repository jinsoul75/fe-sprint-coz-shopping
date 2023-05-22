import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Item from "../components/item/Item";
import classes from "./ProductList.module.css";
import Filter from '../components/filter/Filter'
import useFetchAllData from '../hooks/useFetchAllData';


function ProductList() {
  const [ref, inView] = useInView();
  const [selectedType, setSelectedType] = useState(null);
  const [visible, setVisible] = useState({ start: 0, end: 16 });

  const [data, error] = useFetchAllData('http://cozshopping.codestates-seb.link/api/v1/products')

  useEffect(() => {
    if (inView) {
      setVisible((prevData) => ({
        start: prevData.start,
        end: prevData.end + 16,
      }));
    }
  }, [inView]);

  useEffect(() => {
    setVisible({ start: 0, end: 16 });
  }, [selectedType]);

  return (
    <div className={classes.productListContainer}>
      <Filter selectedType={selectedType} setSelectedType={setSelectedType}/>
      <ul className={classes.itemList}>
        {error ? (
          <div>{error}</div> // 에러 메시지 출력
        ) : (
          data
            .filter((d) => selectedType === null || d.type === selectedType)
            .slice(visible.start, visible.end)
            .map((d, idx) => <Item data={d} key={`id${idx}`} />)
        )}
        <div ref={ref}></div>
      </ul>
    </div>
  );
}

export default ProductList;
