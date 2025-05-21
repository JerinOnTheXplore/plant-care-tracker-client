import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link, useLoaderData } from 'react-router';
import NavBar from '../Components/NavBar';
import Swal from 'sweetalert2';

const MyPlantsPage = () => {
    const {user} = useContext(AuthContext);
    const allPlants = useLoaderData();
    const [myPlants,setMyPlants] = useState([]);

    useEffect(()=>{
    if(user?.email){
    const filtered = allPlants.filter(plant => plant.userEmail === user.email );
    setMyPlants(filtered);
    }},[user,allPlants]);

 const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/plants/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire('Deleted!', 'Your plant has been deleted.', 'success');
              setMyPlants(myPlants.filter(p => p._id !== id));
            }
          });
      }
    });
  };
    return (
    <div>
    <NavBar></NavBar>
      <div className="min-h-screen bg-gradient-to-b from-lime-100 to-lime-200 py-12 px-4">
      <h2 className="text-3xl font-bold text-center text-green-900 mb-8">🌱 My Plants</h2>
      <div className="overflow-x-auto">
       <table className="table w-full bg-lime-100 shadow-lg rounded-xl">
        <thead className="bg-lime-400 text-green-800 font-bold text-left">
        <tr>
        <th>No.</th>
        <th>Image</th>
        <th>Name</th>
        <th>Next Watering</th>
        <th>Update</th>
        <th>Delete</th>
        </tr>
        </thead>
    <tbody>
    {myPlants.map((plant, index) => (
    <tr key={plant._id} className="hover:bg-lime-300 bg-lime-200">
    <td>{index + 1}</td>
    <td>
    <img src={plant.photo} alt={plant.name} className="w-16 h-16 object-cover rounded" />
    </td>
    <td className="font-semibold text-green-800">{plant.name}</td>
    <td className="text-green-800">{plant.nextWatering}</td>
    <td>
    <Link to={`/updatePlant/${plant._id}`}>
    <button className="btn btn-sm bg-blue-600 hover:bg-blue-700 text-white rounded">Update</button>
    </Link>
    </td>
    <td>
    <button onClick={()=>handleDelete(plant._id)} className="btn btn-sm bg-red-600 hover:bg-red-700 text-white rounded"> Delete</button>
    </td>
    </tr>
    ))}
    {myPlants.length === 0 && (
    <tr>
    <td colSpan="6" className="text-center text-gray-600 py-6">No plants added by you.</td>
    </tr>
 )}
    </tbody>
    </table>
    </div>
  </div>   
</div>
    );
};

export default MyPlantsPage;