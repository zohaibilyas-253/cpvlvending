import React from 'react'

const Hero = () => {
    return (
        <>
            <header className="main-header p-relative v-dark-head dsn-header-animation over-clip">
                <div className="box-img w-100 p-absolute top-0 right-0 bottom-0 before-z-index dsn-hero-parallax-img "
                    data-overlay="7">
                    <img className="cover-bg-img" src="/assets/img/header1.png" alt="" />
                </div>

                <div className="dsn-container">
                    <div className="container-content p-relative z-index-1">
                        <div className="content d-grid">
                            <h1 className="title-lg text-upper d-flex flex-column text-effect" data-dsn-text="28">
                                <span>SNACK</span> <span>SMART</span>
                                <span>VEND</span> <span>EASY</span>
                            </h1>

                            <div className="content-float pinned-scroll p-relative pt-30 d-flex flex-column">
                                <div className="p-relative h-100">
                                    <div className="pinned-elements">
                                        <div className="d-flex flex-column">
                                            <p className="sm-title-block text-upper">
                                                VENDING® is a modern solution provider for smart, accessible, and automated refreshment services.
                                            </p>
                                        </div>

                                        <ul className="mt-30">
                                            <li>Smart Vending Solutions</li>
                                            <li>Custom Machine Design</li>
                                            <li>Product Stock & Strategy</li>
                                        </ul>

                                    </div>
                                </div>

                                <div className="box-img mt-30">
                                    <img src="/assets/img/2025-letter1.png" alt="" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="footer-header p-absolute bottom-0 left-0 w-100 pb-30 z-index-1 dsn-container d-flex justify-content-between">
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
                </div>
            </header>
        </>
    )
}

export default Hero