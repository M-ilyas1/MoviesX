import { Link } from "react-router";
import { useState, useEffect } from "react";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("login");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("login");
    setIsLoggedIn(false);
  };

  return (
    <>
      <div className="w-full flex justify-between items-center px-[100px] p-4 text-white bg-black border-b-2">
        <h1 className="text-3xl font-mono">
          <Link to="/">Movies<span className="text-blue-500 font-extrabold text-4xl">X</span></Link>
        </h1>
        <ul className="flex gap-6 text-md font-mono">
          <Link to="/" className="transition hover:text-blue-400 py-2">Home</Link>
          <Link to="/movies" className="transition hover:text-blue-400 py-2">Movies</Link>
          <Link to="/tvshows" className="transition hover:text-blue-400 py-2">TVshows</Link>
          <Link to="/about" className="transition hover:text-blue-400 py-2">About</Link>
          <Link to="/contact" className="transition hover:text-blue-400 py-2">Contact</Link>
          <div className="flex">
            {isLoggedIn ? (
              <button onClick={handleLogout} className="transition hover:bg-blue-500 p-2 px-3 hover:rounded-full cursor-pointer">Logout</button>
            ) : (
              <>
                <Link to="/logIn" className="transition hover:text-blue-400 p-2">LogIn/</Link>
                <Link to="/signUp" className="transition hover:text-blue-400 p-2">SignUp</Link>
              </>
            )}
          </div>
        </ul>
      </div>
    </>
  );
};

export default Header;
