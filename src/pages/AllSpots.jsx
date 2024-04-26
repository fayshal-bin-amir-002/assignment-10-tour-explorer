import { useLoaderData } from "react-router-dom";
import TouristSpotCard from "../components/TouristSpotCard";
import { useState } from "react";

const AllSpots = () => {

    const spots = useLoaderData();
    const [seeMore, setSeeMore] = useState(9);

    return (
        <div className="container mx-auto px-6 md:px-12 lg:px-24 my-6 md:my-8 lg:my-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {
                    spots.slice(0, seeMore).map((spot) => <TouristSpotCard key={spot._id} spot={spot}></TouristSpotCard>)
                }
            </div>
            <div className="pt-6 md:pt-8 lg:pt-12 text-center">
                {
                    spots.length !== seeMore ?
                        <button className="btn bg-[#A1C398] text-white text-lg" onClick={() => setSeeMore(spots.length)}>See More</button> :
                        <button className="btn bg-[#A1C398] text-white text-lg" onClick={() => setSeeMore(9)}>See Less</button>
                }
            </div>
        </div>
    );
};

export default AllSpots;