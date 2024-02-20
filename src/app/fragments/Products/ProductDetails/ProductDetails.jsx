import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const products = [
  {
    id: 1,
    name: "Apel Hijau1",
    src: "/assets/products/buah/apel-hijau.jpg",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
                        illo itaque, tempore magnam beatae, suscipit nemo magni officia dolore aut quasi, consequatur
                        quo.
                        Ab porro ipsa ex cumque! Tempora praesentium officiis voluptatum quos, est odit pariatur amet
                        repellendus consequatur, quae iusto. Tempore autem, obcaecati eius reiciendis amet illo numquam
                        voluptatibus.`,
    rate: 4.8,
    sold: 1250,
    initialPrice: 300000,
    discountPrice: 250000,
    stock: 10,
  },
  {
    id: 2,
    name: "Apel Hijau2",
    src: "/assets/products/buah/apel-hijau.jpg",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
                        illo itaque, tempore magnam beatae, suscipit nemo magni officia dolore aut quasi, consequatur
                        quo.
                        Ab porro ipsa ex cumque! Tempora praesentium officiis voluptatum quos, est odit pariatur amet
                        repellendus consequatur, quae iusto. Tempore autem, obcaecati eius reiciendis amet illo numquam
                        voluptatibus.`,
    rate: 4.8,
    sold: 1250,
    initialPrice: 30000,
    discountPrice: 25000,
    stock: 2000,
  },
  {
    id: 3,
    name: "Apel Hijau3",
    src: "/assets/products/buah/apel-hijau.jpg",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
                        illo itaque, tempore magnam beatae, suscipit nemo magni officia dolore aut quasi, consequatur
                        quo.
                        Ab porro ipsa ex cumque! Tempora praesentium officiis voluptatum quos, est odit pariatur amet
                        repellendus consequatur, quae iusto. Tempore autem, obcaecati eius reiciendis amet illo numquam
                        voluptatibus.`,
    rate: 4.8,
    sold: 1250,
    initialPrice: 30000,
    discountPrice: 25000,
    stock: 2000,
  },
  {
    id: 4,
    name: "Apel Hijau4",
    src: "/assets/products/buah/apel-hijau.jpg",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
                        illo itaque, tempore magnam beatae, suscipit nemo magni officia dolore aut quasi, consequatur
                        quo.
                        Ab porro ipsa ex cumque! Tempora praesentium officiis voluptatum quos, est odit pariatur amet
                        repellendus consequatur, quae iusto. Tempore autem, obcaecati eius reiciendis amet illo numquam
                        voluptatibus.`,
    rate: 4.8,
    sold: 1250,
    initialPrice: 30000,
    discountPrice: 25000,
    stock: 2000,
  },
  {
    id: 5,
    name: "Apel Hijau5",
    src: "/assets/products/buah/apel-hijau.jpg",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
                        illo itaque, tempore magnam beatae, suscipit nemo magni officia dolore aut quasi, consequatur
                        quo.
                        Ab porro ipsa ex cumque! Tempora praesentium officiis voluptatum quos, est odit pariatur amet
                        repellendus consequatur, quae iusto. Tempore autem, obcaecati eius reiciendis amet illo numquam
                        voluptatibus.`,
    rate: 4.8,
    sold: 1250,
    initialPrice: 300000,
    discountPrice: 250000,
    stock: 2000,
  },
  {
    id: 6,
    name: "Apel Hijau6",
    src: "/assets/products/buah/apel-hijau.jpg",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
                        illo itaque, tempore magnam beatae, suscipit nemo magni officia dolore aut quasi, consequatur
                        quo.
                        Ab porro ipsa ex cumque! Tempora praesentium officiis voluptatum quos, est odit pariatur amet
                        repellendus consequatur, quae iusto. Tempore autem, obcaecati eius reiciendis amet illo numquam
                        voluptatibus.`,
    rate: 4.8,
    sold: 1250,
    initialPrice: 30000,
    discountPrice: 25000,
    stock: 2000,
  },
  {
    id: 7,
    name: "Apel Hijau7",
    src: "/assets/products/buah/apel-hijau.jpg",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
                        illo itaque, tempore magnam beatae, suscipit nemo magni officia dolore aut quasi, consequatur
                        quo.
                        Ab porro ipsa ex cumque! Tempora praesentium officiis voluptatum quos, est odit pariatur amet
                        repellendus consequatur, quae iusto. Tempore autem, obcaecati eius reiciendis amet illo numquam
                        voluptatibus.`,
    rate: 4.8,
    sold: 1250,
    initialPrice: 30000,
    discountPrice: 25000,
    stock: 2000,
  },
  {
    id: 8,
    name: "Apel Hijau8",
    src: "/assets/products/buah/apel-hijau.jpg",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
                        illo itaque, tempore magnam beatae, suscipit nemo magni officia dolore aut quasi, consequatur
                        quo.
                        Ab porro ipsa ex cumque! Tempora praesentium officiis voluptatum quos, est odit pariatur amet
                        repellendus consequatur, quae iusto. Tempore autem, obcaecati eius reiciendis amet illo numquam
                        voluptatibus.`,
    rate: 4.8,
    sold: 1250,
    initialPrice: 30000,
    discountPrice: 25000,
    stock: 2000,
  },
  {
    id: 9,
    name: "Apel Hijau9",
    src: "/assets/products/buah/apel-hijau.jpg",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
                        illo itaque, tempore magnam beatae, suscipit nemo magni officia dolore aut quasi, consequatur
                        quo.
                        Ab porro ipsa ex cumque! Tempora praesentium officiis voluptatum quos, est odit pariatur amet
                        repellendus consequatur, quae iusto. Tempore autem, obcaecati eius reiciendis amet illo numquam
                        voluptatibus.`,
    rate: 4.8,
    sold: 1250,
    initialPrice: 30000,
    discountPrice: 25000,
    stock: 2000,
  },
  {
    id: 10,
    name: "Apel Hijau10",
    src: "/assets/products/buah/apel-hijau.jpg",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
                        illo itaque, tempore magnam beatae, suscipit nemo magni officia dolore aut quasi, consequatur
                        quo.
                        Ab porro ipsa ex cumque! Tempora praesentium officiis voluptatum quos, est odit pariatur amet
                        repellendus consequatur, quae iusto. Tempore autem, obcaecati eius reiciendis amet illo numquam
                        voluptatibus.`,
    rate: 4.8,
    sold: 1250,
    initialPrice: 30000,
    discountPrice: 25000,
    stock: 2000,
  },
  {
    id: 11,
    name: "Apel Hijau11",
    src: "/assets/products/buah/apel-hijau.jpg",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
                        illo itaque, tempore magnam beatae, suscipit nemo magni officia dolore aut quasi, consequatur
                        quo.
                        Ab porro ipsa ex cumque! Tempora praesentium officiis voluptatum quos, est odit pariatur amet
                        repellendus consequatur, quae iusto. Tempore autem, obcaecati eius reiciendis amet illo numquam
                        voluptatibus.`,
    rate: 4.8,
    sold: 1250,
    initialPrice: 30000,
    discountPrice: 25000,
    stock: 2000,
  },
  {
    id: 12,
    name: "Apel Hijau12",
    src: "/assets/products/buah/apel-hijau.jpg",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
                        illo itaque, tempore magnam beatae, suscipit nemo magni officia dolore aut quasi, consequatur
                        quo.
                        Ab porro ipsa ex cumque! Tempora praesentium officiis voluptatum quos, est odit pariatur amet
                        repellendus consequatur, quae iusto. Tempore autem, obcaecati eius reiciendis amet illo numquam
                        voluptatibus.`,
    rate: 4.8,
    sold: 1250,
    initialPrice: 30000,
    discountPrice: 25000,
    stock: 2000,
  },
  {
    id: 13,
    name: "Apel Hijau13",
    src: "/assets/products/buah/apel-hijau.jpg",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
                        illo itaque, tempore magnam beatae, suscipit nemo magni officia dolore aut quasi, consequatur
                        quo.
                        Ab porro ipsa ex cumque! Tempora praesentium officiis voluptatum quos, est odit pariatur amet
                        repellendus consequatur, quae iusto. Tempore autem, obcaecati eius reiciendis amet illo numquam
                        voluptatibus.`,
    rate: 4.8,
    sold: 1250,
    initialPrice: 300000,
    discountPrice: 250000,
    stock: 2000,
  },
  {
    id: 14,
    name: "Apel Hijau14",
    src: "/assets/products/buah/apel-hijau.jpg",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
                        illo itaque, tempore magnam beatae, suscipit nemo magni officia dolore aut quasi, consequatur
                        quo.
                        Ab porro ipsa ex cumque! Tempora praesentium officiis voluptatum quos, est odit pariatur amet
                        repellendus consequatur, quae iusto. Tempore autem, obcaecati eius reiciendis amet illo numquam
                        voluptatibus.`,
    rate: 4.8,
    sold: 1250,
    initialPrice: 30000,
    discountPrice: 25000,
    stock: 2000,
  },
  {
    id: 15,
    name: "Apel Hijau15",
    src: "/assets/products/buah/apel-hijau.jpg",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
                        illo itaque, tempore magnam beatae, suscipit nemo magni officia dolore aut quasi, consequatur
                        quo.
                        Ab porro ipsa ex cumque! Tempora praesentium officiis voluptatum quos, est odit pariatur amet
                        repellendus consequatur, quae iusto. Tempore autem, obcaecati eius reiciendis amet illo numquam
                        voluptatibus.`,
    rate: 4.8,
    sold: 1250,
    initialPrice: 30000,
    discountPrice: 25000,
    stock: 2000,
  },
  {
    id: 16,
    name: "Apel Hijau16",
    src: "/assets/products/buah/apel-hijau.jpg",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
                        illo itaque, tempore magnam beatae, suscipit nemo magni officia dolore aut quasi, consequatur
                        quo.
                        Ab porro ipsa ex cumque! Tempora praesentium officiis voluptatum quos, est odit pariatur amet
                        repellendus consequatur, quae iusto. Tempore autem, obcaecati eius reiciendis amet illo numquam
                        voluptatibus.`,
    rate: 4.8,
    sold: 1250,
    initialPrice: 30000,
    discountPrice: 25000,
    stock: 2000,
  },
];

function ProductDetailsFragment() {
  const { id } = useParams();

  const [isTotalCart, setTotalCart] = useState(1);

  const [product] = products.filter((product) => product.id == id);

  const [isTotalPrice, setTotalPrice] = useState(product.discountPrice);

  useEffect(() => {
    setTotalPrice(product.discountPrice * isTotalCart);
  }, [isTotalCart, product.discountPrice]);

  if (product) {
    return (
      <main className="px-5 sm:px-14 pb-14 pt-24 sm:pt-36 lg:pt-0 sm:h-screen xl:bg-teal-800">
        <section className="lg:flex lg:items-center lg:w-1/2 lg:min-h-screen lg:mx-auto">
          <figure className="lg:flex lg:items-center lg:gap-10 lg:h-max xl:bg-gray-200 lg:px-10 lg:pt-5 lg:pb-14">
            <img
              src={product.src}
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
                {product.discountPrice.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
              </p>

              <p className="text-lg text-teal-700 font-semibold mt-3">
                {isTotalPrice == product.discountPrice
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
}

export default ProductDetailsFragment;
