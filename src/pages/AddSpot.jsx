import { toast } from "react-toastify";

const AddSpot = () => {

    const handleAddSpot = (e) => {
        e.preventDefault();
        const form = e.target;
        console.log(form.country.value);

    }

    return (
        <div className="container mx-auto min-h-[calc(100vh-116px)] px-6 md:px-8 py-6 md:py-8 lg:py-12">
            <div className="lg:w-2/3 mx-auto">
                <div className="text-left">
                    <h3 className="max-w-max pb-2 mb-4 lg:mb-6 border-[#FA7070] text-2xl md:text-3xl lg:text-4xl font-semibold border-b-4">Add a new tourist spot</h3>
                    <p className="opacity-80 mb-6 md:mb-8 lg:mb-12">Explore our newest addition: a hidden gem nestled amidst breathtaking landscapes, offering unparalleled beauty, cultural richness, and unforgettable experiences for travelers.</p>
                </div>
                <form onSubmit={handleAddSpot} className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Select country</span>
                        </div>
                        <select name="country" className="select select-bordered border-[#A1C398] focus:outline-none focus:border-[#FA7070]">
                            <option value="France">France</option>
                            <option value="Italy">Italy</option>
                            <option value="Spain">Spain</option>
                            <option value="England">England</option>
                            <option value="Netherlands">Netherlands</option>
                            <option value="Swizerland">Swizerland</option>
                        </select>
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Spot name</span>
                        </div>
                        <input type="text" name="spot" placeholder="Type spot name" className="input input-bordered w-full border-[#A1C398] focus:outline-none focus:border-[#FA7070]" />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Location</span>
                        </div>
                        <input type="text" name="location" placeholder="Type location" className="input input-bordered w-full border-[#A1C398] focus:outline-none focus:border-[#FA7070]" />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Average Cost</span>
                        </div>
                        <input type="cost" name="location" placeholder="Type average cost" className="input input-bordered w-full border-[#A1C398] focus:outline-none focus:border-[#FA7070]" />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Seasonality</span>
                        </div>
                        <input type="cost" name="season" placeholder="Type seasonality" className="input input-bordered w-full border-[#A1C398] focus:outline-none focus:border-[#FA7070]" />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Travel time</span>
                        </div>
                        <input type="cost" name="time" placeholder="Type travel time" className="input input-bordered w-full border-[#A1C398] focus:outline-none focus:border-[#FA7070]" />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Total visitors</span>
                        </div>
                        <input type="cost" name="visitors" placeholder="Type total visitors" className="input input-bordered w-full border-[#A1C398] focus:outline-none focus:border-[#FA7070]" />
                    </label>
                    <label className="form-control md:col-span-2">
                        <div className="label">
                            <span className="label-text">Details</span>
                        </div>
                        <textarea name="details" className="textarea textarea-bordered h-24 border-[#A1C398] focus:outline-none focus:border-[#FA7070]" placeholder="Type details"></textarea>
                    </label>
                    <label className="form-control w-full md:col-span-2">
                        <div className="label">
                            <span className="label-text">Photo URL</span>
                        </div>
                        <input type="cost" name="photo" placeholder="Type photo url" className="input input-bordered w-full border-[#A1C398] focus:outline-none focus:border-[#FA7070]" />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Your name</span>
                        </div>
                        <input type="cost" name="name" placeholder="Type your name" className="input input-bordered w-full border-[#A1C398] focus:outline-none focus:border-[#FA7070]" />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Your email</span>
                        </div>
                        <input type="cost" name="photo" placeholder="Type your email" className="input input-bordered w-full border-[#A1C398] focus:outline-none focus:border-[#FA7070]" />
                    </label>
                    <div className="md:col-span-2 mt-5">
                        <button className="btn w-full bg-[#A1C398] text-white text-lg">Add Spot</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddSpot;