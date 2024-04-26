import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { useContext, useState } from "react";
import google from "../assets/google.png";
import github from "../assets/git.svg";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {

    const { userLogin, googleLogIn, githubLogIn } = useContext(AuthContext);

    const navigate = useNavigate();

    const location = useLocation();

    const [show, setShow] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
            .then(() => {
                toast.success("User logged in successfully");
                location?.state ? navigate(location.state) : navigate('/')
            })
            .catch((error) => {
                toast.error("Invalid email/password");
            })
    }

    const handleGoogleLogin = () => {
        googleLogIn()
            .then(() => {
                toast.success("User logged in successfully");
                location?.state ? navigate(location.state) : navigate('/')
            })
            .catch((error) => {
                toast.error(error.message);
            })
    }

    const handleGithubLogin = () => {
        githubLogIn()
            .then(() => {
                toast.success("User logged in successfully");
                location?.state ? navigate(location.state) : navigate('/')
            })
            .catch(() => {
                toast.error(error.message);
            })
    }

    return (
        <div className="min-h-[calc(100vh-422px)] md:min-h-[calc(100vh-347px)] flex justify-center items-center container mx-auto py-6 md:py-8 lg:py-12 px-6">
            <div className="md:w-4/5 lg:w-1/2 mx-auto">
                <div className="text-left">
                    <h3 className="max-w-max pb-2 mb-4 lg:mb-6 border-[#FA7070] text-2xl md:text-3xl lg:text-4xl font-semibold border-b-4">Login Now</h3>
                    <p className="opacity-80 mb-6 md:mb-8 lg:mb-12">Securely access your account for personalized experiences. Manage bookings, preferences, and more with ease. Your journey begins here.</p>
                </div>
                <form onSubmit={handleLogin}>
                    <label className="form-control w-full mb-2 md:mb-4">
                        <div className="label">
                            <span className="label-text">Email</span>
                        </div>
                        <input type="email" name="email" placeholder="Type your email" className="input input-bordered w-full border-[#A1C398] focus:outline-none focus:border-[#FA7070]" required />
                    </label>
                    <label className="form-control w-full mb-2 md:mb-4 relative">
                        <div className="label">
                            <span className="label-text">Password</span>
                        </div>
                        <input type={show ? 'text' : 'password'} name="password" placeholder="Type your password" className="input input-bordered w-full border-[#A1C398] focus:outline-none focus:border-[#FA7070]" required />
                        <span onClick={() => setShow(!show)} className="absolute right-5 bottom-3 text-2xl cursor-pointer">
                            {
                                show ? <IoIosEye /> : <IoIosEyeOff />
                            }
                        </span>
                    </label>
                    <div className="mt-8">
                        <button className="btn w-full bg-[#A1C398] text-white text-lg">Login</button>
                    </div>
                    <p className="text-sm font-medium opacity-80 mt-2">Don&apos;t have an account? <Link className="text-[#FA7070] underline" to="/register">Register</Link></p>
                </form>
                <div className="divider"></div>
                <div>
                    <button onClick={handleGoogleLogin} className="btn bg-[#FA7070] w-full text-white text-lg rounded-full mb-2">
                        <img src={google} alt="" className="inline w-6" />
                        Continue With Google
                    </button>
                    <button onClick={handleGithubLogin} className="btn bg-[#A1C398] w-full text-white text-lg rounded-full">
                        <img src={github} alt="" className="inline w-6" />
                        Continue With Github
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;