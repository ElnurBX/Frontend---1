import React from 'react'
import "./header.scss"
import {Link} from "react-router-dom"
const Header = () => {
return (
    <header className='Sait__header'>
        <div className="container ">
            <div className="row just  justify-content-between">
            <div className="Sait__header_logo  col-1 border">
                <h1 className='fs-1'>Tasty</h1>
            </div>
            <div className="col-6">
            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid">
                   
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <Link class="nav-link " to={"/"}>Home</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" to={"/admin/add"}>add</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" to={"/admin"}>Deshbourd</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" to={"/basket"}>Basket</Link>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
            </div>
        </div>
        </div>
    </header>
)
}

export default Header
                            