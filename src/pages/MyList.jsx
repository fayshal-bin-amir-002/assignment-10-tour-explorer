import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from 'sweetalert2';
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { MdDelete, MdEdit } from "react-icons/md";

const MyList = () => {

    const { user } = useContext(AuthContext);

    const [spots, setSpots] = useState([]);

    useEffect(() => {
        fetch(`https://tour-explorer-server-side.vercel.app/mySpots/${user?.email}`)
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

    return (
        <div className="container min-h-[calc(100vh-422px)] md:min-h-[calc(100vh-345px)] mx-auto px-6  py-6 md:py-8 lg:py-12">
            <div className="max-w-screen-xl mx-auto">
                <div className="items-start justify-between md:flex">
                    <div className="max-w-lg">
                        <h3 className="max-w-max pb-2 mb-4 lg:mb-6 border-[#FA7070] text-2xl md:text-3xl lg:text-4xl font-semibold border-b-4">Your added spots are here</h3>
                        <p className="text-gray-600 mt-2">
                        Discover our latest additions: hidden gems nestled amidst breathtaking landscapes.
                        </p>
                    </div>
                    <div className="mt-3 md:mt-0">
                        <Link to="/add-spot" className="btn bg-[#A1C398] text-lg text-white">Add Spot</Link>
                    </div>
                </div>
                <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                    <table className="w-full table-auto text-sm text-left">
                        <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                            <tr>
                                <th className="py-3 px-6">Country</th>
                                <th className="py-3 px-6">Spot Name</th>
                                <th className="py-3 px-6">Location</th>
                                <th className="py-3 px-6">Average Cost</th>
                                <th className="py-3 px-6">Actions</th>

                            </tr>
                        </thead>
                        <tbody className="text-gray-600 divide-y">
                            {
                                spots.map((item, idx) => (
                                    <tr key={idx}>
                                        <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                                            {item.country_Name}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">{item.tourist_spot_name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{item.location}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{item.average_cost}k</td>
                                        <td className="text-left space-x-5 px-6 whitespace-nowrap">
                                            <Link to={`/update-spot/${item._id}`} className='btn btn-sm text-xl bg-[#A1C398] border-none text-white bg-opacity-80 hover:bg-[#A1C398]'><MdEdit /></Link>
                                            <button onClick={() => handleDeleteSpot(item._id)} className='btn btn-sm text-xl bg-[#FA7070] border-none text-white bg-opacity-80 hover:bg-[#FA7070]'><MdDelete /></button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {
                    spots.map((spot) => <MyListCard key={spot._id} spot={spot} handleDeleteSpot={handleDeleteSpot}></MyListCard>)
                }
            </div> */}
        </div>
    );
};

export default MyList;