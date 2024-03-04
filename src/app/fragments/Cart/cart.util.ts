export const handleCartChange = (
  cartItem: Cart,
  value: string,
  cart: Cart[],
  setCart: React.Dispatch<React.SetStateAction<Cart[]>>,
  selectedCart: Cart[],
  setSelectedCart: React.Dispatch<React.SetStateAction<Cart[]>>
) => {
  const { id, product } = cartItem;
  const newValue = parseInt(value);

  const quantity =
    isNaN(newValue) || newValue < 1
      ? ""
      : newValue > product.stock
      ? cartItem.product.stock
      : newValue;

  const totalPrice = Number(quantity) * product.price;

  const updateCart = cart.map((cartItem) =>
    cartItem.id === id ? { ...cartItem, quantity, totalPrice } : cartItem
  );
  setCart(updateCart);

  const updateSelectedCart = selectedCart.map((cartItem) =>
    cartItem.id === id ? { ...cartItem, quantity, totalPrice } : cartItem
  );

  setSelectedCart(updateSelectedCart);
};

export const handleCheckboxChange = (
  event: React.ChangeEvent<HTMLInputElement>,
  cartItem: Cart,
  selectedCart: Cart[],
  setSelectedCart: React.Dispatch<React.SetStateAction<Cart[]>>
) => {
  const { checked } = event.target;
  if (checked) {
    const updatedSelectedCart = [...selectedCart, cartItem];
    setSelectedCart(updatedSelectedCart);
  } else {
    const updatedSelectedCart = selectedCart.filter(
      (item) => item.id !== cartItem.id
    );
    setSelectedCart(updatedSelectedCart);
  }
};

export const handleRemoveCart = (
  cartItem: Cart,
  cart: Cart[],
  setCart: React.Dispatch<React.SetStateAction<Cart[]>>,
  selectedCart: Cart[],
  setSelectedCart: React.Dispatch<React.SetStateAction<Cart[]>>
) => {
  const updateCart = cart.filter(
    (item) => item.id !== cartItem.id
  );
  setCart(updateCart);

  const updatedSelectedCart = selectedCart.filter(
    (item) => item.id !== cartItem.id
  );
  setSelectedCart(updatedSelectedCart);
};

export const handleChecked = (
  cartItem: Cart,
  selectedCart: Cart[]
  ) => {
  const findProduct = selectedCart.find((item) =>
    item.id === cartItem.id
  )

  return findProduct ? true : false;
}