import AboutUs from "../components/AboutUs";
import Banner from "../components/Banner";
import Countries from "../components/Countries";
import TouristSpots from "../components/TouristSpots";
import WeBest from "../components/WeBest";


const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <TouristSpots></TouristSpots>
            <Countries></Countries>
            <AboutUs></AboutUs>
            <WeBest></WeBest>
        </div>
    );
};

export default Home;