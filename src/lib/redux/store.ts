import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/products.reducer";

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
