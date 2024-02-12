import Footer from "./components/fragments/footer";
import Navbar from "./components/fragments/navbar";
import LinkLayout from "./components/layouts/linkLayout";

function App() {
  return (
    <>
      <header>
        <Navbar />

        <section className="relative h-screen">
          <div className="absolute z-20 w-full px-3 sm:px-14 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-center">
            <hr className="mb-5 lg:mb-10" />
            <h1 className="text-neutral-100 text-3xl lg:text-8xl font-semibold">
              Welcome to PrasOrganic!
            </h1>
            <p className="text-neutral-200 text-xl lg:text-3xl mt-3 ">
              Find a wide selection of organic products, from healthy foods to
              natural care products. All designed to provide comprehensive
              natural goodness for you to enjoy.
            </p>
            <hr className="mt-5 lg:mt-10" />

            <LinkLayout type="START_SHOPING" />
          </div>
          <img
            src="assets/hero/main-hero.jpg"
            alt=""
            className="object-cover h-full w-full brightness-50 z-10"
          />
        </section>
      </header>

      <main className="mt-14 xl:mt-0 flex flex-col gap-14 xl:gap-20">
        <figure className="xl:grid xl:grid-cols-2 xl:items-center xl:border-t-4 xl:border-b-4">
          <figcaption className="px-5 sm:px-14 text-center">
            <header>
              <h1 className="text-4xl xl:text-6xl text-teal-700 font-semibold tracking-wide">
                Tentang kami
              </h1>
              <i className="fa-brands fa-envira text-3xl xl:text-4xl text-teal-700 mt-5"></i>
            </header>
            <article className="xl:text-xl xl:mt-10">
              <p className="mt-5">
                PrasOrganic adalah E-Commerce yang menawarkan pilihan
                buah-buahan organik berkualitas premium. Produk kami terjamin
                segar, bebas pestisida, dan diproses dengan cermat untuk menjaga
                keautentikan rasa.
              </p>
              <p className="mt-5">
                Kami memprioritaskan kelestarian dan kesehatan, menyediakan opsi
                sehat tanpa bahan kimia berbahaya. Dengan komitmen pada
                pertanian lokal dan lingkungan, PrasOrganic menghadirkan inovasi
                dalam setiap produk, memberikan pengalaman berbelanja yang sehat
                dan bertanggung jawab.
              </p>
            </article>

            <LinkLayout type="SELENGKAPNYA" />
          </figcaption>
          <img
            src="assets/hero/second-hero.jpg"
            alt="sayur organik"
            className="brightness-75 mt-10 xl:mt-0"
          />
        </figure>

        <section className="px-7 lg:px-40">
          <header className="text-center">
            <h1 className="text-4xl lg:text-6xl text-teal-700 font-semibold tracking-wide">
              Top Products
            </h1>
            <i className="fa-brands fa-envira text-3xl lg:text-4xl text-teal-700 mt-5"></i>
            <p className="mt-3 italic lg:text-xl">
              Temukan product unggulan dari kami
            </p>
          </header>

          <div className="flex justify-between lg:justify-center lg:gap-24 mt-7 lg:mt-14 ">
            <i className="fa-solid fa-chevron-left text-teal-700 px-3 py-2 border rounded-full"></i>
            <i className="fa-solid fa-chevron-right text-white bg-teal-700 hover:bg-teal-800 px-3 py-2 border rounded-full"></i>
          </div>

          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            <figure className="shadow-xl">
              <img
                src="assets/products/buah/apel-hijau.jpg"
                alt="apel hijau"
                className="rounded-t-2xl"
              />
              <figcaption className="px-5 lg:px-7 pt-5 lg:pt-7 pb-7 lg:pb-10 border-s border-e border-b">
                <h1 className="text-2xl font-semibold text-teal-700">
                  Apel Hijau
                </h1>
                <div className="flex gap-5 mt-2">
                  <p className="text-orange-400 font-semibold">
                    4.8 <i className="fa-solid fa-star"></i>
                  </p>
                  <p>| Terjual 1250</p>
                </div>
                <p className="mt-2">
                  <span className="line-through">RP30.000,00</span>
                  <strong className="text-gray-700">RP25.000,00</strong>
                </p>

                <LinkLayout type="BELI" />
              </figcaption>
            </figure>

            <figure className="shadow-xl">
              <img
                src="assets/products/buah/apel-hijau.jpg"
                alt="apel hijau"
                className="rounded-t-2xl"
              />
              <figcaption className="px-5 lg:px-7 pt-5 lg:pt-7 pb-7 lg:pb-10 border-s border-e border-b">
                <h1 className="text-2xl font-semibold text-teal-700">
                  Apel Hijau
                </h1>
                <div className="flex gap-5 mt-2">
                  <p className="text-orange-400 font-semibold">
                    4.8 <i className="fa-solid fa-star"></i>
                  </p>
                  <p>| Terjual 1250</p>
                </div>
                <p className="mt-2">
                  <span className="line-through">RP30.000,00</span>
                  <strong className="text-gray-700">RP25.000,00</strong>
                </p>
                <LinkLayout type="BELI" />
              </figcaption>
            </figure>

            <figure className="shadow-xl">
              <img
                src="assets/products/buah/apel-hijau.jpg"
                alt="apel hijau"
                className="rounded-t-2xl"
              />
              <figcaption className="px-5 lg:px-7 pt-5 lg:pt-7 pb-7 lg:pb-10 border-s border-e border-b">
                <h1 className="text-2xl font-semibold text-teal-700">
                  Apel Hijau
                </h1>
                <div className="flex gap-5 mt-2">
                  <p className="text-orange-400 font-semibold">
                    4.8 <i className="fa-solid fa-star"></i>
                  </p>
                  <p>| Terjual 1250</p>
                </div>
                <p className="mt-2">
                  <span className="line-through">RP30.000,00</span>
                  <strong className="text-gray-700">RP25.000,00</strong>
                </p>
                <LinkLayout type="BELI" />
              </figcaption>
            </figure>

            <figure className="shadow-xl lg:hidden">
              <img
                src="assets/products/buah/apel-hijau.jpg"
                alt="apel hijau"
                className="rounded-t-2xl"
              />
              <figcaption className="px-5 lg:px-7 pt-5 lg:pt-7 pb-7 lg:pb-10 border-s border-e border-b">
                <h1 className="text-2xl font-semibold text-teal-700">
                  Apel Hijau
                </h1>
                <div className="flex gap-5 mt-2">
                  <p className="text-orange-400 font-semibold">
                    4.8 <i className="fa-solid fa-star"></i>
                  </p>
                  <p>| Terjual 1250</p>
                </div>
                <p className="mt-2">
                  <span className="line-through">RP30.000,00</span>
                  <strong className="text-gray-700">RP25.000,00</strong>
                </p>
                <LinkLayout type="BELI" />
              </figcaption>
            </figure>
          </section>
        </section>

        <figure className="relative h-screen w-full">
          <img
            src="assets/hero/store-point.jpg"
            alt="buah anggur"
            className="z-10 absolute object-cover h-full w-full brightness-50"
          />
          <figcaption className="absolute z-20 top-1/2 -translate-y-1/2 w-full flex justify-center px-5 sm:px-14">
            <div className="text-center">
              <header>
                <h1 className="text-4xl lg:text-6xl text-teal-400 text-center font-semibold tracking-wide">
                  Store Point
                </h1>
                <i className="fa-brands fa-envira text-3xl lg:text-4xl text-teal-400 mt-5"></i>
                <p className="text-neutral-100 text-2xl mt-5">
                  Lorem ipsum, dolor sit amet consectetur adipisicing.
                </p>
              </header>
              <blockquote className="text-neutral-300 lg:text-xl italic mt-10">
                &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facere a consequatur reprehenderit, eligendi esse delectus
                quidem.&quot;
              </blockquote>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
                <figure className="border rounded-xl py-3 sm:py-5 lg:py-7">
                  <h2 className="font-bold text-teal-400 text-xl sm:text-2xl lg:text-4xl">
                    500+
                  </h2>
                  <figcaption className="text-neutral-50 sm:text-xl lg:text-2xl">
                    Hectares Of Farm
                  </figcaption>
                </figure>

                <figure className="border rounded-xl py-3 sm:py-5 lg:py-7">
                  <h2 className="font-bold text-teal-400 text-xl sm:text-2xl lg:text-4xl">
                    200
                  </h2>
                  <figcaption className="text-neutral-50 sm:text-xl lg:text-2xl">
                    Branch Stores
                  </figcaption>
                </figure>

                <figure className="border rounded-xl py-3 sm:py-5 lg:py-7">
                  <h2 className="font-bold text-teal-400 text-xl sm:text-2xl lg:text-4xl">
                    10
                  </h2>
                  <figcaption className="text-neutral-50 sm:text-xl lg:text-2xl">
                    Organic Certificates
                  </figcaption>
                </figure>

                <figure className="border rounded-xl py-3 sm:py-5 lg:py-7">
                  <h2 className="font-bold text-teal-400 text-xl sm:text-2xl lg:text-4xl">
                    10k+
                  </h2>
                  <figcaption className="text-neutral-50 sm:text-xl lg:text-2xl">
                    Happy Customer
                  </figcaption>
                </figure>
              </div>
            </div>
          </figcaption>
        </figure>

        <section className="text-center xl:h-[60vh] xl:grid xl:grid-cols-1 xl:content-center">
          <header>
            <h1 className="text-4xl xl:text-7xl text-teal-700 font-semibold tracking-wide">
              Layanan
            </h1>
            <i className="fa-brands fa-envira text-3xl xl:text-5xl text-teal-700 mt-5"></i>
            <p className="mt-3 italic xl:text-2xl">
              kategori layanan terbaik dari kami
            </p>
          </header>

          <div className="flex flex-col xl:flex-row gap-5 sm:gap-7 mt-7 xl:mt-14 px-7 sm:px-24 xl:px-40">
            <figure className="border rounded-2xl shadow-xl px-5 xl:px-7 py-7 xl:py-10">
              <i className="fa-solid fa-apple-whole text-6xl xl:text-9xl text-teal-700"></i>
              <figcaption className="mt-5 xl:mt-7">
                <h2 className="text-xl xl:text-2xl font-bold">
                  Produk Organik Pilihan
                </h2>
                <p className="mt-3 xl:text-xl">
                  Rasakan Keunggulan Produk Organik Terbaik di Toko Kami! Produk
                  berkualitas dan juga memberikan manfaat kesehatan untuk Anda.
                </p>
              </figcaption>
            </figure>

            <figure className="border rounded-2xl shadow-xl px-5 xl:px-7 py-7 xl:py-10">
              <i className="fa-solid fa-wallet text-6xl xl:text-9xl text-teal-700"></i>
              <figcaption className="mt-5 xl:mt-7">
                <h2 className="text-xl xl:text-2xl font-bold">
                  Harga Terjangkau
                </h2>
                <p className="mt-3 xl:text-xl">
                  Bukan hanya kualitas, kami juga menawarkan produk berkualitas
                  tinggi dengan harga yang ramah di kantong. Temukan nilai
                  terbaik hanya di toko kami
                </p>
              </figcaption>
            </figure>

            <figure className="border rounded-2xl shadow-xl px-5 xl:px-7 py-7 xl:py-10">
              <i className="fa-solid fa-list-check text-6xl xl:text-9xl text-teal-700"></i>
              <figcaption className="mt-5 xl:mt-7">
                <h2 className="text-xl xl:text-2xl font-bold">
                  Pesan Dengan Mudah
                </h2>
                <p className="mt-3 xl:text-xl">
                  Nikmati kemudahan pemesanan dengan langkah-langkah yang
                  sederhana. Dapatkan produk organik pilihan Anda dalam hitungan
                  detik. Pengalaman belanja yang praktis dan tanpa ribet.
                </p>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="hidden">Belum Jadi</section>
      </main>

      <Footer />
    </>
  );
}

export default App;
