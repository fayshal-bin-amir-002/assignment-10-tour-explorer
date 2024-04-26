import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import MyListCard from "../components/MyListCard";
import Swal from 'sweetalert2';
import { toast } from "react-toastify";

const MyList = () => {

    const { user } = useContext(AuthContext);

    const [spots, setSpots] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/mySpots/${user.email}`)
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
                fetch(`http://localhost:3000/touristSpots/${id}`, {
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
        <div className="container min-h-[calc(100vh-116px)] mx-auto px-6 md:px-12 lg:px-24 py-6 md:py-8 lg:py-12">
            <div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {
                    spots.map((spot) => <MyListCard key={spot._id} spot={spot} handleDeleteSpot={handleDeleteSpot}></MyListCard>)
                }
            </div>
        </div>
    );
};

export default MyList;