import { useLoaderData } from "react-router-dom";

const SpotDetails = () => {

    const spot = useLoaderData();
    
    const { image, country_Name, tourist_spot_name, location, shortdescription, average_cost, seasonality, travel_time, totalVisitorsPerYear } = spot;

    return (
        <div className="min-h-[calc(100vh-116px)] flex items-center py-4 md:py-6 lg:py-8 px-6">
            <div className="max-w-xl mx-auto p-4 shadow-md dark:bg-gray-50 dark:text-gray-800 border border-[#C6EBC5] rounded-lg">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <img src={image} alt="" className="block object-cover object-center h-[450px] w-full rounded-md dark:bg-gray-500" />
                    </div>
                    <div className="space-y-2 font-medium">
                        <p>Country : {country_Name}</p>
                        <p>Spot : {tourist_spot_name}</p>
                        <p>Location : {location}</p>
                        <p>Average Cost : {average_cost}k</p>
                        <p>Sesonality : {seasonality}</p>
                        <p>Travel Time : {travel_time}</p>
                        <p>Toal Visitors : {totalVisitorsPerYear}/year</p>
                        <p>Details : {shortdescription}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpotDetails;