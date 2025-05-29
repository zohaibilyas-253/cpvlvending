import React, { useState } from 'react'
import { Link } from 'react-router'
import "./navbar.css"
const Navbar = () => {

    const [menuActive, setMenuActive] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setMenuActive(prev => !prev);
    };
    const toggleDropdown = () => setDropdownOpen(prev => !prev);


    return (
        <>
            {/* <!-- ========== Menu ========== --> */}
            {/* <header id="site_menu_header" className="site-header">
                <div className="main-logo">
                    <a href="/" onClick={(e) => { e.preventDefault(); window.location.href = '/'; }} className="custom-logo-link main-brand effect-ajax"
                        aria-current="page">
                        <img src="/assets/img/logo-light4.png" className="custom-logo logo-light" alt="" />
                        <img src="/assets/img/logo-light4.png" className="custom-logo logo-dark" alt="" />
                    </a>
                </div>
                <nav className="main-navigation ">
                    <div className="menu-cover-title header-container dsn-container">MENU</div>
                    <ul id="dsn-primary-list" className="primary-nav h2">
                        <li className="nav-item has-sub-menu">
                            <a href="/" onClick={(e) => { e.preventDefault(); window.location.href = '/'; }}>
                                <span className="overflow">Home</span>
                            </a>
                        </li>

                        <li className="nav-item has-sub-menu">
                            <a href="/machines" onClick={(e) => { e.preventDefault(); window.location.href = '/machines'; }}>
                                <span className="overflow">Machines</span>
                            </a>
                            <ul className="nav-item">
                                <li className="dsn-back">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30px"
                                            viewBox="0 0 400.004 400.004" xml:space="preserve">
                                            <g>
                                                <path
                                                    d="M382.688,182.686H59.116l77.209-77.214c6.764-6.76,6.764-17.726,0-24.485c-6.764-6.764-17.73-6.764-24.484,0L5.073,187.757 c-6.764,6.76-6.764,17.727,0,24.485l106.768,106.775c3.381,3.383,7.812,5.072,12.242,5.072c4.43,0,8.861-1.689,12.242-5.072 c6.764-6.76,6.764-17.726,0-24.484l-77.209-77.218h323.572c9.562,0,17.316-7.753,17.316-17.315 C400.004,190.438,392.251,182.686,382.688,182.686z" />
                                            </g>
                                        </svg>
                                        <span className="text-toggle-back">
                                            <span className="text-name">Home</span>
                                            <span className="text-back">Back</span>
                                        </span>
                                    </span>
                                </li>
                                <li className="nav-item ">
                                    <a title="Home" href="/machines/custom-vending-machines" onClick={(e) => { e.preventDefault(); window.location.href = '/machines/custom-vending-machines'; }}>
                                        <span className="overflow">Custom Machines</span>
                                    </a>
                                </li>
                                <li className="nav-item ">
                                    <a title="Demo 2" href="/machines/school-vending-machines" onClick={(e) => { e.preventDefault(); window.location.href = '/machines/school-vending-machines'; }} data-dsn-text="Demo 2">
                                        <span className="overflow">School Machines</span>
                                    </a>
                                </li>
                                <li className="nav-item ">
                                    <a title="infinity work" href="/machines/hospital-vending-machines" onClick={(e) => { e.preventDefault(); window.location.href = '/machines/hospital-vending-machines'; }} data-dsn-text="infinity work">
                                        <span className="overflow">Hospital Machines</span>
                                    </a>
                                </li>
                                <li className="nav-item ">
                                    <a title="parallax carousel" href="/machines/gym-vending-machines" onClick={(e) => { e.preventDefault(); window.location.href = '/machines/gym-vending-machines'; }}
                                        data-dsn-text="parallax carousel">
                                        <span className="overflow">Gym Machines</span>
                                    </a>
                                </li>
                                <li className="nav-item ">
                                    <a title="parallax carousel" href="/machines/fresh-food-vending-machines" onClick={(e) => { e.preventDefault(); window.location.href = '/machines/fresh-food-vending-machines'; }}
                                        data-dsn-text="parallax carousel">
                                        <span className="overflow">Fast Food Machines</span>
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <a href="/about" onClick={(e) => { e.preventDefault(); window.location.href = '/about'; }}>
                                <span className="overflow">About</span>
                            </a>
                        </li>

                        <li className="nav-item has-sub-menu">
                            <a href="/blog" onClick={(e) => { e.preventDefault(); window.location.href = '/blog'; }}>
                                <span className="overflow">Blogs</span>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="/contact" onClick={(e) => { e.preventDefault(); window.location.href = '/contact'; }}>
                                <span className="overflow">Contact</span>
                            </a>
                        </li>
                    </ul>


                    <div className="container-content  d-flex flex-column justify-content-center section-margin">
                        <div className="nav__info">
                            <div className="nav-content">
                                <h5 className="sm-title-block mb-10">Studio</h5>
                                26-30 New Damietta
                                El-Mahalla El-Kubra, SK1 66LM

                            </div>
                            <div className="nav-content mt-30">
                                <h5 className="sm-title-block mb-10">Contact</h5>
                                <p className="links over-hidden mb-1">
                                    <a className="link-hover d-block" href="tel:00201004392260"
                                        data-hover-text="+00 (2)012 3321">+00
                                        (2)01004392260</a>
                                    <a className="link-hover" href="tel:00201024552406" data-hover-text="+00 (2)012 3321">+00
                                        (2)01024552406</a>
                                </p>
                                <p className="links over-hidden"><a className="link-hover" href="mailto:info@dsngrid.com"
                                    data-hover-text="info@dsngrid.com">info@dsngrid.com</a></p>

                            </div>
                        </div>
                        <div className="nav-social nav-content mt-30">
                            <div className="nav-social-inner p-relative">
                                <h5 className="sm-title-block mb-10">Follow us</h5>
                                <ul style={{ "--dsn-li-name": "dsn6;" }}>
                                    <li style={{ "--dsn-li-index": 0 }}><a href="#0" target="_blank"
                                        rel="nofollow noopener noreferrer">Dribbble.</a></li>
                                    <li style={{ "--dsn-li-index": 1 }}><a href="#0" target="_blank"
                                        rel="nofollow noopener noreferrer">Behance.</a></li>
                                    <li style={{ "--dsn-li-index": 2 }}><a href="#0" target="_blank"
                                        rel="nofollow noopener noreferrer">Linkedin.</a></li>
                                    <li style={{ "--dsn-li-index": 3 }}><a href="#0" target="_blank"
                                        rel="nofollow noopener noreferrer">Twitter.</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
                <div id="navbar_toggle" className="navbar-toggle">
                    <div className="toggle-icon">
                        <div className="toggle-line"></div>
                        <div className="toggle-line"></div>
                        <div className="toggle-line"></div>
                    </div>
                    <div className="toggle-text">
                        <div className="text-menu">Menu</div>
                        <div className="text-open">Open</div>
                        <div className="text-close">Close</div>
                    </div>
                </div>
                <div className="bg-load background-main"></div>

                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none"
                    className="bg-load dsn-svg-transition">
                    <path vectorEffect="non-scaling-stroke" d="M 0 100 V 100 Q 50 100 100 100 V 100 z" />
                </svg>

            </header> */}
            {/* <!-- ========== End Menu ========== --> */}



            <header className="header">

                <div className="main-logo">
                    <a href="/" onClick={(e) => { e.preventDefault(); window.location.href = '/'; }} className="custom-logo-link main-brand effect-ajax"
                        aria-current="page">
                        <img src="/assets/img/logo-light4.png" className="custom-logo logo-light" alt="" />
                        <img src="/assets/img/logo-light4.png" className="custom-logo logo-dark" alt="" />
                    </a>
                </div>

                {/* Menu icon */}
                <i
                    className={`bx ${menuActive ? 'bx-x' : 'bx-menu'}`}
                    id="menu-icon"
                    onClick={toggleMenu}
                ></i>

                {/* Nav menu */}
                <nav className={`navbar ${menuActive ? 'active' : ''}`}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <div
                        className={`dropdown ${dropdownOpen ? 'open' : ''}`}
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                        onClick={() => {
                            if (window.innerWidth <= 768) setDropdownOpen(!dropdownOpen);
                        }}
                    >
                        <span className="dropdown-toggle">Machines</span>
                        <div className="dropdown-content">
                            <Link to="/machines/custom-vending-machines">Custom Machines</Link>
                            <Link to="/machines/school-vending-machines">School Machines</Link>
                            <Link to="/machines/hospital-vending-machines">Hospital Machines</Link>
                            <Link to="/machines/gym-vending-machines">Gym Machines</Link>
                            <Link to="/machines/fresh-food-vending-machines">Fast Food Machines</Link>
                        </div>
                    </div>

                    <Link to="/blog">Blogs</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </header>

            {/* Background overlay */}
            <div className={`nav-bg ${menuActive ? 'active' : ''}`}></div>
        </>
    )
}

export default Navbar