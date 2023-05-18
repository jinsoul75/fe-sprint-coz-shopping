import { configureStore } from '@reduxjs/toolkit';

import modalReducer from './modal'
import bookmarkReducer from './bookmark'

const store = configureStore({
    reducer: {modal: modalReducer, bookmark:bookmarkReducer}
});

export default store;
