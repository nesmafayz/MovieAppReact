import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

function MovieLists() {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");
  const [isSearching, setIsSearching] = useState(false); // New state for search button disabled state

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=d74557f6023c01b46f392b5abfafd020`
      )
      .then((res) => {
        if (res.data && Array.isArray(res.data.results)) {
          setMovies(res.data.results);
        } else {
          throw new Error("Invalid response data format");
        }
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSearch = () => {
    if (!searchMovie) return; 
    setIsSearching(true); // Set searching state to true when search button is clicked
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=d74557f6023c01b46f392b5abfafd020&query=${searchMovie}`
      )
      .then((res) => {
        if (res.data && Array.isArray(res.data.results)) {
          setMovies(res.data.results);
        } else {
          throw new Error("Invalid response data format");
        }
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsSearching(false); // Reset searching state to false after API call completes
      });
  };

  const handleChange = (e) => {
    setSearchMovie(e.target.value);
  };

  return (
    <>
      <div>
        <h2 className="text-center mt-3" style={{ color: "#72b043" }}>
          Movies
        </h2>
        <div className="mb-3 d-flex">
          <input
            type="text"
            className="form-control d-flex align-items-center mx-auto"
            // style={{ maxWidth: "300px" }}
            placeholder="Search by Movie name"
            value={searchMovie}
            onChange={handleChange}
          />
          <button className="btn  px-5" onClick={handleSearch} disabled={isSearching}style={{ backgroundColor: "#72b043", color:"#ffff",fontSize:"20px" }}>
            {isSearching ? 'Searching...' : 'Search'}
          </button>
        </div>
        <hr />
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {movies.map((movie) => (
            <div
              className="col"
              key={movie.id}
              style={{
                flex: "0 0 calc(25% - 10px)",
                margin: "5px",
              }}
            >
              <MovieCard movieItem={movie} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MovieLists;
