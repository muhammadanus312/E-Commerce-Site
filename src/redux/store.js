import { configureStore } from "@reduxjs/toolkit";
import CartProductSlice from './CartProducts/CartProductSlice'
import ProductSlice from "./Products/ProductSlice";
export const store=configureStore({
    reducer:{
        Products:ProductSlice,
        cartProducts:CartProductSlice,
    },
})