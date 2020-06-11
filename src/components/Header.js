import React  from 'react';
import { withRouter } from 'react-router-dom';

class Header extends React.Component {

    
    render() {
        function setCurrentLocation(newLocation) {
            if(newLocation === '/') 
                return newLocation = 'Titles';
            else if (newLocation === '/movies')
                return newLocation = 'Movies'
            else if(newLocation === '/series')
                return newLocation = 'Series';
        } 

        let currentLocation = setCurrentLocation(this.props.location.pathname);
            return (
                <div className="bg-dark text-white">
                    <h4 className="container">Popular { currentLocation  } </h4>
                </div>
            
            )
        }
}

export default  withRouter(Header);