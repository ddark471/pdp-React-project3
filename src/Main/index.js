import React from "react";
import './style.css';

const Main = () => {
    return(
        <div className="wrap__main">
            <div className="main__container">
                <div className="container__card">
                    <div className="card__category">
                        <span className="category__text">Free</span>
                    </div>
                    <div className="card__content">
                        <div className="content__price">
                            <span className="price">$0 </span>
                            <span className="date"> / mo</span>
                        </div>
                        <div className="content__features">
                            <span className="features__text">10 users included</span>
                            <span className="features__text">2 GB of storage</span>
                            <span className="features__text">Email support</span>
                            <span className="features__text">Help center access</span>
                        </div>
                        <a href="#asoidhf" className="content__signup">
                            Sign up for free
                        </a>
                    </div>
                </div>
                <div className="container__card">
                    <div className="card__category">
                        <span className="category__text">Free</span>
                    </div>
                    <div className="card__content">
                        <div className="content__price">
                            <span className="price">$15 </span>
                            <span className="date"> / mo</span>
                        </div>
                        <div className="content__features">
                            <span className="features__text">20 users included</span>
                            <span className="features__text">10 GB of storage</span>
                            <span className="features__text">Phone email support</span>
                            <span className="features__text">Help center access</span>
                        </div>
                        <a href="#asoidhf" className="content__signupdark">
                            Get started
                        </a>
                    </div>
                </div>
                <div className="container__card">
                    <div className="card__category">
                        <span className="category__text">Free</span>
                    </div>
                    <div className="card__content">
                        <div className="content__price">
                            <span className="price">$29 </span>
                            <span className="date"> / mo</span>
                        </div>
                        <div className="content__features">
                            <span className="features__text">30 users included</span>
                            <span className="features__text">15 GB of storage</span>
                            <span className="features__text">Phone email support</span>
                            <span className="features__text">Help center access</span>
                        </div>
                        <a href="#asoidhf" className="content__signupdark">
                            Contact us
                        </a>
                    </div>
                </div>
            </div>

            <footer className="main__footer">
                <div className="footer__content">
                    <div className="content__logo">
                        <img src={"https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"} className="logo__img" alt=""/>
                        <span className="logo__text">© 2017-2018</span>    
                    </div>

                    <div className="content__columns">
                        <ul className="columns__main">
                            <li className="main__header">Features</li>
                            <li className="main__text">Cool stuff</li>
                            <li className="main__text">Random feature</li>
                            <li className="main__text">Team future</li>
                            <li className="main__text">Stuff for developers</li>
                            <li className="main__text">Another one</li>
                            <li className="main__text">Last time</li>
                        </ul>

                        <ul className="columns__main">
                            <li className="main__header">Resources</li>
                            <li className="main__text">Resource</li>
                            <li className="main__text">Resource name</li>
                            <li className="main__text">Another resource</li>
                            <li className="main__text">Final resource</li>
                        </ul>
                        
                        <ul className="columns__main">
                            <li className="main__header">About</li>
                            <li className="main__text">Team</li>
                            <li className="main__text">Locations</li>
                            <li className="main__text">Privacy</li>
                            <li className="main__text">Terms</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
};

export default Main;