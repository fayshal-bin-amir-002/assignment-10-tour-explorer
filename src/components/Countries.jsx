import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

const Countries = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://tour-explorer-server-side.vercel.app/countries')
            .then(res => res.json())
            .then(data => setCountries(data))
    },[]);

    return (
        <div className="mb-6 md:mb-12 lg:mb-24 container mx-auto px-6">
            <div className="lg:w-1/2 mx-auto text-center">
                <h3 className="max-w-max mx-auto pb-2 mb-4 lg:mb-6 border-[#FA7070] text-2xl md:text-3xl lg:text-4xl font-semibold border-b-4">Countries</h3>
                <p className="opacity-80 mb-6 md:mb-8 lg:mb-12">Explore our diverse collection of countries, each offering its own unique blend of culture, history, cuisine, and natural wonders. Start your global journey today!</p>
            </div>
            <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    countries.map((country) => <CountryCard key={country._id} country={country}></CountryCard>)
                }
            </div>
        </div>
    );
};

export default Countries;