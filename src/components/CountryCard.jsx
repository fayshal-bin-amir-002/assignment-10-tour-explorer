import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CountryCard = ({ country }) => {

    const { country_name, photo_url, details } = country;

    return (
        <Link to={`/country-spots/${country_name}`}>
            <div className="hero h-[300px] w-full rounded-lg overflow-hidden relative hover:scale-105 duration-300 shadow-lg" style={{ backgroundImage: `url(${photo_url})` }}>
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="absolute right-5 top-5">
                    <p className="text-white text-xl border-[#FA7070] border-b-2 font-medium">{country_name}</p>
                </div>
                <div className="absolute left-5 bottom-5">
                    <p className="text-white text-base w-[80%] opacity-90 font-medium">{details}</p>
                </div>
            </div>
        </Link>
    );
};

CountryCard.propTypes = {
    country: PropTypes.object.isRequired
};

export default CountryCard;