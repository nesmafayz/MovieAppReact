import { width } from "@fortawesome/free-solid-svg-icons/fa0";
import axios from "axios";
import React, {  useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function MovieDetails() {
  const param= useParams();
  const [movieDetails,setmoviedetails]=useState({})
  useEffect(()=>{
axios
.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=d74557f6023c01b46f392b5abfafd020`)
.then((res)=>setmoviedetails(res.data))
.catch((error)=>console.log(error))
  },[])
  return (
    <>
  
   <div className="card mt-2">
  <div className="row g-0">
    <div className="col-md-4">
      <img
        src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
        className="card-img-top"
        alt="Fissure in Sandstone"
      />
    </div>
    <div className="col-md-8">
      <div className="card-body">
      <h3  style={{color:"#72b043"}}>{movieDetails.original_title}</h3>
   <hr/>
   <p><b> Description:</b> {movieDetails.overview}</p>
   <p><b> Popularity:</b> {movieDetails.popularity}</p>
   {movieDetails.spoken_languages&&(
   <p><b> Spoken Languages: </b>{movieDetails.spoken_languages.map(language => language.name).join(', ')}</p>
   )}

{movieDetails.genres && (
              <p>
                <b>Categories:</b>{" "}
                {movieDetails.genres.map((category) => (
                  <span
                    key={category.id}
                    style={{
                      backgroundColor: "#72b043",
                      color: "#fff",
                      marginRight: "5px",
                      padding: "3px 16px",
                      borderRadius: "15px",
                    }}
                  >
                    {category.name}
                  </span>
                ))}
              </p>
            )}
    <p><b> vote_average: </b> {movieDetails.vote_average}</p>
    <a className="btn btn-floating m-1 p-3 float-right"  href="#!"><i  size="lg" className="fa-regular fa-heart"></i></a>
      </div>
    </div>
  </div>
</div>

   </>
  )}
  export default MovieDetails;