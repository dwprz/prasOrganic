import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../lib/redux/store";
import { useEffect, useState } from "react";
import { getProductsCall } from "../../../lib/redux/products/products.action";
import { Product, ProductDetailState, ProductsPageState } from "../../../interfaces/Product";
import ProductDetailsFragment from "./ProductDetails/ProductDetails";
import { handleClickBeli, handleClickCategory, handleSubmitSearch, loadMoreProducts } from "./products.util";

function ProductsFragment() {
  const { data, category } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch<any>();
  const [products, setProducts] = useState<Product[]>([])
  const [productDetailState, setProductDetailState] = useState<ProductDetailState>({
    product: {} as Product,
    hidden: true
  });
  const [productsPageState, setProductsPageState] = useState<ProductsPageState>({
    page: 1,
    isLoading: false,
    active: "all",
    statusCode: 200
  })

  const { page, isLoading, active, statusCode } = productsPageState;

  // useEffect untuk menjalankan action getProductsCall
  useEffect(() => {
    dispatch(getProductsCall(1));
  }, [])

  // useEffect untuk set state products by category
  useEffect(() => {
    const selectedData = category[active]?.data || data;
    setProducts(selectedData);
  }, [data, category, productsPageState.active]);

  return (
    <main>
      <section className={`${!productDetailState.hidden ? "hidden" : "block"} pt-32 lg:pt-40 pb-14 lg:pb-24 px-5 lg:px-40`}>
        <section className="text-center px-5">
          <hr className="mb-5 lg:mb-10" />
          <h1 className="text-3xl lg:text-8xl font-semibold">
            Welcome to PrasOrganic!
          </h1>
          <p className="text-xl text-gray-500 lg:text-3xl mt-3 ">
            Find a wide selection of organic products, from healthy foods to
            natural care products. All designed to provide comprehensive natural
            goodness for you to enjoy.
          </p>
          <hr className="mt-5 lg:mt-10" />
        </section>

        <section className="mt-14">
          <div className="flex flex-col xl:flex-row gap-10 xl:gap-0 xl:justify-between xl:items-center">
            <ul className="flex items-center gap-3 text-teal-700 text-lg overflow-hidden">
              {[
                ["all", "fa-store"],
                ["fruits", "fa-apple-whole"],
                ["grains", "fa-wheat-awn"],
                ["vegetables", "fa-carrot"]
              ].map((item, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => handleClickCategory(item[0], productsPageState, setProductsPageState, dispatch, page, data, category)}
                    className={`${active === item[0] ? "bg-teal-600 text-white" : ""} 
                    flex items-center px-7 py-1 border rounded-full cursor-pointer shadow-md
                    hover:bg-teal-700 hover:text-white ease-out duration-300
                    `
                    }
                  >
                    <i className={`fa-solid ${item[1]} me-1`}></i>
                    <h1>{item[0]}</h1>
                  </li>
                )
              })}

            </ul>

            <form onSubmit={(e) => handleSubmitSearch(e, productsPageState, setProductsPageState, setProducts)}>
              <div className="relative">
                <i className="fa-solid fa-magnifying-glass absolute left-4 top-2 opacity-50"></i>
                <input
                  type="search"
                  className="border outline-teal-600 ps-10 py-1 rounded-full"
                  name="search"
                  id="search"
                  placeholder="search"
                  minLength={3}
                  required
                />

              </div>
            </form>
          </div>

          {statusCode === 404 && (
            <p className="text-sm text-center mt-14">sorry! products is not found...</p>
          )}


          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {products &&
              products.map((product: any, index) => {
                return (
                  <figure key={index} className="shadow-xl">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="rounded-t-2xl w-full h-64 object-cover"
                    />
                    <figcaption className="px-5 lg:px-7 pt-5 lg:pt-7 pb-7 lg:pb-10 border-s border-e border-b">
                      <h1 className="text-2xl font-semibold text-teal-700">
                        {product.name}
                      </h1>
                      <div className="flex gap-5 mt-2">
                        <p className="text-orange-400 font-semibold">
                          {!product.rate ? 4.5 : product.rate}
                          <i className="fa-solid fa-star"></i>
                        </p>
                        <p>
                          | Terjual{" "}
                          {!product.sold ? 100 : product.sold > 1000
                            ? `${product.sold / 1000}K+`
                            : product.sold}
                        </p>
                      </div>
                      <p className="mt-2">
                        <span className="line-through">
                          {product.initial_price.toLocaleString("id-ID", {
                            style: "currency",
                            currency: "IDR",
                          })}
                        </span>
                        <strong className="text-gray-700">
                          {" "}
                          {!product.discount_price ? (20000).toLocaleString("id-ID", { style: "currency", currency: "IDR" }) : product.discount_price.toLocaleString("id-ID", {
                            style: "currency",
                            currency: "IDR",
                          })}
                        </strong>
                      </p>

                      <div className="flex justify-between items-center mt-7 ">
                        <button
                          className="bg-teal-700 hover:bg-teal-800 text-neutral-100 px-3 py-2 rounded-lg"
                          onClick={() => handleClickBeli(product, setProductDetailState)}
                        >
                          <i className="fa-solid fa-cart-shopping me-1"></i> Beli
                        </button>
                        <span className="text-gray-700">
                          <b>Stock:</b>
                          {`${product.stock} kg`}
                        </span>
                      </div>
                    </figcaption>
                  </figure>
                );
              })}
          </section>

          {isLoading && <div className="w-max mx-auto" >Loading...</div>}

          <div className="w-max mx-auto mt-14 flex flex-col items-center hover:translate-y-1 duration-500">
            <button
              type="button"
              onClick={() => loadMoreProducts(page + 1, active, productsPageState, setProductsPageState, dispatch)}
              className="bg-teal-600 px-5 py-2 rounded-full text-white"
            >
              show more products
            </button>
            <i className="fa-solid fa-angle-down"></i>
          </div>

        </section>
      </section>

      {
        !productDetailState.hidden && (
          <ProductDetailsFragment
            productDetailState={productDetailState}
            setProductDetailState={setProductDetailState}
          />
        )
      }

    </main>
  );
}

export default ProductsFragment;


