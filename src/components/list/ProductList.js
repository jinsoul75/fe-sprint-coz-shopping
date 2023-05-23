import Item from "../item/Item";
import classes from "./ProductList.module.css";
import { useSelector } from "react-redux";
import listTitle from "../../constants/listTitle";
import useFetchAllData from "../../hooks/useFetchAllData";

function ProductList({ titleOfList }) {
  const bookmark = useSelector((state) => state.bookmark);
  const [data, error] = useFetchAllData(
    "http://cozshopping.codestates-seb.link/api/v1/products"
  );

  return (
    <div className={classes.productList}>
      <div className={classes.title}>{titleOfList}</div>
      <ul className={classes.itemList}>
        {error ? (
          <div>{error}</div>
        ) : titleOfList === listTitle.PRODUCT_LIST ? (
          data.map((d) => <Item data={d} key={d.id} />).slice(0, 4)
        ) : bookmark.length === 0 ? (
          <div className={classes.noBookmark}>북마크된 상품이 없습니다.</div>
        ): (
          bookmark
            .map((id) => {
              return data.filter((d) => d.id === id)[0];
            })
            .slice(0, 4)
            .map((d, idx) => <Item data={d} key={`id${idx}`} />)
        )}
      </ul>
    </div>
  );
}

export default ProductList;
