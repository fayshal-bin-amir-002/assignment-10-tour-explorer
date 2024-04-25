import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import { IoLocationOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const TouristSpotCard = ({ spot }) => {

    const { _id, image, country_Name, tourist_spot_name, location, shortdescription } = spot;

    return (
        <div data-aos="zoom-in" data-aos-duration="1000">
            <div className="flex flex-col h-[550px] justify-between p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
                <div>
                    <img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                    <div className="mt-6 mb-2 flex justify-between items-center">
                        <p className='font-medium text-lg'>{country_Name}</p>
                        <span className="block text-sm font-semibold tracking-widest uppercase dark:text-violet-600">{tourist_spot_name}</span>
                    </div>
                    <p className='flex items-center  gap-2 mb-4'><IoLocationOutline /><span>{location}</span></p>
                    <p className="dark:text-gray-800">{shortdescription}</p>
                </div>
                <div>
                    <Link to={`/spot-details/${_id}`}><button className='btn w-full bg-[#A1C398]'>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

TouristSpotCard.propTypes = {
    spot: PropTypes.object.isRequired
};

export default TouristSpotCard;