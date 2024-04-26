import { Link, useNavigate } from "react-router-dom";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {

    const { userRegister, userProfileUpdate, userLogOut } = useContext(AuthContext);

    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const [error, setError] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        setError('');

        if (password.length < 6) {
            setError('Password must be 6 character!');
            return;
        }

        if (!/^(?=.*[a-z])(?=.*[A-Z])/.test(password)) {
            setError("Password should be contain minimum one uppercase and one lowercase character!");
            return;
        }

        userRegister(email, password)
            .then(() => {
                userProfileUpdate(name, photo)
                    .then(() => {
                        userLogOut()
                            .then(() => {
                                navigate('/login');
                            })
                            .catch((error) => {
                                toast.error(error.message);
                            })
                    })
                    .catch((error) => {
                        toast.error(error.message);
                    })
                toast.success("User registration successfully.");
            })
            .catch((error) => {
                toast.error(error.message);
            })
    }

    return (
        <div className="min-h-[calc(100vh-422px)] md:min-h-[calc(100vh-347px)] flex justify-center items-center container mx-auto py-6 md:py-8 lg:py-12 px-6">
            <div className="md:w-4/5 lg:w-1/2 mx-auto">
                <div className="text-left">
                    <h3 className="max-w-max pb-2 mb-4 lg:mb-6 border-[#FA7070] text-2xl md:text-3xl lg:text-4xl font-semibold border-b-4">Register Here</h3>
                    <p className="opacity-80 mb-6 md:mb-8 lg:mb-12">Join our community of adventurers. Create your account to unlock exclusive offers, personalized recommendations, and seamless booking experiences. Start exploring today!</p>
                </div>
                <form onSubmit={handleRegister}>
                    <label className="form-control w-full mb-2 md:mb-4">
                        <div className="label">
                            <span className="label-text">Name</span>
                        </div>
                        <input type="text" name="name" placeholder="Type your name" className="input input-bordered w-full border-[#A1C398] focus:outline-none focus:border-[#FA7070]" required />
                    </label>
                    <label className="form-control w-full mb-2 md:mb-4">
                        <div className="label">
                            <span className="label-text">Photo URL</span>
                        </div>
                        <input type="text" name="photo" placeholder="Type your photo url" className="input input-bordered w-full border-[#A1C398] focus:outline-none focus:border-[#FA7070]" required />
                    </label>
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
                    <div className="label -mt-2 md:-mt-4">
                        <span className="label-text-alt text-red-500 font-medium">{error}</span>
                    </div>
                    <div className="mt-8">
                        <button className="btn w-full bg-[#A1C398] text-white text-lg">Register</button>
                    </div>
                    <p className="text-sm font-medium opacity-80 mt-2">Already have an account? <Link className="text-[#FA7070] underline" to="/login">Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;