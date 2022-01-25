import React from 'react';
import Usercontext from "../../contexts/UserContext";
import { Link } from 'react-router-dom';
import { useContext } from "react";

const Nav = () => {
    const user = useContext(Usercontext)
    console.log(user)

    // Below We will use link from react router to replace our anchor tag
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Pokepedia</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" aria-current="page" to="pokemon/list">Pokemon List</Link>
                        <Link className="nav-link" to="login">Login</Link>

                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
