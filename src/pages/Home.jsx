import AboutUs from "../components/AboutUs";
import Banner from "../components/Banner";
import TouristSpots from "../components/TouristSpots";
import WeBest from "../components/WeBest";


const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <TouristSpots></TouristSpots>
            <WeBest></WeBest>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;