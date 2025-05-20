import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PlantDetails = () => {
    const plant = useLoaderData();
    const navigate = useNavigate();
    return (
<div>
  <div className="min-h-screen bg-gradient-to-br from-lime-50 to-lime-200 flex justify-center items-center px-4 py-12">
    <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-lime-300 flex flex-col md:flex-row overflow-hidden">
        
    {/* image */}
    <div>
      <img className="w-full h-80 object-cover rounded-2xl shadow-lg" src={plant.photo} alt={plant.name} />
    </div>
    {/*description*/}
     <div className='md:w-1/2 p-8 space-y-4'>
    <h2 className="text-3xl font-bold text-green-800">{plant.name}</h2>
    <div className="space-y-2 text-green-900">
    <p><span className="font-semibold"> Category:</span> {plant.category}</p>
    <p><span className="font-semibold"> Care Level:</span> {plant.careLevel}</p>
    <p><span className="font-semibold"> Next Watering:</span> {plant.nextWatering}</p>
    <p><span className="font-semibold"> Health Status:</span> {plant.health}</p>
    <p><span className="font-semibold"> Description:</span> {plant.description || "No description provided."}</p>
    </div>
    <button onClick={() => navigate('/')} className="mt-4 inline-block bg-lime-600 hover:bg-lime-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300 shadow"> Go Back Home</button>
     </div>

    </div>
  </div>   
</div>
    );
};

export default PlantDetails;