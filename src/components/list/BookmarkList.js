import React, { useState, useEffect } from "react";
import Item from "../item/Item";
import axios from "axios";
import classes from "./BookmarkList.module.css";
import { useSelector } from "react-redux";

function BookmarkList() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const bookmark = useSelector((state) => state.bookmark);

  // eslint-disable-next-line array-callback-return

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "http://cozshopping.codestates-seb.link/api/v1/products"
      );
      setData(res.data);
    } catch (error) {
      setError("데이터를 가져오는 도중에 에러가 발생했습니다.");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={classes.productList}>
      <div className={classes.title}>북마크 리스트</div>
      <ul className={classes.itemList}>
        {error ? (
          <div>{error}</div>
        ) : (
          data
            .filter((d) => {
              return bookmark && bookmark.includes(d.id);
            })
            .slice(0, 4)
            .map((d, idx) => <Item data={d} key={`id${idx}`} />)
        )}
      </ul>
    </div>
  );
}

export default BookmarkList;
