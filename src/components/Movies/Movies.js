import React, { useState, useEffect } from 'react'
import MovieItem from './MovieItem'


export default function Movies(props) {
   const [data, setData] = useState([]);
   const [sortType, setSortType] = useState('title');

  

  useEffect(() => {
    const sortArray = type => {
      const types = {
        title: 'title',
        releaseYear: 'releaseYear'
      };
      const sortProperty = types[type];
      const sorted = [...props.movies].sort((a, b) => b[sortProperty] - a[sortProperty]);
      console.log(sorted);
      setData(sorted);
    };
    sortArray(sortType);
  }, [sortType]);

    return (
       <div className="container">
           <div className="row ">
             Sort By: 
             <select onChange={(e) => setSortType(e.target.value)}>
                <option value="">Select Sort Option</option>
                <option value="title">Title</option>
                <option value="releaseYear">Year</option>
            </select>
             <div className="card-group">
               {props.movies.map(movie => (
                    <MovieItem key={movie.title} movie={movie} />
               ))}
                </div>
           </div>
       </div>   
    )
}
