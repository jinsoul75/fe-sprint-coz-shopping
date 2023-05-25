import ProductList from "../components/list/ProductList";
import classes from "./Main.module.css";
import listTitle from "../constants/listTitle";

function Main() {
  return (
    <main className={classes.container}>
      <ProductList
        titleOfList={listTitle.PRODUCT_LIST}
        className={classes.productList}
      />
      <ProductList
        titleOfList={listTitle.BOOKMARK_LIST}
        className={classes.productList}
      />
    </main>
  );
}

export default Main;
