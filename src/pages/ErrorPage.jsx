import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="w-full min-h-screen flex justify-center items-center flex-col gap-8">
            <p className="text-3xl md:text-4xl lg:text-5xl text-red-500 font-semibold">No page found!</p>
            <Link to="/"><button className="btn bg-[#A1C398] text-white text-lg">Go Home</button></Link>
        </div>
    );
};

export default ErrorPage;