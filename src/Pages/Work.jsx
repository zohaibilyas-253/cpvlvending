import React from 'react'
import LoadScripts from '../Hooks/LoadScripts';
import Cursor from '../Components/Cursor/Cursor';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import Our_work from '../Components/Home/Our_work';
import CTA from '../Shared/CTA';
const Work = () => {
    LoadScripts()
    return (
        <>
            <body className="v-dark dsn-ajax">
                <main className="main-root">
                    <Navbar />
                    <div id="dsn-scrollbar">
                        <div id="page_wrapper" className="wrapper">
                            <div className="p-relative over-clip">
                                <header className="header-no-bg p-relative v-dark-head dsn-header-animation over-hidden">
                                    <div className="box-img w-100 p-absolute top-0 right-0 bottom-0 before-z-index dsn-hero-parallax-img "
                                        data-overlay="7">
                                        <img className="cover-bg-img" src="/assets/img/about-back.jpg" alt="" />
                                    </div>

                                    <div className="content p-relative z-index-1">
                                        <div className="container">
                                            <h1 className="title-lg text-upper">OUR BLOGS</h1>

                                            <div className="d-flex align-items-center gap-30 mt-20">
                                                <div className="icon-s background-main v-light">
                                                    <svg height="820" viewBox="0 0 1066 820" width="1066"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="m532.999 546.66h-266.499v-273.32h532.196l266.504-273.34h-598.835l-466.365 478.335v341.665h333.115l399.749-409.99v409.99h266.481v-478.335h-266.481z"
                                                            fill="#000000"></path>
                                                    </svg>
                                                </div>
                                                <h5 className="sm-title-block text-upper max-w570">We are comfortable working at the pace
                                                    and cost that caters to early-stage start-ups. We work as hard as you.</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="footer-header p-absolute bottom-0 left-0 w-100 pb-30 z-index-1 dsn-container d-flex justify-content-between">

                                        <div className="dsn-btn dsn-btn-shape d-flex no-padding text-upper">

                                            <a className="button" href="#about_us" rel="nofollow"
                                                data-dsn-option='{"ease": "power4.inOut" , "duration" : 1.5}'>
                                                <span className="title-btn p-relative  z-index-1" data-animate-text="Scroll to Explore">
                                                    <span>Scroll to Explore</span>
                                                </span>
                                            </a>

                                            <span className="icon theme-color">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path
                                                        d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                                                </svg>
                                            </span>

                                        </div>

                                        <div className="social-box d-flex align-items-center gap-20">
                                            <p>Follow us</p>

                                            <ul className="box-social d-flex">
                                                <li>
                                                    <a href="#">
                                                        <span className="word-root">
                                                            <span className="double-word-column">
                                                                <span className="word">Facebook</span>
                                                                <span className="word">Facebook</span>
                                                            </span>
                                                        </span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="#">
                                                        <span className="word-root">
                                                            <span className="double-word-column">
                                                                <span className="word">Instagram</span>
                                                                <span className="word">Instagram</span>
                                                            </span>
                                                        </span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="#">
                                                        <span className="word-root">
                                                            <span className="double-word-column">
                                                                <span className="word">Youtube</span>
                                                                <span className="word">Youtube</span>
                                                            </span>
                                                        </span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </header>
                                <Our_work />
                            </div>
                            {/* <Our_work />
                            <Our_Services /> */}
                        </div>
                        <CTA />
                        <Footer />
                    </div>
                </main>
                <Cursor />
            </body>

        </>
    )
}

export default Work