import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Navbar } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"


class NavBar extends Component {
    render() {
        return (
            <Navbar className="shadow">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Locations</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/candy">Candies</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/employee">Employees</Link>
                    </li>
                </ul>
            </Navbar>
        )
    }
}

export default NavBar