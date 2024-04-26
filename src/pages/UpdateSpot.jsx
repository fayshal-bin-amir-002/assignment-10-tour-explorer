import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2';

const UpdateSpot = () => {

    const spot = useLoaderData();

    const { _id, country_Name, tourist_spot_name, location, average_cost, seasonality, travel_time, totalVisitorsPerYear, shortdescription, image } = spot;

    const handleUpdateSpot = (e) => {
        e.preventDefault();
        const form = e.target;
        const country_Name = form.country.value;
        const tourist_spot_name = form.spot.value;
        const location = form.location.value;
        const average_cost = form.cost.value;
        const seasonality = form.season.value;
        const travel_time = form.time.value;
        const totalVisitorsPerYear = form.visitors.value;
        const shortdescription = form.details.value;
        const image = form.photo.value;

        const updatedSpot = { country_Name, tourist_spot_name, location, average_cost, seasonality, travel_time, totalVisitorsPerYear, shortdescription, image };

        Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/touristSpots/${_id}`, {
                    method: "PATCH",
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(updatedSpot)
                })
                    .then((res) => res.json())
                    .then(() => {
                        Swal.fire("Saved!", "", "success");
                    })
            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });
    }

    return (
        <div className="container mx-auto min-h-[calc(100vh-116px)] px-6 md:px-8 py-6 md:py-8 lg:py-12">
            <div className="lg:w-2/3 mx-auto">
                <div className="text-left">
                    <h3 className="max-w-max pb-2 mb-4 lg:mb-6 border-[#FA7070] text-2xl md:text-3xl lg:text-4xl font-semibold border-b-4">Update your tourist spot</h3>
                    <p className="opacity-80 mb-6 md:mb-8 lg:mb-12">Discover our latest addition: an enchanting oasis blending natural beauty, cultural richness, and unique experiences, promising unforgettable moments for intrepid travelers.</p>
                </div>
                <form onSubmit={handleUpdateSpot} className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Select country</span>
                        </div>
                        <select name="country" defaultValue={country_Name} className="select select-bordered border-[#A1C398] focus:outline-none focus:border-[#FA7070]">
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
                        <input type="text" name="spot" defaultValue={tourist_spot_name} placeholder="Type spot name" className="input input-bordered w-full border-[#A1C398] focus:outline-none focus:border-[#FA7070]" required />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Location</span>
                        </div>
                        <input type="text" defaultValue={location} name="location" placeholder="Type location" className="input input-bordered w-full border-[#A1C398] focus:outline-none focus:border-[#FA7070]" required />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Average Cost</span>
                        </div>
                        <input type="cost" name="cost" defaultValue={average_cost} placeholder="Type average cost" className="input input-bordered w-full border-[#A1C398] focus:outline-none focus:border-[#FA7070]" required />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Seasonality</span>
                        </div>
                        <input type="cost" defaultValue={seasonality} name="season" placeholder="Type seasonality" className="input input-bordered w-full border-[#A1C398] focus:outline-none focus:border-[#FA7070]" required />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Travel time</span>
                        </div>
                        <input type="cost" defaultValue={travel_time} name="time" placeholder="Type travel time" className="input input-bordered w-full border-[#A1C398] focus:outline-none focus:border-[#FA7070]" required />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Total visitors</span>
                        </div>
                        <input type="cost" defaultValue={totalVisitorsPerYear} name="visitors" placeholder="Type total visitors" className="input input-bordered w-full border-[#A1C398] focus:outline-none focus:border-[#FA7070]" required />
                    </label>
                    <label className="form-control md:col-span-2">
                        <div className="label">
                            <span className="label-text">Details</span>
                        </div>
                        <textarea name="details" defaultValue={shortdescription} className="textarea textarea-bordered h-24 border-[#A1C398] focus:outline-none focus:border-[#FA7070]" placeholder="Type details" required></textarea>
                    </label>
                    <label className="form-control w-full md:col-span-2">
                        <div className="label">
                            <span className="label-text">Photo URL</span>
                        </div>
                        <input type="cost" name="photo" defaultValue={image} placeholder="Type photo url" className="input input-bordered w-full border-[#A1C398] focus:outline-none focus:border-[#FA7070]" required />
                    </label>
                    <div className="md:col-span-2 mt-5">
                        <button className="btn w-full bg-[#A1C398] text-white text-lg">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateSpot;