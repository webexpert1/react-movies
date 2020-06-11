import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function PopularSeries() {
    return (
        <Link className="col-sm-2 mt-5"  to="/series">
        <div className="card">
            <img className="card-img-top" 
                 src='assets/stream.png' alt='imaage' />
            
        </div>
        <h5 style={{width: '10rem'}}>Popular Series</h5>
        </Link>
    )
}
