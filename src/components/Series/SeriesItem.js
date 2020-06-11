import React from 'react'

export default function SeriesItem(props) {
    const [didLoad, setLoad] = React.useState(false);

    const style = didLoad ? {} : {visibility: 'hidden'};

    return (
        <div className="col-sm-2 mt-5">
        <div className="card">
            <img className="card-img-top" 
                 src={props.seriesItem.images['Poster Art'].url}
                 style={style}
                 alt={props.seriesItem.title}
                 onLoad={() => setLoad(true)}/>
            <div className="card-body">
            <h5 className="card-title text-left">{props.seriesItem.title}</h5>
            </div>
        </div>
        </div>
    )
}
