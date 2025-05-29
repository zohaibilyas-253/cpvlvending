import React from 'react'
import Testimonials from '../../Shared/Testimonials'
import Video from '../About/Video'
import CTA from '../../Shared/CTA'
import Brands from '../About/Brands'

const MachineComp = () => {
    return (
        <div id="dsn-scrollbar">
            <div id="page_wrapper" className="wrapper">

                <header className="header-no-bg p-relative v-dark-head dsn-header-animation over-hidden">
                    <div className="box-img w-100 p-absolute top-0 right-0 bottom-0 before-z-index dsn-hero-parallax-img "
                        data-overlay="7">
                        <img className="cover-bg-img" src="/assets/img/about-back.jpg" alt="" />
                    </div>

                    <div className="content p-relative z-index-1">
                        <div className="container">
                            <h1 className="title-lg text-upper">Machines</h1>

                            <div className="d-flex align-items-center gap-30 mt-20">
                                <div className="icon-s background-main v-light">
                                    <svg height="820" viewBox="0 0 1066 820" width="1066"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="m532.999 546.66h-266.499v-273.32h532.196l266.504-273.34h-598.835l-466.365 478.335v341.665h333.115l399.749-409.99v409.99h266.481v-478.335h-266.481z"
                                            fill="#000000"></path>
                                    </svg>
                                </div>
                                <h5 className="sm-title-block text-upper max-w570">Custom Vending Machines by CPVL Vending</h5>
                            </div>
                        </div>
                    </div>


                    <div
                        className="footer-header p-absolute bottom-0 left-0 w-100 pb-30 z-index-1 dsn-container d-flex justify-content-between">

                        <div className="dsn-btn dsn-btn-shape d-flex no-padding text-upper gap-10">

                            <span className="icon theme-color">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path
                                        d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                                </svg>
                            </span>

                            <a className="button" href="#about_us" rel="nofollow"
                                data-dsn-option='{"ease": "power4.inOut" , "duration" : 1.5}'>
                                <span className="title-btn p-relative  z-index-1" data-animate-text="Scroll to Explore">
                                    <span>Scroll to Explore</span>
                                </span>
                            </a>
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

                <div className="p-relative over-hidden">
                    {/* <!-- ========== Award Scroll Right ========== --> */}
                    <div className="img-under-header p-relative">
                        <div className="dsn-marque p-relative h-100 over-hidden">
                            <div className="dsn-grid-layout  dsn-grid section-image section-move-image use-horizontal-scroll-image"
                                data-dsn-option='{"speed":1,"start":"100%","end":"0%","pin":false}'>
                                <div className="grid-item">
                                    <div className="image-item h-100">
                                        <img className="cover-bg-img has-border-radius" src="/assets/img/about/v2/1.png"
                                            alt="" />
                                    </div>
                                </div>

                                <div className="grid-item">
                                    <div className="image-item h-100">
                                        <img className="cover-bg-img has-border-radius" src="/assets/img/about/v2/2.png"
                                            alt="" />
                                    </div>
                                </div>

                                <div className="grid-item">
                                    <div className="image-item h-100">
                                        <img className="cover-bg-img has-border-radius" src="/assets/img/about/v2/3.png"
                                            alt="" />
                                    </div>
                                </div>

                                <div className="grid-item">
                                    <div className="image-item h-100">
                                        <img className="cover-bg-img has-border-radius" src="/assets/img/about/v2/4.png"
                                            alt="" />
                                    </div>
                                </div>

                                <div className="grid-item">
                                    <div className="image-item h-100">
                                        <img className="cover-bg-img has-border-radius" src="/assets/img/about/v2/5.png"
                                            alt="" />
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="dsn-marque p-relative h-100 over-hidden mt-20">
                            <div className="dsn-grid-layout  dsn-grid section-image section-move-image use-horizontal-scroll-image move-left"
                                data-dsn-option='{"speed":1,"start":"100%","end":"0%","pin":false}'>
                                <div className="grid-item">
                                    <div className="image-item h-100">
                                        <img className="cover-bg-img has-border-radius" src="/assets/img/about/v2/1.png"
                                            alt="" />
                                    </div>
                                </div>

                                <div className="grid-item">
                                    <div className="image-item h-100">
                                        <img className="cover-bg-img has-border-radius" src="/assets/img/about/v2/2.png"
                                            alt="" />
                                    </div>
                                </div>

                                <div className="grid-item">
                                    <div className="image-item h-100">
                                        <img className="cover-bg-img has-border-radius" src="/assets/img/about/v2/3.png"
                                            alt="" />
                                    </div>
                                </div>

                                <div className="grid-item">
                                    <div className="image-item h-100">
                                        <img className="cover-bg-img has-border-radius" src="/assets/img/about/v2/4.png"
                                            alt="" />
                                    </div>
                                </div>

                                <div className="grid-item">
                                    <div className="image-item h-100">
                                        <img className="cover-bg-img has-border-radius" src="/assets/img/about/v2/5.png"
                                            alt="" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* <!-- ========== End Award Scroll Right========== --> */}

                    <div id="about_us" className="about-section-two section-margin text-center text-effect"
                        data-dsn-text="27">
                        <div className="container">
                            <h2 className="title">Here at CPVL Vending, we are dedicated to helping you find a vending machine solution that’s perfect for you.</h2>
                        </div>
                    </div>


                </div>
                <section className="our-services services-hover">
                    <div className="container">
                        <div className="title-box w-100 d-flex justify-content-between pb-20 mb-70 border-bottom">
                            <div className="sub-section d-flex">
                                <span className="sub-title d-flex align-items-center gap-10">[Our Services]
                                    <span className="rel">WHAT WE DO</span>
                                    <span className="iblock">↵</span>
                                </span>
                            </div>

                            <h5 className="sm-title-block text-upper max-w570">CPVL Vending Machines have the ability to capture a very specific niche market, or we have the capability to create something that appeals to any niche. We aim to work with your brand to specifically execute your goals.</h5>
                        </div>

                        <div className="services-inner d-flex flex-column gap-row-50">
                            <div className="services-item text-center">
                                <h3 className="title-lg text-upper">Niche</h3>

                                <div className="cat p-absolute w-100 h-100 top-0 left-0">
                                    <ul className="d-flex justify-content-between h-100 align-items-start">
                                        <li>Audience analysis</li>
                                        <li>Brand strategy</li>
                                        <li>Competitor analysis</li>
                                        <li>Research and insights</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="services-item text-center">
                                <h3 className="title-lg text-upper">Brand</h3>

                                <div className="cat p-absolute w-100 h-100 top-0 left-0">
                                    <ul className="d-flex justify-content-between h-100 align-items-start">
                                        <li>Branding</li>
                                        <li>Marketing</li>
                                        <li>Brand Value</li>
                                        <li>Brand & identity design</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="services-item text-center">
                                <h3 className="title-lg text-upper">Revenue</h3>

                                <div className="cat p-absolute w-100 h-100 top-0 left-0">
                                    <ul className="d-flex justify-content-between h-100 align-items-start">
                                        <li>Growth</li>
                                        <li>Addictive</li>
                                        <li>Creative</li>
                                        <li>Acquisition</li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
                <Video />
                <Testimonials />
                {/* <Brands/> */}
                <CTA />


            </div>

        </div>
    )
}

export default MachineComp