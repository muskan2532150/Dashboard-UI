import React from "react"
import "./navbar.css";

const Navbar = () => {
    return (
            <nav className="bg-dark position-fixed h-100 text-white">
                <div className="container-fluid me-auto h-100 fs-4 d-flex flex-column mb-2 align-items-center">
                    <a className="fs-1" href="#">L</a>
                    <ul className=" mb-lg-0 flex-grow-1">
                        <li className="nav-item mb-2">
                            <a className="nav-link" aria-current="page" href="#">Dashboard</a>
                        </li>
                        <li className="nav-item mb-2">
                            <a className="nav-link" href="#">New Project</a>
                        </li>
                        <li className="nav-item mb-2">
                          <a href="#" className="nav-link" >Courses</a>
                        </li>
                    </ul>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown button
                        </button>
                        <ul className="dropdown-menu mb-3">
                            <li><a className="dropdown-item" href="#">Sign Out</a></li>
                            <li className="dropdown-item">Setting</li>
                        </ul>
                    </div>
                </div>
            </nav >
    )
}

export default Navbar