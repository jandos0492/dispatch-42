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
                            src="https://dispatch-42.s3.us-east-2.amazonaws.com/images/english-in-trucking-image.png"
                            alt="english in trucking"
                            className="big-image"
                        />
                        <p>English in tracking</p>
                    </Link>
                </div>
                <div className="section">
                    <Link to="truck-dispatcher-theory">
                        <img
                            src="https://dispatch-42.s3.us-east-2.amazonaws.com/images/truck-dispatcher-theory-image.jpg"
                            alt="truck dispatcher theory"
                            className="big-image"
                        />
                        <p>Truck Dispatcher 3.0 - Theory</p>
                    </Link>
                </div>
                <div className="section">
                    <Link to="truck-dispatcher-trailer-type">
                        <img
                            src="https://dispatch-42.s3.us-east-2.amazonaws.com/images/truck-dispatcher-trailer-type.jpg"
                            alt="truck dispatcher trailer type peculiarities"
                            className="big-image"
                        />
                        <p>Truck Dispatcher 3.0 - Trailer Type</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home