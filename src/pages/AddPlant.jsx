import React, { useContext } from 'react';
import NavBar from '../Components/NavBar';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';

const AddPlant = () => {
   const {user} = useContext(AuthContext);
    const handleAddPlant = e =>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newPlant = Object.fromEntries(formData);
        console.log(newPlant);

        newPlant.userEmail = user?.email;
        if('email' in newPlant){
        delete newPlant.email;
        }

    // send plant data to the db
    fetch('http://localhost:3000/plants',{
        method:'POST',
        headers: {
        'Content-Type':'application/json'
        },
        body: JSON.stringify(newPlant)
    })
    .then(res => res.json())
    .then(data =>{
        if(data.insertedId){
            // console.log('Added successfully',data)
            Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Plant Added Successfully",
  showConfirmButton: false,
  timer: 1500
});
        }
    })  

    }

    return (
        <div>
        <NavBar></NavBar>
         <div className="p-6 md:p-12 lg:p-20 bg-gradient-to-br from-[#dbeac2] via-[#e5f0d6] to-[#f5f9ec] min-h-screen">
  <div className="text-center mb-10 space-y-3">
    <h1 className="text-4xl md:text-5xl font-bold text-[#3b5b2e]">Add a New Plant</h1>
    <p className="text-gray-600 max-w-2xl text-xl md:text-2xl mx-auto">
      Log your plant's details and keep track of their care schedule with ease.
    </p>
  </div>

  <form onSubmit={handleAddPlant} className="bg-lime-100 rounded-xl shadow-xl p-6 md:p-10 space-y-6 max-w-4xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Plant Name */}
      <div>
        <label className="label font-semibold text-[#3b5b2e]">Plant Name</label>
        <input type="text" name="name" placeholder="e.g., Snake Plant" className="input input-bordered w-full" />
      </div>

      {/* Category */}
      <div>
        <label className="label font-semibold text-[#3b5b2e]">Category</label>
        <select name="category" className="select select-bordered w-full">
          <option disabled selected>Select Category</option>
          <option>Succulent</option>
          <option>Fern</option>
          <option>Flowering</option>
          <option>Tropical</option>
        </select>
      </div>

      {/* Care Level */}
      <div>
        <label className="label font-semibold text-[#3b5b2e]">Care Level</label>
        <select name="careLevel" className="select select-bordered w-full">
          <option disabled selected>Select Care Level</option>
          <option>Easy</option>
          <option>Moderate</option>
          <option>Difficult</option>
        </select>
      </div>

      {/* Watering Frequency */}
      <div>
        <label className="label font-semibold text-[#3b5b2e]">Watering Frequency</label>
        <input type="text" name="watering" placeholder="e.g., Every 3 days" className="input input-bordered w-full" />
      </div>

      {/* Last watered */}
      <div>
        <label className="label font-semibold text-[#3b5b2e]">Last Watered Date</label>
        <input type="date" name="lastWatered" className='input input-bordered w-full' />
      </div>

      {/* Next Watering */}
      <div>
        <label className="label font-semibold text-[#3b5b2e]">Next Watering Date</label>
        <input type="date" name="nextWatering" className="input input-bordered w-full" />
      </div>

      {/* Health Status */}
      <div>
        <label className="label font-semibold text-[#3b5b2e]">Health Status</label>
        <input type="text" name="health" placeholder="e.g., Healthy, Needs Attention" className="input input-bordered w-full" />
      </div>

      {/* Photo URL */}
      <div>
        <label className="label font-semibold text-[#3b5b2e]">Photo URL</label>
        <input type="text" name="photo" placeholder="Paste image URL" className="input input-bordered w-full" />
      </div>
      {/* User name */}
    <div>
      <label className="label font-semibold text-[#3b5b2e]">User Name</label>
      <input type="text" name='username' placeholder='Enter your name' className='input input-bordered w-full'/>
    </div>
    {/* User email */}
    <div>
      <label className="label font-semibold text-[#3b5b2e]">User Email</label>
      <input type="text" name='email'
      defaultValue={user?.email}
      placeholder='Enter your email' className='input input-bordered w-full'/>
    </div>
    </div>

    {/* Description */}
    <div>
      <label className="label font-semibold text-[#3b5b2e]">Description</label>
      <textarea name="description" className="textarea textarea-bordered w-full" rows="3" placeholder="Write a brief plant description..."></textarea>
    </div>

    {/* Submit Button */}
    <button type="submit" className="btn bg-[#5f8d4e] hover:bg-[#4e7b3f] text-white w-full text-lg">
      Add Plant
    </button>
  </form>
</div>
   
        </div>
    );
};

export default AddPlant;