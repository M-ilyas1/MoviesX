import { FaFacebook, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 flex justify-center py-10">
      <div className="w-[90%] ">
        <div className="flex flex-col md:flex-row items-center justify-between px-4">
        <h1 className="text-3xl font-mono"><Link to='/'>Movies<span className="text-blue-500 font-extrabold text-4xl">X</span></Link></h1>


          <nav className="flex space-x-6 mt-4 md:mt-0 text-lg font-mono">
            <Link to="/" className="hover:text-blue-500">Home</Link>
            <Link to="/movies" className="hover:text-blue-500">Movies</Link>
            <Link to="/tvshows" className="hover:text-blue-500">TVshows</Link>
            <Link to="/about" className="hover:text-blue-500">About</Link>
            <Link to="/contact" className="hover:text-blue-500">Contact</Link>
          </nav>

          <div className="flex space-x-4 mt-4 md:mt-0 text-2xl">
            <Link to="/" className="hover:text-blue-500">
              <FaFacebook />
            </Link>
            <Link to="/" className="hover:text-blue-500">
              <RiInstagramFill />
            </Link>
            <Link to="/" className="hover:text-blue-500">
              <FaTwitter />
            </Link>
          </div>
        </div>

        <div className="text-center text-gray-400 text-sm mt-6">
          &copy; 2025 <span className="text-blue-500">MoviesX</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
