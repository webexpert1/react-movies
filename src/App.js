import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import TopNav from './components/nav/TopNav';
import Footer from './components/Footer';
import Home from './components/Home';
import Movies from './components/Movies/Movies';
import Series from './components/Series/Series';

import { Route } from "react-router-dom";
import BreadCrumb from './components/nav/BreadCrumb';

// end point
const API = "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json";


const App = () => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [ isLoading, setIsLoading] = useState(true);
  const [hasError, setHasErrors] = useState(null);

   useEffect(() => {
     async function fetchData() {
       const res = await  fetch(API);
       res
        .json()
        .then(res => {
          setMovies(res.entries.filter(m => m.programType === 'movie' && m.releaseYear >= 2010).slice(0, 21));
          setSeries(res.entries.filter(s => s.programType === 'series' && s.releaseYear >= 2010).slice(0,21));
          setIsLoading(false);
        })
        .catch(err => 
          { 
            setIsLoading(false);
            setHasErrors(true)
          }) 
     }
     fetchData();
   }, []) 
  //  if (isLoading) return <p className="container">Loading...</p>
  //  if (hasError) return <p className="container"> Oops, something went wrong...</p>
  
  return (
    <div>
      <TopNav />
      <Header />
      <BreadCrumb />   
     

          {isLoading && !hasError ? (
          <div className="container">Loading...</div>
          ) : hasError ? (
            <div className="container">Oops, something went wrong...</div>
          ) : (
            <Route exact path="/" component={Home} />
          )}

      <Route path="/movies">
        <Movies movies={movies} />
      </Route>
      <Route path="/series">
          <Series series={series}/> 
      </Route>

      <Footer />
    </div>
  );
}

export default App;

