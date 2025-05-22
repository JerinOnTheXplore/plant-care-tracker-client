import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

const PlantDetails = () => {
    const plant = useLoaderData();
    const navigate = useNavigate();
    return (
<div>
 <NavBar></NavBar>
<div className='min-h-screen bg-gradient-to-br from-lime-200 to-lime-300 px-4 py-12 flex justify-center items-center'>
  <div className="w-full max-w-5xl bg-white border border-lime-200 shadow-xl rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
   {/* image and name */}
   <div className='bg-lime-100 p-6 flex flex-col justify-center items-center space-y-4 relative'>
     <img  className="w-64 h-64 object-cover rounded-full border-4 border-lime-300 shadow-md" src={plant.photo} alt={plant.name} />
   </div>

   <div>
     <h2 className="text-4xl font-extrabold text-green-800 text-center pl-2">{plant.name}</h2>
     {/* badge */}
     <div className="flex flex-wrap gap-2 justify-center mt-2">
     <span className="badge bg-lime-300 text-green-900 px-3 py-1 rounded-full">{plant.category}</span>
     <span className="badge bg-green-100 text-green-800 px-3 py-1 rounded-full">{plant.careLevel}</span>
     <span className="badge bg-green-200 text-green-900 px-3 py-1 rounded-full">{plant.health}</span>
     </div>
     {/* details */}
     <div className="p-8 space-y-4 text-green-900" data-aos="fade-left">
  <h3 className="text-2xl font-semibold mb-2">🌱 Plant Details</h3>

  <div className="space-y-2">
  <p><strong>💧 Next Watering:</strong> {plant.nextWatering}</p>
   <p><strong>📝 Description:</strong> {plant.description || 'No description provided.'}</p>
   </div>

   {/*  watering meter */}
    <div className="mt-6">
    <h4 className="text-green-800 font-semibold mb-2">💦 Watering Reminder</h4>
    <div className="relative w-full h-4 bg-lime-200 rounded-full overflow-hidden">
      <div className="absolute top-0 left-0 h-full bg-lime-600" style={{ width: '70%' }}></div>
      </div>
      <p className="text-base text-green-700 mt-1">Estimated 70% till next watering</p>
      </div>

      <button onClick={() => navigate('/')}  className="mt-8 inline-flex items-center gap-2 bg-lime-600 hover:bg-lime-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300 shadow-md">⬅️ Back to Home</button>
      </div>
   </div>
   
  </div>
  
</div>
<Footer></Footer>   
</div>
    );
};

export default PlantDetails;