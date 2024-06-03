import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
    return (
        <div className="home-page-container">
            <div className="home-container">
                <div className="section">
                    <Link to="english-in-trucking">
                        <img
                            src="https://static.ecoach.com/upload/12310/image/583bd3f1-7845-413d-9687-00479c3d24e5.png"
                            alt="english in trucking"
                            className="big-image"
                        />
                        <p>English in tracking</p>
                    </Link>
                </div>
                <div className="section">
                    <Link to="truck-dispatcher-theory">
                        <img
                            src="https://static.ecoach.com/upload/12310/image/c9e3465a-3bd4-45d3-8be1-a7513bd806de.jpg"
                            alt="track dispatcher theory"
                            className="big-image"
                        />
                        <p>Truck Dispatcher 3.0 - Theory</p>
                    </Link>
                </div>
                <div className="section">
                    <Link to="truck-dispatcher-trailer-type-peculiarities">
                        <img
                            src="https://static.ecoach.com/upload/12310/image/80089c49-f8c0-4546-b2c5-2cafd826e550.jpg"
                            alt="truck dispatcher trailer type peculiarities"
                            className="big-image"
                        />
                        <p>Truck Dispatcher 3.0 - (Constructor) Trailer Type Peculiarities</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home