import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const TouristSpotCard = ({ spot }) => {

    const { image, country_Name, tourist_spot_name, location, shortdescription } = spot;

    return (
        <div data-aos="zoom-in" data-aos-duration="1000">
            <div className=" p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
                <img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                <div className="mt-6 mb-2 flex justify-between items-center">
                    <p className='font-medium'>{country_Name}</p>
                    <span className="block text-sm font-semibold tracking-widest uppercase dark:text-violet-600">Quisque</span>
                </div>
                <p className="dark:text-gray-800">{shortdescription}</p>
            </div>
        </div>
    );
};

TouristSpotCard.propTypes = {
    spot: PropTypes.object.isRequired
};

export default TouristSpotCard;