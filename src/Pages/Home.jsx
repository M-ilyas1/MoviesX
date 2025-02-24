  import { Link } from "react-router";
  import { useEffect, useState } from "react";
  import { ImSearch } from "react-icons/im";

  const Home = () => {
    const [moviesData, setMoviesData] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          let API =
            "https://raw.githubusercontent.com/hafizmahdi2010/CodeWithMahdi-APIs/main/data.json";
          const response = await fetch(API);
          const data = await response.json();
          setMoviesData(data);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }, []);

    if (loading) {
      return <p className="h-screen bg-black text-white">Loading... </p>;
    }

    if (error) {
      return <p className="h-screen bg-black text-white">Error: {error}</p>;
    }

    const filterMovies = moviesData.filter((movies) => {
      return  movies.title.toLowerCase().includes(search.toLowerCase())
    })

    return (
      <div className="bg-black">
        <div className="m-auto flex justify-center items-center pt-5">
          <div className="p-2 w-1/3 bg-blue-500 flex gap-3 justify-center items-center rounded-xl">
            <ImSearch className="text-2xl text-blue-100" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="p-2 text-white rounded-lg outline-none"
              placeholder="Search you Faviroit movies"
            />
          </div>
        </div>

        <div className="flex px-[100px] p-10 font-mono">
          <div className="flex flex-wrap gap- max-auto">
            {filterMovies.length > 0 ? (
              filterMovies.map((items) => {
              return (
                <div key={items.id} className="w-[20%] border-amber-50 border">
                  <Link to={items.movie}>
                    <img src={items.image} alt="" />
                    <h2 className="text-white text-center p-2 font-bold">
                      {items.title}
                    </h2>
                  </Link>
                </div>
              );
            })
            ) : (
              <p className="text-white  h-screen w-full text-center">No movies found.</p>
            )}
          </div>
        </div>
      </div>
    );
  };

  export default Home;
