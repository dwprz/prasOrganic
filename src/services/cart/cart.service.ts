import axios from "axios";

export const createCart = async (cart: any) => {
  const res = await axios.post("http://localhost:3300/api/cart", cart);
  return res;
};
