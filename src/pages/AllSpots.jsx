import { useLoaderData } from "react-router-dom";
import TouristSpotCard from "../components/TouristSpotCard";
import { useState } from "react";

const AllSpots = () => {

    const loadedSpots = useLoaderData();
    const [spots, setSpots] = useState(loadedSpots);
    const [seeMore, setSeeMore] = useState(9);

    const handleSort = (txt) => {
        fetch(`http://localhost:3000/sortSpots/${txt}`)
            .then(res => res.json())
            .then(data => setSpots(data))
        
    }

    return (
        <div className="container mx-auto px-6 md:px-12 lg:px-24 my-6 md:my-8 lg:my-12">
            <div className="flex justify-center pb-6 md:pb-8 lf:pb-12">
                <div className="dropdown dropdown-bottom w-[150px]">
                    <div tabIndex={0} role="button" className="btn m-1 w-full bg-[#A1C398] text-white text-lg">Sort By</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] text-lg font-medium menu p-2 shadow bg-[#FEFDED] rounded-box w-52">
                        <li onClick={() =>handleSort("none")}><p>None</p></li>
                        <li onClick={() =>handleSort("high")}><p>Low to high</p></li>
                        <li onClick={() =>handleSort("low")}><p>High to low</p></li>
                    </ul>
                </div>
            </div>
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