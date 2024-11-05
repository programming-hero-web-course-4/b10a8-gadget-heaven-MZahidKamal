const AboutUs = () => {
    return (


        <div className={'bg-[#f7f7f7] max-h-fit pb-60'}>
            <div className="bg-[#9538e2]">
                <div
                    className={'container mx-auto text-white flex flex-col justify-center items-center pt-10 pb-10 gap-y-5'}>
                    <h1 className={'text-4xl font-bold w-9/12 text-center leading-snug'}>About Us</h1>
                    <p className={'text-base font-normal w-6/12 text-center leading-loose'}>Explore the latest
                        gadgets that will take your experience to the next level. From smart devices to the
                        coolest accessories, we have it all!</p>
                </div>
            </div>
            <div className={'container mx-auto px-10'}>
                <div className="container mx-auto px-4 py-10 space-y-10">
                    <section className="flex flex-col lg:flex-row items-center gap-8">
                        <div className="lg:w-1/2 space-y-8">
                            <h2 className="text-2xl font-bold text-gray-800">Our Cutting Edge Technology</h2>
                            <p className="text-gray-700 text-justify leading-relaxed">Welcome to our Electronics Gadgets store! We are passionate about bringing you the latest and greatest in electronic devices, from smartphones and laptops to smart home products and accessories. Our mission is to make technology accessible and enjoyable for everyone, whether you are a tech enthusiast or just looking for an upgrade.</p>
                            <p className="text-gray-700 text-justify leading-relaxed">Established in Berlin, our company has grown from a small team of tech lovers to a leading online store for electronics. We believe in providing top-notch products, competitive prices, and exceptional customer service. Join us as we explore the world of innovation and cutting-edge technology!</p>
                        </div>
                        <div className="lg:w-1/2 flex justify-center items-center">
                            <img src="/public/assets/images/About_Us_01.png" alt="Electronics gadgets overview" className="w-10/12 rounded-lg shadow-lg"/>
                        </div>
                    </section>

                    <section className="flex flex-col lg:flex-row-reverse items-center gap-8">
                        <div className="lg:w-1/2 space-y-8">
                            <h3 className="text-2xl font-bold text-gray-800">Our Values & Commitment</h3>
                            <p className="text-gray-700 text-justify leading-relaxed">We are committed to providing our customers with an excellent shopping experience. Our team carefully curates every product in our catalog to ensure quality and reliability. We also offer extensive product information and guidance, helping you make informed decisions with ease.</p>
                            <p className="text-gray-700 text-justify leading-relaxed">Customer satisfaction is at the heart of everything we do. From our responsive customer service to our easy returns policy, we strive to make shopping with us as convenient as possible. Thank you for choosing us as your trusted electronics partner!</p>
                        </div>
                        <div className="lg:w-1/2 flex justify-center items-center">
                            <img src="/public/assets/images/About_Us_02.png" alt="Customer support team" className="w-10/12 rounded-lg shadow-lg"/>
                        </div>
                    </section>
                </div>

            </div>
        </div>
    );
};

export default AboutUs;
