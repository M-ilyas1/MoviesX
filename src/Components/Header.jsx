import { Link } from "react-router";
const Header = () => {
  return (
    <>
      <div className="w-full flex justify-between items-center px-[100px] p-4 text-white bg-black border-b-2">
        <h1 className="text-3xl font-mono"><Link to='/'>Movies<span className="text-blue-500 font-extrabold text-4xl">X</span></Link></h1>
        <ul className="flex gap-6 text-md font-mono">
            <Link to='/' className="transition hover:text-blue-400">Home</Link>
            <Link to='/movies' className="transition hover:text-blue-400">Movies</Link>
            <Link to='/tvshows' className="transition hover:text-blue-400">TVshows</Link>
            <Link to='/about' className="transition hover:text-blue-400">About</Link>
            <Link to='/contact' className="transition hover:text-blue-400">Contact</Link>
            <div className="flex">
            <Link to='/logIn' className="transition hover:text-blue-400">LogIn/</Link>
            <Link to='/signUp' className="transition hover:text-blue-400">SignUp</Link>
            </div>
        </ul>
      </div>
    </>
  );
};

export default Header;
