
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddToWatchList, RemoveFromWatchList } from "../../Slices/AddToWatchList";
export function MovieCard(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const watchList = useSelector((state) => state.AddToFavSlice); //////


  const isInWatchList = watchList.find((movie)=>movie.id === props.movieItem.id) !==undefined
  const handleHeartClick = () => {
    if (isInWatchList) {
      dispatch(RemoveFromWatchList(props.movieItem));
    } else {
      dispatch(AddToWatchList(props.movieItem));
    }
  };

  return (
    <div className="card">
      <img src={`https://image.tmdb.org/t/p/w500${props.movieItem.poster_path}`} className="card-img-top" alt="Fissure in Sandstone" />
     <div className="card-body">
        <h5 className="card-title" style={{ color: "#72b043" }}>{props.movieItem.original_title}</h5>
        <p className="card-text">Release Date: {props.movieItem.release_date}</p>
       <a className="btn btn-success me-3" onClick={() => navigate(`MovieDetails/${props.movieItem.id}`)}>Details</a>
      <a className="btn btn-floating m-1 p-3" href="#!" onClick={handleHeartClick}>
        {isInWatchList ? (
           <i  size="lg" className="fa-solid fa-heart" ></i>
      
        ) : (
          <i  size="lg" className="fa-regular fa-heart"></i>
        )}
      </a>
    </div>
    </div>
  );
}

export default MovieCard;