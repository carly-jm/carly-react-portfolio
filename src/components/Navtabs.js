import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {

    const location = useLocation();

    return (
        <ul className="nav justify-content-end">

            <li className="nav-item">
                <Link
                    to="/portfolio-react/about"
                    className={location.pathname === "/portfolio-react/about" ? "nav-link active" : "nav-link"}
                >
                    About
        </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/portfolio-react/projects"
                    className={location.pathname === "/portfolio-react/projects" ? "nav-link active" : "nav-link"}
                >
                    Projects
        </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/portfolio-react/resume"
                    className={location.pathname === "/portfolio-react/resume" ? "nav-link active" : "nav-link"}
                >
                    Resume
        </Link>
            </li>
        </ul>
    );
}

export default NavTabs;

