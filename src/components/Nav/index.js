import React from 'react';
import Usercontext from "../../contexts/UserContext";
import { useContext } from "react";

const Nav = () => {
    const user = useContext(Usercontext)
    console.log(user)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Pokepedia</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#">Pokemon List</a>
                        <a className="nav-link" href="#">Login</a>

                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
