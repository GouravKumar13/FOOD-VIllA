import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./ReduxSlices/CartSlice";
import UserSlice from "./ReduxSlices/UserSlice";
const Store = configureStore({
    reducer:{
        cart:CartSlice,
        userInfo:UserSlice,
    }
});

export default Store;
 