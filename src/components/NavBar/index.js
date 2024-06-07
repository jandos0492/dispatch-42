import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse as farFaHouse } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";

const NavBar = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    const iconSize = windowWidth < 600 ? "lg" : "2x";


    return (
        <header>
            <div className="container">
                <Link className="home-icon" to="/">
                    <FontAwesomeIcon icon={farFaHouse} size={iconSize} />
                </Link>
            </div>
        </header>
    )
}

export default NavBar;