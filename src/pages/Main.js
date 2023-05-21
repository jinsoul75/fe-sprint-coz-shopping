import ProductList from '../components/list/ProductList'
import BookmarkList from '../components/list/BookmarkList'
import classes from "./Main.module.css";

function Main() {
    return (
        <main className={classes.container}>
            <ProductList className={classes.productList}/>
            <BookmarkList className={classes.bookmarkList}/>
        </main>
    )
}

export default Main;