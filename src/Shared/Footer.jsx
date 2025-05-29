import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
    return (
        <>
            <footer className="footer mt-60 pb-30">
                <div className="p-relative dsn-marquee over-hidden"
                    data-dsn-option='{"speed":0,"duplicatedNumber":7,"duration":7000,"gap":60,"delayBeforeStart":1000,"direction":"left","duplicated":true,"pauseOnHover":false,"startVisible":true,"pauseOnCycle":true,"allowCss3Support":true}'>
                    <h2 className="dsn-text-marquee d-flex title-md text-upper">WE ARE CPVL</h2>
                </div>

                <div className="dsn-container mt-50">
                    <div className="footer-bottom d-flex justify-content-between">
                        <div className="text-left d-flex flex-column gap-row-10">
                            <div className="links">
                                <ul className="d-flex gap-25">
                                    <li><a href="/" onClick={(e) => { e.preventDefault(); window.location.href = '/'; }}>HOME</a></li>
                                    <li><a href="/about" onClick={(e) => { e.preventDefault(); window.location.href = '/about'; }}>ABOUT</a></li>
                                    <li><a href="/blog" onClick={(e) => { e.preventDefault(); window.location.href = '/blog'; }}>Blogs</a></li>
                                    <li><a href="/contact" onClick={(e) => { e.preventDefault(); window.location.href = '/contact'; }}>CONTACT</a></li>
                                </ul>
                            </div>

                            <p className="cop">© 2025 C P V L. All rights reserved.</p>

                        </div>
                        <div className="text-right">
                            <div className="dsn-btn dsn-btn-shape d-flex no-padding text-upper">

                                <a className="button" href="#page_wrapper" rel="nofollow"
                                    data-dsn-option='{"ease": "power4.inOut" , "duration" : 2}'>
                                    <span className="title-btn p-relative  z-index-1" data-animate-text="Scroll to Top">
                                        <span>Scroll to Top</span>
                                    </span>
                                </a>

                                <span className="icon background-section theme-color">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path
                                            d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
                                    </svg>
                                </span>

                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer