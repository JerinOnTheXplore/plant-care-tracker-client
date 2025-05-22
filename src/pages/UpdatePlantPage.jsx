import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';

const UpdatePlantPage = () => {
    const plant = useLoaderData();
    const [formData,setFormData] = useState({ ...plant});
    const navigate = useNavigate();

    const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleUpdate = async e =>{
      e.preventDefault();
      const res = await fetch(`https://plant-care-tracker-server-beta.vercel.app/plants/${plant._id}`,{
        method:'PUT',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      });
      const data = await res.json();
    if (data.modifiedCount > 0) {
      Swal.fire('Updated!', 'Your plant was updated.', 'success');
      navigate('/myplants');
    }
    };

    return (
    <div>
    <NavBar></NavBar>
    <div className="p-6 md:p-12 lg:p-20 bg-gradient-to-br from-[#dbeac2] via-[#e5f0d6] to-[#f5f9ec] min-h-screen">
       <div className="text-center mb-10 space-y-3">
    <h1 className="text-4xl md:text-5xl font-bold text-[#3b5b2e]">Update Your Plant</h1>
    <p className="text-gray-600 max-w-2xl text-xl md:text-2xl mx-auto">
      Make changes to your plant's details and keep the care schedule up to date.
    </p>
  </div>
      <form onSubmit={handleUpdate} className="p-8 max-w-lg mx-auto bg-lime-100 shadow rounded">
      
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Plant Name" className="input input-bordered w-full mb-4" />
      <input name="photo" value={formData.photo} onChange={handleChange} placeholder="Image URL" className="input input-bordered w-full mb-4" />
      <input name="nextWatering" value={formData.nextWatering} onChange={handleChange} placeholder="Next Watering Date" className="input input-bordered w-full mb-4" />
      <button className="btn bg-green-600 text-white w-full">Update Plant</button>
    </form>

    </div>
    <Footer></Footer>
    </div>
    );
};

export default UpdatePlantPage;