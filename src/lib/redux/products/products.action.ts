import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchCategoryDataCall,
  fetchDataCall,
} from "../../../services/products/products.service";

export const getProductsCall = createAsyncThunk(
  "get products",
  async (page: number) => {
    const { data } = await fetchDataCall(page);
    return data;
  }
);

export const getCategoryProductsCall = createAsyncThunk(
  "get products by category",
  async ({ category, page }: { category: string; page: number }) => {
    const { data } = await fetchCategoryDataCall(category, page);
    return data;
  }
);
