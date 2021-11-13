import React from 'react';
import landingImg from '../imgs/landing.png';
import { Link } from 'react-router-dom';

const LandingPage = ()=> {
  
    return (
    <div className="landing_wrapper">
        <div className="img_section">
            <img src={landingImg} alt="" />
        </div>
    
        <div className="text_section">
            <h2 style = {{textAlign:"center"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.
            Lorem ipsum dolor sit amet, consect etur adipisicing.Lorem ipsum dolor sit amet, consectetur adipisicing.
            Lorem ipsum dolor sit amet, consectetur adipisicing.
            </p>
        </div>

        <div className="button_section">
            <Link to = '/mentalhealth' className="btn btn-secondary">Check Your Mental Health </Link>
            <Link to = '/diabetes' className="btn btn-secondary">Check Your Diabetes </Link>

        </div>

    </div>
  );
}

export default LandingPage;
