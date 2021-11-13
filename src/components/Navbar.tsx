import React from 'react';
import {NavLink} from "react-router-dom";



const Navbar = () => {

    const navStyle = {
        color:"white",
        display:"flex",
        gap:"0.5rem"
    }

    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <NavLink className="navbar-brand" to="/">
                    <p> Logo </p>
                </NavLink>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto mr-5">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" 
                            style={({ isActive }) => {
                                return {
                                  fontSize:"25px",
                                  color: isActive ? "white" : ""
                                };
                            }}
                            >
                            Home 
                            </NavLink>
                        </li>
                        
                        <li>
                            <NavLink className="nav-link" to="/mentalhealth"
                            style={({ isActive }) => {
                                return {
                                  fontSize:"25px",
                                  color: isActive ? "white" : ""
                                };
                            }}
                            >Mental Health
                            </NavLink>
                        </li>

                        <li>
                            <NavLink className="nav-link" to="/diabetes"
                            style={({ isActive }) => {
                                return {
                                  fontSize:"25px",
                                    color: isActive ? "white" : ""
                                };
                            }}
                            >Diabetes 
                            </NavLink>
                        </li>                       
                        
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
