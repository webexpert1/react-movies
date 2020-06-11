import React from 'react';


const Footer = () => {
    return (
        <React.Fragment>
            {/* <footer className="footer">
                <div className="container">
                    <span className="text-muted">Place sticky footer content here.</span>

                </div>
            </footer> */}
             <footer className="bd-footer text-muted bg-dark">
            <div className="container-fluid p-3 p-md-5">
                <ul className="bd-footer-links d-flex">
                    <li className="ml-1 mr-3"><a href="https://github.com/twbs/bootstrap">Home</a></li>
                    <li className="ml-5 mr-3"><a href="https://twitter.com/getbootstrap">Terms & Condition</a></li>
                    <li className="ml-5 mr-3"><a href="/docs/4.0/examples/">Privacy Policy</a></li>
                    <li className="ml-5 mr-3"><a href="/docs/4.0/about/overview/">Collection Statement</a></li>
                    <li className="ml-5 mr-3"><a href="/docs/4.0/about/overview/">Help</a></li>
                    <li className="ml-5 mr-3"><a href="/docs/4.0/about/overview/">Manage Account</a></li>
                </ul>
                <p className="ml-4"> &copy; Copyright 2019. Demo Streaming. All rights reserved</p>
                <div className="row mt-5">
                  <div className="col-md-4 col-sm-6 col-xs-12">
                    <ul className="social-icons d-flex">
                        <li className="ml-3 mr-2"><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                        <li className="ml-2 mr-2"><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                        <li className="ml-2 mr-2"><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
                        <li className="ml-2 mr-2"><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
                           
                    </ul>
                    </div>
                </div>
                
            </div>
            </footer>
       
        </React.Fragment>
    )
}

export default Footer;