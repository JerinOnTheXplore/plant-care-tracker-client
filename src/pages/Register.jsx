import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

const Register = () => {
 const {createUser,setUser,updateUser} = use(AuthContext);
 const navigate = useNavigate();

 const handleRegister = (e) =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log({ name, photo, email, password });
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      Swal.fire({
        icon: 'warning',
        title: 'Weak Password',
        text: 'Password must include uppercase, lowercase and be at least 6 characters long.',
      });
      return;
    }

    createUser(email,password)
    .then((result) =>{
        const user = result.user;

        updateUser({ displayName: name, photoURL: photo })
        .then(()=>{
          setUser({...user,displayName: name, photoURL: photo});
          
        Swal.fire({
        icon: 'success',
        title: 'Registration Successful!',
        text: 'Welcome to the app!',
        }).then(() => {
        navigate('/');
          });
        })
        .catch((error) => {
            console.log(error);
            setUser(user);

           Swal.fire({
           icon: 'error',
           title: 'Profile Update Failed',
           text: error.message,
            });
        });
    })
    .catch((error) =>{
       Swal.fire({
          icon: 'error',
          title: 'Registration Failed',
          text: error.message,
        }); 
    })

 }
    return (
        <div>
        <NavBar></NavBar>
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-lime-100 to-lime-200 px-4">
  <div className="card w-full max-w-md bg-lime-50 shadow-2xl rounded-2xl p-8">
    <h2 className="text-3xl font-bold text-center text-green-800 mb-6">
      🌿 Please Register
    </h2>
    <form onSubmit={handleRegister} className="space-y-4">
      {/* Name */}
      <div>
        <label className="block text-green-800 font-semibold mb-1">Name</label>
        <input
          name="name"
          type="text"
          className="input input-bordered w-full bg-white text-green-900"
          placeholder="Your  name"
          required
        />
      </div>
      {/* Email */}
      <div>
        <label className="block text-green-800 font-semibold mb-1">Email</label>
        <input
          name="email"
          type="email"
          className="input input-bordered w-full bg-white text-green-900"
          placeholder="Enter your email"
          required
        />
      </div>

      {/* Photo URL */}
      <div>
        <label className="block text-green-800 font-semibold mb-1">Photo URL</label>
        <input
          name="photo"
          type="text"
          className="input input-bordered w-full bg-white text-green-900"
          placeholder="Photo URL"
          required
        />
      </div>

      {/* Password */}
      <div>
        <label className="block text-green-800 font-semibold mb-1">Password</label>
        <input
          name="password"
          type="password"
          className="input input-bordered w-full bg-white text-green-900"
          placeholder="Enter your password"
          required
        />
      </div>

      {/* Forgot Password Link */}
      <div className="text-right">
        <a className="text-sm text-green-700 hover:underline cursor-pointer">
          Forgot password?
        </a>
      </div>

      {/* Submit Button */}
      <button type="submit" className="btn bg-green-700 hover:bg-green-800 text-white w-full">
        Register
      </button>

      {/* Register Link */}
      <p className="text-center text-sm text-green-800 pt-4">
        Already have an account?{" "}
        <Link to="/auth/login" className="text-green-900 font-bold underline">
          Login
        </Link>
      </p>
    </form>
  </div>
</div>  
 <Footer></Footer>
        </div>
    );
};

export default Register;