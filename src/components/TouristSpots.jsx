import { useEffect, useState } from "react";
import TouristSpotCard from "./TouristSpotCard";
import Loader from "./Loader";

const TouristSpots = () => {

    const [spots, setSpots] = useState([]);
    const [seeMore, setSeeMore] = useState(6);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3000/touristSpots')
            .then(res => res.json())
            .then(data => {
                setSpots(data);
                setLoading(false);
            })
    },[]);

    if(loading){
        return <Loader></Loader>
    }

    return (
        <div className="container mx-auto my-12 lg:my-24 px-6 md:px-8">
            <div className="lg:w-1/2 mx-auto text-center">
                <h3 className="max-w-max mx-auto pb-2 mb-4 lg:mb-6 border-[#FA7070] text-2xl md:text-3xl lg:text-4xl font-semibold border-b-4">Tourist Spots</h3>
                <p className="opacity-80 mb-6 md:mb-8 lg:mb-12">Explore iconic landmarks and hidden gems. Discover vibrant cultures, breathtaking landscapes, and historical sites. Plan your next adventure with us!</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {
                    spots.slice(0,seeMore).map((spot) => <TouristSpotCard key={spot._id} spot={spot}></TouristSpotCard>)
                }
            </div>
            <div className="pt-6 md:pt-8 lg:pt-12 text-center">
                {
                    spots.length !== seeMore ?
                    <button className="btn bg-[#A1C398] text-white text-lg" onClick={() => setSeeMore(spots.length)}>See More</button> :
                    <button className="btn bg-[#A1C398] text-white text-lg" onClick={() => setSeeMore(6)}>See Less</button>
                }
            </div>
        </div>
    );
};

export default TouristSpots;