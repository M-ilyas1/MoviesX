import { useEffect } from "react";
import { useNavigate } from "react-router";

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
      localStorage.setItem('login', 'true');
      navigate('/');
    } 

    useEffect(() => {
      let login = localStorage.getItem('login') === 'true';
      if (login) {
        navigate('/');
      }
    }, [navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-950">
      <div className="w-full max-w-md bg-gray-800 p-8 shadow-lg rounded-xl">
        <h2 className="text-2xl font-bold text-center text-white">Login</h2>
        <form className="mt-6 space-y-4">
          <input 
            type="email" 
            placeholder="Email" 
            required 
            className="w-full p-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input 
            type="password" 
            placeholder="Password" 
            required 
            className="w-full p-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            type="submit"
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-gray-400">
          Don’t have an account? 
          <a href="/signup" className="text-blue-400 hover:underline"> Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
