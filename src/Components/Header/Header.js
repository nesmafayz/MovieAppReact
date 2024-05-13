import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CounterContext from "../../Context/Counter";

function Header(){
  // const counter= useSelector((state)=>state.Counter.counter_val)
  const {ContextCounter}= useContext(CounterContext)
  const watchList = useSelector((state) => state.AddToFavSlice);
  const [language, setLanguage] = useState("en"); 
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  }

    return (

<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
<div class="container-fluid">
  <Link class="navbar-brand" href="#">Logo</Link>
  <div className="navbar-nav">
  <Link className="nav-link active me-5" aria-current="page" to="/">Movie List</Link>
  <Link className="nav-link active me-5" aria-current="page" to="/Register">Register</Link>

  <Link className="nav-link active me-5" aria-current="page" to="/WatchList"  >Watch List <b style={{backgroundColor:"#72b043"}}> { watchList.length} </b> </Link>
  
  <Link className="nav-link active me-5" aria-current="page" to="/Counter">Counter</Link>
  <select style={{backgroundColor:"#72b043", color:"#ffff", borderRadius:"8px"}} className={language === "ar" ? "rtl" : "ltr"} value={language} onChange={handleLanguageChange}>
            <option  value="en">English</option>
            <option value="ar">Arabic</option>
          </select>

  </div>

</div>
</nav>
)

}
export default Header;

//    <img src={img} style={{width:'100%', height:'50vh'}} alt=""/>