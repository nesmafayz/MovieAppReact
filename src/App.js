// import Layout from "./Layout";
// import Counter from "./pages/Counter";
// import WatchList from "./Components/MovieList/WatchList";
// import Register from "./pages/Register";
// import MovieDetails from "./Components/MovieList/MovieDetail";
// import NotFound from "./Components/NotFound/NotFound";
// import MovieLists from "./Components/MovieList/MovieLists";
import CounterContext from "./Context/Counter";
import { LanguageProvider, LanguageContext } from "./Context/Language";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense, useState } from "react";
const Register=React.lazy(()=>import("./pages/Register"));
const WatchList= React.lazy(()=>import( "./Components/MovieList/WatchList"));
const MovieDetails= React.lazy(()=>import("./Components/MovieList/MovieDetail"));
const NotFound= React.lazy(()=>import("./Components/NotFound/NotFound"));
const MovieLists= React.lazy(()=>import("./Components/MovieList/MovieLists"));
const Counter= React.lazy(()=>import("./pages/Counter"));
const Layout= React.lazy(()=>import("./Layout"));
function App() {
  const[counter, setCounter]= useState(0);
  const [language, setLanguage] = useState("en"); 
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };
  return (

      <BrowserRouter>
      <LanguageContext.Provider value={{language, setLanguage}}>
      <CounterContext.Provider value={{counter, setCounter}}> 
    
      <div className="container">
        <Suspense fallback={<h1>Loading ...</h1>}>
      <Routes>
        <Route element={<Layout/>}>
        <Route path="" element={<MovieLists/>} />
        <Route path="MovieDetails/:id" element={<MovieDetails/>} />
        <Route path="WatchList" element={<WatchList/>}/>
        <Route path="Counter" element={<Counter/>}/>
        <Route  path="/register"  element={<Register/>}/>
        </Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>
      </Suspense>
      </div>
      </CounterContext.Provider>
      </LanguageContext.Provider>
      </BrowserRouter>
    
 
  );
}
export default App;

