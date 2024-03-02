import { useState } from "react";

type TypeCart = {
  id: number;
  idUser: number;
  idProduct: number;
  totalPrice: number;
  totalCart: number | string;
  product: {
    productName: string;
    src: string;
    discountPrice: number;
    stock: number;
  }
}[]

const initCart: TypeCart = [
  {
    id: 1,
    idUser: 10,
    idProduct: 2,
    totalPrice: 100000,
    totalCart: 4,
    product: {
      productName: "Apel Hijau2",
      src: "/assets/products/buah/apel-hijau.jpg",
      discountPrice: 25000,
      stock: 7,
    },
  },
  {
    id: 2,
    idUser: 10,
    idProduct: 3,
    totalPrice: 100000,
    totalCart: 4,
    product: {
      productName: "Apel Hijau3",
      src: "/assets/products/buah/apel-hijau.jpg",
      discountPrice: 25000,
      stock: 7,
    },
  },
  {
    id: 3,
    idUser: 10,
    idProduct: 4,
    totalPrice: 100000,
    totalCart: 4,
    product: {
      productName: "Apel Hijau4",
      src: "/assets/products/buah/apel-hijau.jpg",
      discountPrice: 25000,
      stock: 7,
    },
  },
  {
    id: 4,
    idUser: 10,
    idProduct: 5,
    totalPrice: 100000,
    totalCart: 4,
    product: {
      productName: "Apel Hijau5",
      src: "/assets/products/buah/apel-hijau.jpg",
      discountPrice: 25000,
      stock: 7,
    },
  },
];

function CartFragment() {
  const [cart, setCart] = useState(initCart);

  const handleCartChange = (index: number, value: string) => {
    const inputValue = parseInt(value);
    const updateCart = cart.map((item: typeof initCart[0], idx) => {
      if (idx === index) {
        const totalCart = isNaN(inputValue) || inputValue < 1 ? "" : inputValue > item.product.stock ? item.product.stock : inputValue;
        const totalPrice = Number(totalCart) * item.product.discountPrice;
        return { ...item, totalCart, totalPrice };
      }
      return item;
    });
    setCart(updateCart);
  };

  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { checked } = event.target;
    if (checked) {
      setSelectedItems([...selectedItems, index]);
    } else {
      setSelectedItems(selectedItems.filter((item) => item !== index));
    }
  };

  console.log(selectedItems);

  const result = selectedItems.reduce(
    (accumulator, indexSelectedItems) =>
      accumulator + cart[indexSelectedItems].totalPrice,
    0
  );
  console.log(result);

  return (
    <main className="px-5 sm:px-10 lg:px-24 pb-14 pt-28 lg:pb-32 lg:pt-36 lg:h-max lg:flex lg:items-start lg:gap-20">
      <section className="flex flex-col gap-4">
        <h1 className="flex items-center gap-3 text-2xl text-gray-800">
          <hr className="w-14 border-t-2 border-teal-700" />
          Service cart
        </h1>

        <div id="cartSection">
          {cart &&
            cart.map((item, index) => {
              const {
                totalPrice,
                totalCart,
                product: { productName, src, discountPrice, stock },
              } = item;

              return (
                <figure
                  key={index}
                  className="flex gap-5 border p-3 w-max h-max"
                >
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(index)}
                    onChange={(event) => handleCheckboxChange(event, index)}
                  />
                  <img src={src} alt={productName} className="w-40 h-auto" />
                  <figcaption className="flex items-start gap-2">
                    <div>
                      <div className="flex flex-col gap-2">
                        <h1 className="text-xl text-teal-700 font-semibold">
                          {productName}
                        </h1>
                        <p className="text-xs">
                          {discountPrice.toLocaleString("id-ID", {
                            style: "currency",
                            currency: "IDR",
                          })}
                          /kg
                        </p>
                        <p className="text-sm font-bold">
                          {totalPrice.toLocaleString("id-ID", {
                            style: "currency",
                            currency: "IDR",
                          })}
                        </p>
                      </div>
                      <div className="flex gap-2 lg:gap-5 mt-3">
                        <button
                          onClick={() =>
                            handleCartChange(
                              index,
                              String(Number(totalCart) - 1),
                            )
                          }
                          type="button"
                        >
                          <i className="fa-solid fa-minus bg-slate-200 hover:bg-slate-400 text-gray-800 px-3 py-1"></i>
                        </button>
                        <input
                          type="number"
                          className="text-center"
                          min={1}
                          max={stock}
                          value={totalCart}
                          onChange={(event) =>
                            handleCartChange(
                              index,
                              event.target.value,
                            )
                          }
                        />
                        <button
                          type="button"
                          onClick={() =>
                            handleCartChange(
                              index,
                              String(Number(totalCart) + 1),
                            )
                          }
                        >
                          <i className="fa-solid fa-plus bg-slate-200 hover:bg-slate-400 text-gray-800 px-3 py-1"></i>
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        const updateCart = [...cart];
                        updateCart.splice(index, 1);
                        setCart(updateCart);
                      }}
                    >
                      <i className="fa-solid fa-xmark hover:text-teal-700"></i>
                    </button>
                  </figcaption>
                </figure>
              );
            })}
        </div>
      </section>

      <section className="mt-14 lg:mt-20 flex flex-col gap-10 sm:gap-20">
        <table className="w-1/2 border-collapse border">
          <thead>
            <tr>
              <th
                colSpan={2}
                className="p-5 text-neutral-50 text-left text-xl bg-teal-700"
              >
                Cart Total
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="even:bg-slate-200">
              <td className="p-5 text-left">Subtotal</td>
              <td className="p-5 text-right whitespace-nowrap">ada</td>
            </tr>
          </tbody>
        </table>

        <div>
          <a
            href="#"
            className="bg-teal-700 hover:bg-teal-800 text-white lg:text-xl px-5 py-2 rounded-lg"
          >
            <i className="fa-solid fa-bag-shopping me-1"></i>
            Checkout
          </a>
        </div>
      </section>
    </main>
  );
}

export default CartFragment;
