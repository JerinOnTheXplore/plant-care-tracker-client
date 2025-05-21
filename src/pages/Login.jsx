import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
  const [error, setError] = useState("");
  const {signIn} = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });

signIn(email,password)
.then((result) =>{
    const user = result.user;
    console.log(user);

    Swal.fire({
          icon: 'success',
          title: 'Login Successful!',
          showConfirmButton: false,
          timer: 1500
        });
    navigate(`${location.state ? location.state : "/"}`);
    })
    .catch((error) =>{
        const errorCode = error.code;
        setError(errorCode);
    
     Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: error.message || 'Please check your credentials',
        });
    });
  };
    return (
        <div>
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-lime-100 to-lime-200 px-4">
  <div className="card w-full max-w-md bg-lime-50 shadow-2xl rounded-2xl p-8">
    <h2 className="text-3xl font-bold text-center text-green-800 mb-6">
      🌿 Login to Your Account
    </h2>
    <form onSubmit={handleLogin} className="space-y-4">
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
        Login
      </button>

      {/* Google sign in */}
  <button className="btn bg-white text-black border-slate-400 w-full">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
  </button>

      {/* Login */}
      <p className="text-center text-sm text-green-800 pt-4">
        Don’t have an account?{" "}
        <Link to="/auth/register" className="text-green-900 font-bold underline">
          Register
        </Link>
      </p>
    </form>
  </div>
</div>
  
        </div>
    );
};

export default Login;