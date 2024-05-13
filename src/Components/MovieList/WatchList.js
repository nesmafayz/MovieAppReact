import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RemoveFromWatchList } from "../../Slices/AddToWatchList";

export default function WatchList() {
  const watchList = useSelector((state) => state.AddToFavSlice);

  const dispatch = useDispatch();

  const handleHeartClick = (movieId) => {
    dispatch(RemoveFromWatchList(movieId));
    console.log("removed");
    console.log(movieId);
  };

  return (
    <div>
      <h1>Watch List</h1>
      <div className="movie-list">
        {watchList.length === 0 ? (
          <p>No movies in the watch list.</p>
        ) : (
          <div className="row">
            {watchList.map((movie) => (
              <div className="col-md-3 mb-4" key={movie.id}>
                <div className="card">
                  <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img-top" alt={movie.original_title} />
                  <div className="card-body">
                    <h5 className="card-title" style={{ color: "#72b043" }}>{movie.original_title}</h5>
                    <p className="card-text">Release Date: {movie.release_date}</p>
                    <a className="btn btn-success me-3" href={`MovieDetails/${movie.id}`}>Details</a>
                    <a className="btn btn-floating m-1 p-3" onClick={() => handleHeartClick(movie.id)}>
                      
                    <i  size="lg" className="fa-solid fa-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
