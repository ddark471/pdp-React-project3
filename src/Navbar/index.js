import React from "react";
import './style.css';

const Navbar = () => {
    return(
        <nav className="wrap__navbar">
            <div className="navbar__text">
                <span className="text__company-name">Company name</span>
            </div>

            <div className="navbar__buttons">
                <div className="buttons__link">
                    <a href="www.google.com" className="link link__hover">Features</a>
                    <a href="www.google.com" className="link link__hover">Enterprise</a>
                    <a href="www.google.com" className="link link__hover">Support</a>
                    <a href="www.google.com" className="link link__hover">Pricing</a>
                </div>

                    <a href="www.google.com" className="sign__text text__hover">Sign up</a>
                
            </div>
        </nav>
    )
}

export default Navbar;