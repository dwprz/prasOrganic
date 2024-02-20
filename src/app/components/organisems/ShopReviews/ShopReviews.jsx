import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

const reviews = [
  {
    id: 1,
    name: "Kongleong Poseidon",
    profile: "<i class='fa-solid fa-user'></i>",
    comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi blanditiis cupiditate recusandae, ab culpa modi
                    possimus cumque saepe accusantium reiciendis, vero sint amet
                    excepturi ipsam.`,
    rate: 4,
  },
  {
    id: 2,
    name: "Kongleong Poseidon",
    profile: "<i class='fa-solid fa-user'></i>",
    comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi blanditiis cupiditate recusandae, ab culpa modi
                    possimus cumque saepe accusantium reiciendis, vero sint amet
                    excepturi ipsam.`,
    rate: 5,
  },
  {
    id: 3,
    name: "Kongleong Poseidon",
    profile: "<i class='fa-solid fa-user'></i>",
    comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi blanditiis cupiditate recusandae, ab culpa modi
                    possimus cumque saepe accusantium reiciendis, vero sint amet
                    excepturi ipsam.`,
    rate: 5,
  },
  {
    id: 4,
    name: "Kongleong Poseidon",
    profile: "<i class='fa-solid fa-user'></i>",
    comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi blanditiis cupiditate recusandae, ab culpa modi
                    possimus cumque saepe accusantium reiciendis, vero sint amet
                    excepturi ipsam.`,
    rate: 5,
  },
  {
    id: 5,
    name: "Kongleong Poseidon",
    profile: "<i class='fa-solid fa-user'></i>",
    comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi blanditiis cupiditate recusandae, ab culpa modi
                    possimus cumque saepe accusantium reiciendis, vero sint amet
                    excepturi ipsam.`,
    rate: 5,
  },
];

export default function ShopReviews() {
  return (
    <div className="relative h-[27rem] 2xl:h-[36rem] 2xl:w-2/3 2xl:mx-auto">
      <Swiper 
      navigation={true} 
      pagination={true}
      spaceBetween={20}
      breakpoints={{
      }}
      modules={[Navigation, Pagination]} 
      className="mySwiper">
        {reviews &&
          reviews.map((review, index) => {
            return (
              <SwiperSlide key={index}>
                <figure className="relative text-center lg:mx-14 xl:mx-24 border 2xl:mt-14 border-teal-600 px-5 2xl:px-14 py-5 xl:py-10">
                  <i className="fa-solid fa-quote-left absolute text-3xl text-teal-600 -top-5 left-14 bg-white px-3 py-2 border border-teal-600 rounded-full"></i>
                  <i className="fa-solid fa-user text-5xl text-white border-2 bg-teal-600 px-3 py-2 rounded-full"></i>
                  <figcaption className="mt-5">
                    <h1 className="text-2xl xl:text-4xl text-teal-600 font-bold">
                      {review.name}
                    </h1>
                    <ul className="flex justify-center text-yellow-500 mt-2">
                      {[...Array(review.rate)].map((_, index) => {
                        return (
                          <li key={index}>
                            <i className="fa-solid fa-star"></i>
                          </li>
                        );
                      })}
                      {[...Array(review.rate > 0 ? 5 - review.rate : 0)].map(
                        (_, index) => {
                          return (
                            <li key={index}>
                              <i className="fa-regular fa-star"></i>
                            </li>
                          );
                        }
                      )}
                    </ul>
                    <p className="xl:text-xl mt-2 italic text-gray-700">
                      {review.comment}
                    </p>
                  </figcaption>
                </figure>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}
