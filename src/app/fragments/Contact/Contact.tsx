function ContactFragment() {
    return (
        <main className="px-5 sm:px-14 w-full h-max sm:h-screen pt-24 sm:pt-32 pb-14 xl:bg-teal-700">
            <section
                className="lg:bg-gray-100 lg:w-5/6 lg:mx-auto lg:mt-7 lg:flex lg:flex-row lg:items-center lg:gap-10 lg:px-7 lg:py-10">
                <section className="hidden lg:flex flex-col gap-7 pe-5 border-r-2 border-teal-700">
                    <div className="text-center">
                        <i className="fa-solid fa-location-dot text-teal-700 text-5xl"></i>
                        <h1 className="text- font-semibold mt-5">Address</h1>
                        <p className="text- w-3/4 mx-auto">Goatan Street, Northen District, Pantura States</p>
                    </div>

                    <div className="text-center">
                        <i className="fa-brands fa-whatsapp text-teal-700 text-5xl"></i>
                        <h1 className="text- font-semibold mt-5">Whatsapp</h1>
                        <p className="text-">+62 812345678</p>
                    </div>

                    <div className="text-center">
                        <i className="fa-solid fa-envelope text-teal-700 text-5xl"></i>
                        <h1 className="text- font-semibold mt-5">Email</h1>
                        <p className="text-">info@prasorganic.com</p>
                    </div>
                </section>

                <section>
                    <h1 className="flex items-center gap-3 text-2xl text-teal-700 font-semibold">
                        <hr className="w-14" />
                        Send us a message
                    </h1>
                    <p className="text-gray-800 mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque,
                        tenetur
                        voluptate. Adipisci
                        placeat
                        molestiae obcaecati reiciendis impedit! Eius placeat vitae adipisci ducimus sit. Ipsa, earum!</p>
                    <form method="post" className="flex flex-col gap-5 mt-7">
                        <input className="border border-gray-800 px-3 py-1 w-full focus:outline-teal-700" type="text"
                            placeholder="Enter Your Name" required />
                        <input className="border border-gray-800 px-3 py-1 w-full focus:outline-teal-700" type="email"
                            name="email" id="email" placeholder="Enter Your Email" required />
                        <textarea className="border border-gray-800 px-3 py-1 w-full focus:outline-teal-700" name="" id=""
                            cols={50} rows={10} placeholder="Enter Your Message" required></textarea>
                        <button
                            disabled
                            className="bg-teal-700 hover:bg-teal-800 px-3 py-1 mt-7 sm:mt-14 text-neutral-50 w-max rounded-lg"
                            type="submit">Send
                            Message</button>
                    </form>
                </section>
            </section>

        </main>
    )
}

export default ContactFragment;