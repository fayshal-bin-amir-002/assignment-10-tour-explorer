import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const MainLayout = () => {

    const navigation = useNavigation();

    return (
        <div className=" font-raleway">
            <div className="h-16">
                <NavBar></NavBar>
            </div>
            {
                navigation.state === "loading" ? <Loader></Loader> : <Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;