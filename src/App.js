import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import classes from "./App.module.css";
import { useState, Suspense } from "react";

import Main from "./pages/Main";
import ProductList from "./pages/ProductList";
import BookmarkList from "./pages/BookmarkList";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Modal from "./components/modal/Modal";

import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const isModal = useSelector((state) => state.modal.isModalOpen);
  const [isOpen, setIsOpen] = useState(false);
  const clickMenuOpenHandler = () => {
    setIsOpen(true);
  };
  const clickMenuCloseHandler = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };
  return (
    <BrowserRouter>
      <ToastContainer
        position='bottom-right'
        autoClose={2000}
        pauseOnFocusLoss={false}
        hideProgressBar={true}
        closeButton={false}
        transition={Slide}
      />
      <div className={classes.container} onClick={clickMenuCloseHandler}>
        <Header
          isOpen={isOpen}
          clickMenuOpenHandler={clickMenuOpenHandler}
          clickMenuCloseHandler={clickMenuCloseHandler}
        />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Main />}></Route>
            <Route path='/products/list' element={<ProductList />}></Route>
            <Route path='/bookmark' element={<BookmarkList />}></Route>
          </Routes>
        </Suspense>
        <Footer />
        {isModal ? <Modal /> : null}
      </div>
    </BrowserRouter>
  );
}

export default App;
