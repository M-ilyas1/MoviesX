import { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const [details, setDetails] = useState({
    userEmail: "",
    password: "",
  });

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    let logInData = JSON.parse(localStorage.getItem("logInData"));

    if(!logInData){
      alert('No account found! Please Sign Up first.');
      navigate('/signUp')
      return;
    }

    console.log(details);
    console.log(logInData);

    if (
      logInData.userEmail == details.userEmail &&
      logInData.password == details.password
    ) {
      localStorage.setItem("login", "true");
      alert(`WellCome to MoviesX App - ${logInData.userName}`)
      navigate("/");
    } else {
      alert("User is Not Authenticated - Please SignUp First");
      navigate("/signUp");
    }

    setDetails({ userEmail: "", password: "" });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-950">
      <div className="w-full max-w-md bg-gray-800 p-8 shadow-lg rounded-xl">
        <h2 className="text-2xl font-bold text-center text-white">Login</h2>
        <form className="mt-6 space-y-4" onSubmit={submitHandler}>
          <input
            value={details.userEmail}
            onChange={(e) =>
              setDetails({ ...details, userEmail: e.target.value })
            }
            type="email"
            placeholder="Email"
            required
            className="w-full p-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            value={details.password}
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            type="password"
            placeholder="Password"
            required
            className="w-full p-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-gray-400">
          Don`t have an account? 
          <a href="/signup" className="text-blue-400 hover:underline"> Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
