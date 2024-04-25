import world  from "../assets/icons8-favicon-94.png";
import support from "../assets/icons8-support-96.png";
import guide from "../assets/icons8-guide-100.png";

const WeBest = () => {
    return (
        <div className="mb-6 md:mb-12 lg:mb-24 container mx-auto px-6">
            <div className="lg:w-1/2 mx-auto text-center">
                <h3 className="max-w-max mx-auto pb-2 mb-4 lg:mb-6 border-[#FA7070] text-2xl md:text-3xl lg:text-4xl font-semibold border-b-4">Why we are the best?</h3>
                <p className="opacity-80 mb-6 md:mb-8 lg:mb-12">Experience excellence with us. Our commitment to quality, personalized service, and passion for creating unforgettable experiences sets us apart. Discover the difference today.</p>
            </div>
            <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex items-center gap-4 p-6 bg-[#C6EBC5] rounded-lg">
                    <div>
                        <img src={world} alt="icon" className="w-[200px]" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Global Expansion</h3>
                        <p className="opacity-80">Expanding globally to reach diverse audiences, connections across borders for unparalleled accessibility.</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 p-6 bg-[#FEFDED] rounded-lg">
                    <div className="w-1/2">
                        <img src={guide} alt="icon" className="w-full" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">The Ultimate Guide</h3>
                        <p className="opacity-80">Unlock insider tips and expert advice for unforgettable adventures.</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 p-6 bg-[#C6EBC5] rounded-lg">
                    <div>
                        <img src={support} alt="icon" className="w-[120px]" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">24/7 Support</h3>
                        <p className="opacity-80">Always here, anytime, anywhere, for all your travel needs.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeBest;