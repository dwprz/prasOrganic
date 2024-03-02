import { useEffect, useState } from "react";
import { Product, ProductDetailProps } from "../../../../interfaces/Product";

function ProductDetailsFragment(props: ProductDetailProps) {
  const {
    productDetailState: { product },
    setProductDetailState
  } = props;

  const [isTotalPrice, setTotalPrice] = useState(product.initial_price);
  const [isTotalCart, setTotalCart] = useState(1);

  useEffect(() => {
    setTotalPrice(product.initial_price * isTotalCart);
  }, [isTotalCart, product.initial_price]);


  return (
    <main className={`px-5 sm:px-14 pb-14 pt-24 sm:pt-36 lg:pt-0 sm:h-screen xl:bg-teal-800`}>
      <section className="lg:flex lg:items-center lg:w-1/2 lg:min-h-screen lg:mx-auto">
        <figure className="relative lg:flex lg:items-center lg:gap-10 lg:h-max xl:bg-gray-200 lg:px-10 lg:pt-5 lg:pb-14">
          <button
            className="absolute -right-5 -top-7 "
            onClick={() => setProductDetailState({ product: {} as Product, hidden: true })}
          >
            <i className="fa-solid fa-circle-xmark text-2xl text-gray-200"></i>
          </button>
          <img
            src={product.image}
            alt={product.name}
            className="w-64 h-64 mx-auto object-cover"
          />

          <figcaption className="mt-5 sm:mt-10">
            <h1
              id="productName"
              className="text-2xl sm:text-4xl text-teal-700 font-semibold"
            >
              {product.name}
            </h1>
            <p className="sm:mt-3">{product.description}</p>
            <p id="price" className="text-lg font-semibold mt-3">
              {product.initial_price.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
            </p>

            <p className="text-lg text-teal-700 font-semibold mt-3">
              {isTotalPrice == product.initial_price
                ? ""
                : isTotalPrice.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
            </p>

            <section className="flex items-center gap-7 lg:gap-10 mt-7">
              <div className="flex gap-2 lg:gap-5">
                <button
                  onClick={() =>
                    isTotalCart == 1 ? 1 : setTotalCart(isTotalCart - 1)
                  }
                  type="button"
                >
                  <i className="fa-solid fa-minus bg-slate-200 hover:bg-slate-400 text-gray-800 px-3 py-1"></i>
                </button>
                <p id="amountProduct">{isTotalCart}</p>
                <button
                  onClick={() =>
                    isTotalCart >= product.stock
                      ? product.stock
                      : setTotalCart(isTotalCart + 1)
                  }
                  type="button"
                >
                  <i className="fa-solid fa-plus bg-slate-200 hover:bg-slate-400 text-gray-800 px-3 py-1"></i>
                </button>
              </div>

              <button
                type="button"
                className="bg-teal-700 hover:bg-teal-800 text-white px-3 py-1 rounded-lg"
              >
                Add To Cart
              </button>
            </section>
          </figcaption>
        </figure>
      </section>
    </main>
  );
}

export default ProductDetailsFragment;
