import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/productsSlice";
import productReducer from "./features/productSlice";
import cartReducer from "./features/cart/cartSlice";
import categoryReducer from "./features/categorySlice";
import categoriesReducer from "./features/categoriesSlice";

export default configureStore({
  reducer: {
    products: productsReducer,
    product: productReducer,

    cart: cartReducer,

    category: categoryReducer,
    categories: categoriesReducer,
  },
});
