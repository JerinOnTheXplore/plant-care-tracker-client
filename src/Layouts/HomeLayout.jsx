import React from 'react';
import { Link, useLoaderData } from 'react-router';



const HomeLayout = () => {
  const plants = useLoaderData();
  // console.log(plants);

  const newestPlants = plants.slice(0,6);
  
    return (
<div>
<div className="min-h-screen bg-gradient-to-b from-lime-200 to-lime-300 py-12 px-4">
  <h1 className="text-4xl font-bold text-center mb-10 text-green-900">🌿 Newest Plants</h1>

  <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
  {newestPlants.map((plant, index) => (
  <div key={plant._id}
  className="bg-white rounded-3xl shadow-xl border border-lime-200 overflow-hidden flex flex-col sm:flex-row"
  data-aos="fade-up"
  data-aos-delay={index * 100}>
  {/* Image */}
  <div className="sm:w-1/3 bg-lime-100 flex justify-center items-center p-4">
  <img src={plant.photo} alt={plant.name}
  className="w-40 h-40 object-cover rounded-full border-4 border-lime-300 shadow-md"/>
  </div>

  {/* Details*/}
  <div className="sm:w-2/3 p-6 space-y-2 text-green-900">
  <h2 className="text-2xl font-bold text-green-800">{plant.name}</h2>
  <p><span className="font-semibold">🌿 Category:</span> {plant.category}</p>
  <p><span className="font-semibold">💧 Care Level:</span> {plant.careLevel}</p>
  <p><span className="font-semibold">🗓️ Next Watering:</span> {plant.nextWatering}</p>

  <Link to={`/plants/${plant._id}`} className="btn mt-3 bg-lime-600 hover:bg-lime-700 text-white py-2 px-4 rounded-full shadow transition">View Details
  </Link>
  </div>
</div>
  ))}
 </div>
</div>
</div>
    );
};

export default HomeLayout;