import React from 'react'
import './navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary ">
                <div className="container-fluid">
                    <a className="navbar-brand ms-2" href="#">L</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">New Project</a>
                            </li>
                        </ul>
                        <form className="d-flex w-50" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle rounded ms-1 signout-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Icon
                            </button>
                            <ul className="dropdown-menu dropdown-menu-dark">
                                <li><a className="dropdown-item" href="#">Sign Out</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar