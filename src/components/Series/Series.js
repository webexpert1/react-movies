import React from 'react'
import SeriesItem from './SeriesItem'

export default function Series(props) {
    return (
        <div className="container">
           <div className="row ">
             <div className="card-group">
               {props.series && props.series.map((seriesItem) => (
                    <SeriesItem key={seriesItem.title} seriesItem={seriesItem} />
               ))}
                </div>
           </div>
       </div>   
    )
}
