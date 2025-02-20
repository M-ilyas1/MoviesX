import { Link } from "react-router";
import { useEffect, useState } from "react";

const Home = () => {
  const [moviesData, setMoviesData] = useState([]);
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
    return <p>Loading... </p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="flex px-[100px] p-10 bg-black font-mono">
      <div className="flex flex-wrap gap- max-auto">
        {moviesData.map((items, index) => {
          return (
              <div key={index} className="w-[20%] border-amber-50 border">
                <Link to={items.movie}>
                  <img src={items.image} alt="" />
                  <h2 className="text-white text-center p-2 font-bold">
                    {items.title}
                  </h2>
                </Link>
              </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
