import React from 'react';
import PopularSeries from './Series/PopularSeries';
import PopularMovies from './Movies/PopularMovies';


const Home = (props) => {
    
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <PopularSeries />
                    <PopularMovies />
                </div>
            </div>
        
{/* 
            <div className="container">
                 <div className="row ">
                 <div className="col-sm-2 mt-5">
        <div className="card">
            <img className="card-img-top" 
                 src='assets/stream.png' alt='imaage' />
            
        </div>
        <h5 style={{width: '10rem'}}>Popular Series</h5>
        </div>
                </div>
            </div> */}
        </React.Fragment>
    )
}

export default Home;

