import { useLoaderData } from "react-router-dom";
import TouristSpotCard from "../components/TouristSpotCard";

const CountrySpots = () => {

    const spots = useLoaderData();

    return (
        <div className="container min-h-[calc(100vh-116px)] mx-auto px-6 md:px-12 lg:px-24 py-6 md:py-8 lg:py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {
                    spots.map((spot) => <TouristSpotCard key={spot._id} spot={spot}></TouristSpotCard>)
                }
            </div>
        </div>
    );
};

export default CountrySpots;