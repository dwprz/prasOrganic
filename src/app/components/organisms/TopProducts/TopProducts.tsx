import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination, Navigation } from "swiper/modules";
import ButtonLayout from "../../../layouts/ButtonLayout";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

const topProducts = [
  {
    id: 1,
    name: "Apel Hijau",
    src: "assets/products/buah/apel-hijau.jpg",
    rate: 4.8,
    sold: 1250,
    initialPrice: 30000,
    discountPrice: 25000,
    stock: 2000,
  },
  {
    id: 2,
    name: "Apel Hijau",
    src: "assets/products/buah/apel-hijau.jpg",
    rate: 4.8,
    sold: 1250,
    initialPrice: 30000,
    discountPrice: 25000,
    stock: 2000,
  },
  {
    id: 3,
    name: "Apel Hijau",
    src: "assets/products/buah/apel-hijau.jpg",
    rate: 4.8,
    sold: 1250,
    initialPrice: 30000,
    discountPrice: 25000,
    stock: 2000,
  },
  {
    id: 4,
    name: "Apel Hijau",
    src: "assets/products/buah/apel-hijau.jpg",
    rate: 4.8,
    sold: 1250,
    initialPrice: 30000,
    discountPrice: 25000,
    stock: 2000,
  },
  {
    id: 5,
    name: "Apel Hijau",
    src: "assets/products/buah/apel-hijau.jpg",
    rate: 4.8,
    sold: 1250,
    initialPrice: 300000,
    discountPrice: 250000,
    stock: 2000,
  },
  {
    id: 6,
    name: "Apel Hijau",
    src: "assets/products/buah/apel-hijau.jpg",
    rate: 4.8,
    sold: 1250,
    initialPrice: 30000,
    discountPrice: 25000,
    stock: 2000,
  },
  {
    id: 7,
    name: "Apel Hijau",
    src: "assets/products/buah/apel-hijau.jpg",
    rate: 4.8,
    sold: 1250,
    initialPrice: 30000,
    discountPrice: 25000,
    stock: 2000,
  },
  {
    id: 8,
    name: "Apel Hijau",
    src: "assets/products/buah/apel-hijau.jpg",
    rate: 4.8,
    sold: 1250,
    initialPrice: 30000,
    discountPrice: 25000,
    stock: 2000,
  },
];

function TopProducts() {
  return (
    <div className="swiper-container h-max sm:h-[56rem] xl:h-[40rem] mt-14 xl:mt-0">
      <Swiper
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            grid: {
              rows: 4,
            },
            spaceBetween: 30,
            pagination: false,
            allowSlideNext: false,
            allowSlidePrev: false,
          },
          640: {
            slidesPerView: 2,
            grid: {
              rows: 2,
            },
            spaceBetween: 10,
            pagination: {
              clickable: true,
            },
            allowSlideNext: true,
            allowSlidePrev: true,
          },
          1024: {
            slidesPerView: 3,
            grid: {
              rows: 2,
            },
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 4,
            slidesPerGroup: 2,
          },
        }}
        modules={[Grid, Pagination, Navigation]}
        className="mySwiper"
      >
        {topProducts &&
          topProducts.map((product, index) => {
            return (
              <SwiperSlide key={product.id}>
                <figure
                  className={`shadow-xl sm:w-[20rem] xl:w-[17rem] 2xl:w-[22rem] ${index > 3 ? "hidden sm:block" : ""
                    }`}
                >
                  <img
                    src="assets/products/buah/apel-hijau.jpg"
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
                      <p>{`| Terjual ${product.sold > 1000
                          ? String(product.sold / 1000 + "K+")
                          : product.sold
                        }`}</p>
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

                    <div className="flex justify-between items-center mt-7">
                      <ButtonLayout
                        type="BELI"
                        to={"#"}
                      />
                      <span className="text-gray-700">
                        <b>Stock:</b>
                        {`${product.stock} kg`}
                      </span>
                    </div>
                  </figcaption>
                </figure>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}

export default TopProducts;
