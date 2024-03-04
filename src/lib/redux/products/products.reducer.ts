import { createSlice } from "@reduxjs/toolkit";
import { getCategoryProductsCall, getProductsCall } from "./products.action";
import { mergeProducts } from "./produsts.util";

const initialState: ProductsState = {
  data: [],
  paging: {} as Paging,
  category: {
    fruits: {
      data: [],
      paging: {} as Paging,
    },
    grains: {
      data: [],
      paging: {} as Paging,
    },
    vegetables: {
      data: [],
      paging: {} as Paging,
    },
  },
  status_code: 200,
  detail_product: {} as Product,
};

const productsSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    updateDetailProducts: (state, action) => {
      state.detail_product = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProductsCall.fulfilled, (state, action) => {
      const { products, paging } = action.payload.data;
      state.data = mergeProducts(state.data, products);
      state.paging = paging;
    });

    builder.addCase(getCategoryProductsCall.fulfilled, (state, action: any) => {
      if (action.payload) {
        const { products, paging, category } = action.payload.data;
        state.category[category].data = mergeProducts(
          state.category[category].data,
          products
        );
        state.category[category].paging = paging;
      }
    });
  },
});

export const { updateDetailProducts } = productsSlice.actions;
export default productsSlice.reducer;
