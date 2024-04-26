import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import MyListCard from "../components/MyListCard";
import Swal from 'sweetalert2';
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const MyList = () => {

    const { user } = useContext(AuthContext);

    const [spots, setSpots] = useState([]);

    useEffect(() => {
        fetch(`https://tour-explorer-server-side.vercel.app/mySpots/${user.email}`)
            .then(res => res.json())
            .then(data => setSpots(data))
    }, [user]);

    const handleDeleteSpot = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://tour-explorer-server-side.vercel.app/touristSpots/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount === 1) {
                            const remaining = spots.filter((spot) => spot._id !== id);
                            setSpots(remaining);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        else {
                            toast.error('Something went wrong!');
                        }
                    })
            }
        });
    }

    if (spots.length === 0) {
        return (
            <div className="min-h-[calc(100vh-116px)] flex justify-center items-center flex-col gap-8">
                <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-red-500">You did not add anythig!</p>
                <Link to="/add-spot"><button className="btn bg-[#A1C398] text-lg text-white">Add Your Spot</button></Link>
            </div>
        )
    }

    return (
        <div className="container min-h-[calc(100vh-116px)] mx-auto px-6 md:px-12 lg:px-24 py-6 md:py-8 lg:py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {
                    spots.map((spot) => <MyListCard key={spot._id} spot={spot} handleDeleteSpot={handleDeleteSpot}></MyListCard>)
                }
            </div>
        </div>
    );
};

export default MyList;