import ButtonLayout from "../../layouts/ButtonLayout";

const products = [
  {
    id: 1,
    name: "Apel Hijau1",
    src: "assets/products/buah/apel-hijau.jpg",
    rate: 4.8,
    sold: 1250,
    initialPrice: 300000,
    discountPrice: 250000,
    stock: 10,
  },
  {
    id: 2,
    name: "Apel Hijau2",
    src: "assets/products/buah/apel-hijau.jpg",
    rate: 4.8,
    sold: 1250,
    initialPrice: 30000,
    discountPrice: 25000,
    stock: 2000,
  },
  {
    id: 3,
    name: "Apel Hijau3",
    src: "assets/products/buah/apel-hijau.jpg",
    rate: 4.8,
    sold: 1250,
    initialPrice: 30000,
    discountPrice: 25000,
    stock: 2000,
  },
  {
    id: 4,
    name: "Apel Hijau4",
    src: "assets/products/buah/apel-hijau.jpg",
    rate: 4.8,
    sold: 1250,
    initialPrice: 30000,
    discountPrice: 25000,
    stock: 2000,
  },
  {
    id: 5,
    name: "Apel Hijau5",
    src: "assets/products/buah/apel-hijau.jpg",
    rate: 4.8,
    sold: 1250,
    initialPrice: 300000,
    discountPrice: 250000,
    stock: 2000,
  },
  {
    id: 6,
    name: "Apel Hijau6",
    src: "assets/products/buah/apel-hijau.jpg",
    rate: 4.8,
    sold: 1250,
    initialPrice: 30000,
    discountPrice: 25000,
    stock: 2000,
  },
  {
    id: 7,
    name: "Apel Hijau7",
    src: "assets/products/buah/apel-hijau.jpg",
    rate: 4.8,
    sold: 1250,
    initialPrice: 30000,
    discountPrice: 25000,
    stock: 2000,
  },
  {
    id: 8,
    name: "Apel Hijau8",
    src: "assets/products/buah/apel-hijau.jpg",
    rate: 4.8,
    sold: 1250,
    initialPrice: 30000,
    discountPrice: 25000,
    stock: 2000,
  },
  {
    id: 9,
    name: "Apel Hijau9",
    src: "assets/products/buah/apel-hijau.jpg",
    rate: 4.8,
    sold: 1250,
    initialPrice: 30000,
    discountPrice: 25000,
    stock: 2000,
  },
  {
    id: 10,
    name: "Apel Hijau10",
    src: "assets/products/buah/apel-hijau.jpg",
    rate: 4.8,
    sold: 1250,
    initialPrice: 30000,
    discountPrice: 25000,
    stock: 2000,
  },
  {
    id: 11,
    name: "Apel Hijau11",
    src: "assets/products/buah/apel-hijau.jpg",
    rate: 4.8,
    sold: 1250,
    initialPrice: 30000,
    discountPrice: 25000,
    stock: 2000,
  },
  {
    id: 12,
    name: "Apel Hijau12",
    src: "assets/products/buah/apel-hijau.jpg",
    rate: 4.8,
    sold: 1250,
    initialPrice: 30000,
    discountPrice: 25000,
    stock: 2000,
  },
  {
    id: 13,
    name: "Apel Hijau13",
    src: "assets/products/buah/apel-hijau.jpg",
    rate: 4.8,
    sold: 1250,
    initialPrice: 300000,
    discountPrice: 250000,
    stock: 2000,
  },
  {
    id: 14,
    name: "Apel Hijau14",
    src: "assets/products/buah/apel-hijau.jpg",
    rate: 4.8,
    sold: 1250,
    initialPrice: 30000,
    discountPrice: 25000,
    stock: 2000,
  },
  {
    id: 15,
    name: "Apel Hijau15",
    src: "assets/products/buah/apel-hijau.jpg",
    rate: 4.8,
    sold: 1250,
    initialPrice: 30000,
    discountPrice: 25000,
    stock: 2000,
  },
  {
    id: 16,
    name: "Apel Hijau16",
    src: "assets/products/buah/apel-hijau.jpg",
    rate: 4.8,
    sold: 1250,
    initialPrice: 30000,
    discountPrice: 25000,
    stock: 2000,
  },
];

function ProductsFragment() {
  return (
    <main className="pt-32 lg:pt-40 pb-14 lg:pb-24 px-5 lg:px-40">
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

      <section>
        <header className="flex items-center gap-1 text-teal-700 text-2xl">
          <i className="fa-solid fa-store"></i>
          <h1>Populer</h1>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {products &&
            products.slice(0, 8).map((product, index) => {
              return (
                <figure key={index} className="shadow-xl">
                  <img
                    src={product.src}
                    alt={product.name}
                    className="rounded-t-2xl"
                  />
                  <figcaption className="px-5 lg:px-7 pt-5 lg:pt-7 pb-7 lg:pb-10 border-s border-e border-b">
                    <h1 className="text-2xl font-semibold text-teal-700">
                      {product.name}
                    </h1>
                    <div className="flex gap-5 mt-2">
                      <p className="text-orange-400 font-semibold">
                        {product.rate}
                        <i className="fa-solid fa-star"></i>
                      </p>
                      <p>
                        | Terjual{" "}
                        {product.sold > 1000
                          ? `${product.sold / 1000}K+`
                          : product.sold}
                      </p>
                    </div>
                    <p className="mt-2">
                      <span className="line-through">
                        {product.initialPrice.toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        })}
                      </span>
                      <strong className="text-gray-700">
                        {product.discountPrice.toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        })}
                      </strong>
                    </p>

                    <div className="flex justify-between items-center mt-7 ">
                      <ButtonLayout
                        type={"BELI"}
                        to={`/products/${product.id}`}
                      />
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

        <div className="flex justify-center mt-14">
          <button type="button" className="border border-slate-300 px-5 py-2">
            Previous
          </button>
          <button type="button" className="border border-slate-300 px-5 py-2">
            1
          </button>
          <button type="button" className="border border-slate-300 px-5 py-2">
            2
          </button>
          <button type="button" className="border border-slate-300 px-5 py-2">
            3
          </button>
          <button type="button" className="border border-slate-300 px-5 py-2">
            Next
          </button>
        </div>
      </section>
    </main>
  );
}

export default ProductsFragment;

/*
  
*/
