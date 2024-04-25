import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Foo from './Foo';


function Nav() {
    const visibility = () => {
        let nav = document.getElementById('offcanvasRight');
        nav.style.visibility='hidden'
    }
    return (
        <>
            <nav className="navbar navbar-dark bg-dark fixed-top">
                <div class="container-fluid">
                    <Link to='/' className="navbar-brand" id='hotel-logo'>LUXURIOUS <br /><span className='hotel'>HOTEL</span></Link>
                    <button class="btn btn-dark nav-icon" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <i class="fa-solid fa-bars"></i></button>
                    <Link className="nav-link " to="/login"><button className='login'>LOG IN</button> </Link>
                    <div class="offcanvas offcanvas-end bg-dark" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header" id='offcanvas-header'>
                            <Link to='/' className='nav-link' id='nav'> <h5 id="offcanvasRightLabel" className='logo' onClick={visibility}>LUXURIOUS <br /><span className='hotel2'>HOTEL</span></h5></Link>
                            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <Link to="/" className="nav-link active" id='nav' onClick={visibility}>Home</Link>
                            <Link to="./page" className="nav-link" id='nav' onClick={visibility}>About</Link>
                            <Link to="room" className="nav-link" id='nav' onClick={visibility}>Restaurant</Link>
                            <Link to="reservation" className="nav-link" id='nav' onClick={visibility} >News & event</Link>
                            <Link to="blog" className="nav-link" id='nav' onClick={visibility}>Contact</Link>
                            <Link className="nav-link " to="/profile" id='nav' onClick={visibility}>
                                Add New
                            </Link>
                            <Link className="nav-link " to="/users" id='nav' onClick={visibility}>
                                Users
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet />
            {/* <Footer/> */}
            <Foo />


        </>
    )
}

export default Nav
