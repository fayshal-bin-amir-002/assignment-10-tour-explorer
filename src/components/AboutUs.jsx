import img1 from "../assets/ammie-ngo-vcu-OZBxxRk-unsplash.jpg";
import img2 from "../assets/andy-holmes-0LJCEORiYg8-unsplash.jpg";
import img3 from "../assets/datingscout-BmfXYrGqKJw-unsplash.jpg"
import img4 from "../assets//priscilla-du-preez-KoF1cXdF9Ws-unsplash.jpg";

const AboutUs = () => {
    return (
        <div className="mb-6 md:mb-12 lg:mb-24 container mx-auto px-6">
            <div className="lg:w-1/2 mx-auto text-center">
                <h3 className="max-w-max mx-auto pb-2 mb-4 lg:mb-6 border-[#FA7070] text-2xl md:text-3xl lg:text-4xl font-semibold border-b-4">About Us</h3>
                <p className="opacity-80 mb-6 md:mb-8 lg:mb-12">We&apos;re passionate adventurers dedicated to curating unforgettable experiences. With expertise and care, we craft journeys that inspire and memories that last.</p>
            </div>
            <div className="grid gap-4 md:gap-6 grid-cols-1 lg:grid-cols-2">
                <div>
                    <h2 className="text-3xl lg:text-5xl font-semibold mb-4">Our Story - Crafting Memorable Journeys</h2>
                    <p className="opacity-80 mb-4 md:mb-8">Driven by passion, we craft unforgettable travel experiences, seamlessly blending adventure, culture, and discovery. Our dedicated team ensures every journey is meticulously curated, from inception to return. Beyond itineraries, we create narratives that unfold in captivating destinations, fostering connections and personal growth. More than a travel company, we&apos;re storytellers, inviting you to embark on transformative journeys that create cherished memories and enrich your life.</p>
                    <button className="btn bg-[#A1C398] text-white text-lg">More About</button>
                </div>
                <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-12 md:grid-rows-12 gap-4">
                    <div className="md:col-span-6 md:row-span-6">
                        <img src={img1} className="rounded-lg shadow-md" />
                    </div>
                    <div className="md:col-start-2 md:col-end-7 md:row-span-5">
                        <img src={img2} className="rounded-lg shadow-md" />
                    </div>
                    <div className="md:col-start-7 md:col-end-12 md:row-start-2 md:row-end-7">
                        <img src={img3} className="rounded-lg shadow-md" />
                    </div>
                    <div className="md:row-start-7 md:row-end-13 md:col-start-7 md:col-end-13">
                        <img src={img4} className="rounded-lg shadow-md" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;