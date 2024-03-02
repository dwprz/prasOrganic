import axios from "axios";

export const fetchDataCall: any = async (page: number) => {
  const data = await axios.get(
    `http://localhost:3300/api/products?page=${page}`
  );
  return data;
};

export const fetchCategoryDataCall = async (category: string, page: number) => {
  const data = await axios.get(
    `http://localhost:3300/api/products?category=${category}&page=${page}`
  );
  return data;
};

export const fetchSearchDataCall = async (search: string[], page: number) => {
  const searchParams = search.map((content) => `search=${content}`).join("&");
  const data = await axios.get(
    `http://localhost:3300/api/products?${searchParams}&page=${page}`
  );
  return data;
};
