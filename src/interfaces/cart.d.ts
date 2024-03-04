interface Cart {
    id: number;
    idUser: number;
    idProduct: number;
    totalPrice: number;
    quantity: number | string;
    product: {
      productName: string;
      src: string;
      price: number;
      stock: number;
    }
  }