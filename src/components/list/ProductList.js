import React, { useState, useEffect } from "react";
import Item from "../item/Item";
import classes from "./ProductList.module.css";
import axios from "axios";

function ProductList() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://cozshopping.codestates-seb.link/api/v1/products?count=4"
        );
        setData(res.data);
      } catch (error) {
        setError("데이터를 가져오는 도중에 에러가 발생했습니다.");
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={classes.productList}>
      <div className={classes.title}>상품 리스트</div>
      <ul className={classes.itemList}>
        {error ? (
          <div>{error}</div>
        ) : (
          data.map((d) => <Item data={d} key={d.id} />)
        )}
      </ul>
    </div>
  );
}

export default ProductList;
