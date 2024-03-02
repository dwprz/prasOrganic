import { Link } from "react-router-dom";

function AboutFrgament() {
    return (
        <main>
            <section className="relative h-screen border-b-2 xl:border-b-4 border-gray-800">
                <img src="/assets/about/grocery.jpg" alt="" className="object-cover brightness-50 h-full w-full" />
                <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 px-5 text-center w-full">
                    <header>
                        <h1 className="font-semibold text-2xl xl:text-4xl text-white">About Us</h1>
                        <hr className="border-primary border-[1.5px] w-1/3 mx-auto xl:mt-3" />
                    </header>
                    <p className="mt-3 xl:mt-7 xl:w-1/2 xl:mx-auto xl:text-lg text-neutral-300">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore ut numquam veniam error labore
                        eaque
                        corporis non voluptas nostrum aperiam?
                    </p>
                </div>
            </section>

            <figure className="flex flex-col xl:flex-row xl:items-center xl:h-[50vh]">
                <img src="../../assets/about/gemma.jpg" alt="" className="xl:w-1/2 h-[50vh] xl:h-full object-cover brightness-75 order-2 xl:order-1" />
                <figcaption className="px-5 sm:px-14 py-5 sm:py-10 xl:w-1/2 xl:px-14 order-1 xl:order-2">
                    <h1 className="font-bold italic text-xl text-teal-700">"Hidup Sehat, Jejak Keberlanjutan"</h1>
                    <p className="mt-3 text-justify text-gray-800">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ipsa ipsam adipisci earum quas
                        magnam iusto sit facere odit minus fugit non, tempore illo! Possimus enim dolore cumque minus? Sunt
                        repudiandae possimus excepturi, a dolor dolorum mollitia commodi nisi facere dolores omnis?
                        Consectetur repellat ullam vitae! Nesciunt architecto repudiandae iusto mollitia esse aperiam
                        dolorum reprehenderit accusantium, vitae, aspernatur corrupti. Architecto sapiente nostrum esse, ab
                        fugit dolores odit soluta laborum similique corporis? Laboriosam, optio explicabo possimus
                        consequuntur totam assumenda accusamus rerum, praesentium laudantium expedita eaque voluptate
                        repellat earum. Quibusdam iusto sequi, quas consequatur quia inventore ipsam ex, aperiam quis
                        repudiandae esse consequuntur nihil ullam, pariatur saepe. Nobis quis esse praesentium perferendis
                        voluptatem inventore non ad reiciendis dolorem, sequi rem iure molestiae quidem itaque fugiat modi
                        laudantium numquam architecto! Laboriosam, eveniet pariatur quia alias odit unde vero.
                    </p>
                </figcaption>
            </figure>

            <figure className="flex flex-col xl:flex-row xl:items-center  xl:h-[50vh]">
                <img src="../../assets/about/nrd.jpg" alt="" className="xl:w-1/2 h-[50vh] xl:h-full object-cover brightness-75 order-2" />
                <figcaption className="px-5 sm:px-14 py-5 sm:py-10 xl:w-1/2 xl:px-14 order-1">
                    <h1 className="font-bold italic text-xl text-teal-700">"Hidup Sehat, Jejak Keberlanjutan"</h1>
                    <p className="mt-3 text-justify text-gray-800">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ipsa ipsam adipisci earum quas
                        magnam iusto sit facere odit minus fugit non, tempore illo! Possimus enim dolore cumque minus? Sunt
                        repudiandae possimus excepturi, a dolor dolorum mollitia commodi nisi facere dolores omnis?
                        Consectetur repellat ullam vitae! Nesciunt architecto repudiandae iusto mollitia esse aperiam
                        dolorum reprehenderit accusantium, vitae, aspernatur corrupti. Architecto sapiente nostrum esse, ab
                        fugit dolores odit soluta laborum similique corporis? Laboriosam, optio explicabo possimus
                        consequuntur totam assumenda accusamus rerum, praesentium laudantium expedita eaque voluptate
                        repellat earum. Quibusdam iusto sequi, quas consequatur quia inventore ipsam ex, aperiam quis
                        repudiandae esse consequuntur nihil ullam, pariatur saepe. Nobis quis esse praesentium perferendis
                        voluptatem inventore non ad reiciendis dolorem, sequi rem iure molestiae quidem itaque fugiat modi
                        laudantium numquam architecto! Laboriosam, eveniet pariatur quia alias odit unde vero.
                    </p>
                </figcaption>
            </figure>

            <section className="flex justify-center items-center w-full h-[12vh] border-t-2 xl:border-t-4 text-center">
                <Link
                    to={"/products"}
                    className="bg-teal-700 hover:bg-teal-800 px-3 py-1 rounded-full text-white xl:text-xl"
                >
                    <i className="fa-solid fa-bag-shopping me-1"></i>
                    Start Shooping
                </Link>
            </section>

        </main>
    )
}

export default AboutFrgament;