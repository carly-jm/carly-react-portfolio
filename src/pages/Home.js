import React from 'react';
import { Link } from "react-router-dom";


export default function Home() {
    return (
        <div className="row d-flex justify-content-center entrance">
            <Link
                to="/portfolio-react/about"
                className="text-center"
            >
            <br />
            Welcome
        </Link>
        </div>
    )
}
