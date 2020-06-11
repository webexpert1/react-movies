import React from 'react';
import { Link } from 'react-router-dom';

class TopNav extends React.Component {
    render() {
        return (
          <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-primary sticky-top">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <Link className="navbar-brand" to="/"><span className="text-white">DEMO STREAMING</span></Link>
                            <ul className="navbar-nav mr-auto">
                                
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                        
                             <button type="button" className="btn text-white">Login</button>
                            <button className="btn btn-outline-success my-2 my-sm-0 text-white" type="submit">Start Free Trial</button>
                            </form>
                        
                     </div>
                </div>
            </nav>
          </React.Fragment>
        )
    }
}

export default TopNav;