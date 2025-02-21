import { useState } from "react";
import { useNavigate } from "react-router";

const SignUp = () => {
  let navigate = useNavigate()
  let [details, setDetails] = useState({
    userName: '',
    userEmail: '',
    password: ''
  })
  const submitHandler = (e)   => {
    e.preventDefault()
    // console.log(details);
    localStorage.setItem('login', JSON.stringify(details))
    navigate('/logIn')
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-950">
      <div className="w-full max-w-md bg-gray-800 p-8 shadow-lg rounded-xl">
        <h2 className="text-2xl font-bold text-center text-white">Sign Up</h2>
        <form className="mt-6 space-y-4" onSubmit={submitHandler}>
          <input 
            value={details.userName}
            onChange={(e) => setDetails({...details, userName:e.target.value})}
            type="text" 
            placeholder="Full Name" 
            required 
            className="w-full p-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input 
            value={details.userEmail}
            onChange={(e) => setDetails({...details, userEmail:e.target.value})}
            type="email" 
            placeholder="Email" 
            required 
            className="w-full p-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input 
            value={details.password}
            onChange={(e) => setDetails({...details, password:e.target.value})}
            type="password" 
            placeholder="Password" 
            required 
            className="w-full p-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-gray-400">
          Already have an account? 
          <a href="/login" className="text-blue-400 hover:underline"> Login</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;