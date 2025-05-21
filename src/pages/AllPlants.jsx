import React from 'react';
import { Link, useLoaderData } from 'react-router';
import NavBar from '../Components/NavBar';

const AllPlants = () => {
  const plants = useLoaderData();
    return (
    <div>
     <NavBar></NavBar>
     <div className="min-h-screen bg-gradient-to-b from-lime-100 to-lime-200 py-12 px-4">
     <h1 className="text-4xl font-bold text-center mb-8 text-green-900">🌿 All Plants</h1>
     <div className='overflow-auto'>
      <table className="table w-full bg-lime-100 shadow-lg rounded-xl">
      <thead className='bg-lime-300 text-green-800 font-bold text-left'>
       <tr>
        <th>No.</th>
        <th>Image</th>
        <th>Name</th>
        <th>Category</th>
        <th>Care Level</th>
        <th>Next Watering</th>
        <th>Plant Info</th>
        </tr>
      </thead>
      <tbody>
        {
         plants.map((plant,i) =>(
           <tr key={plant._id}
           className='hover:bg-lime-200'>
            <td>{i+1}</td>
            <td>
            <img src={plant.photo} alt={plant.name} className="w-16 h-16 object-cover rounded" />
            </td>
            <td className="font-semibold text-green-800">{plant.name}</td>
            <td className="text-green-800">{plant.category}</td>
            <td className="text-green-800">{plant.careLevel}</td>
            <td className="text-green-800">{plant.nextWatering}</td>
            <td className='text-green-800'>
             <Link to={`/plants/${plant._id}`}><button className='btn btn-sm bg-lime-700 hover:bg-lime-800 text-white rounded'>View Details</button></Link>
            </td>
           </tr> 
         ))
        }
      </tbody>
      </table>
     </div>
     </div>       
    </div>
    );
};

export default AllPlants;