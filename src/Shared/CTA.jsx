import React from 'react'

const CTA = () => {
    return (
        <>
            <div className="next-page pt-section">
                <div className="background-section has-border-radius pt-section p-relative over-hidden">
                    <div className="box-img w-100 p-absolute top-0 right-0 bottom-0 before-z-index dsn-hero-parallax-img "
                        data-overlay="8" data-dsn-grid="move-up">
                        <img className="cover-bg-img" src="/assets/img/bg-next.jpg" alt="" />
                    </div>

                    <div className="container">
                        <div className="content d-flex flex-column align-items-center p-relative z-index-1">
                            <h2 className="title-md text-effect" data-dsn-text="28">EXPLORE <span className="font-sac">Our</span> SPACE</h2>


                            <div className="btn-lg mt-30 gap-25">
                                <a href="/contact" onClick={(e) => { e.preventDefault(); window.location.href = '/contact'; }}>
                                    <div className="btn-lg-inner filter-bg">
                                        <div className="text-inner">
                                            <p className="text-upper heading-color">GET IN TOUCH</p>
                                        </div>
                                        <div className="icon-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path
                                                    d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7L86.6 329.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128z" />
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="footer-box mt-section pb-30 w-100 d-flex justify-content-between">
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

                                <div className="info z-index-1">
                                    <ul className="">
                                        <li className="d-flex gap-5 text-upper">
                                            <span>Project inquiries :</span>
                                            <a href="mailto:grass@emai.com">vending@emai.com</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CTA