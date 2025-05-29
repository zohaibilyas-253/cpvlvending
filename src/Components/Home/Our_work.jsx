import React from 'react'
import { Articles } from '../../Static/Articles'
import { Link } from 'react-router'

const Our_work = () => {
    return (
        <>
            <section className="our-work work-scroll section-margin">
                <div className="container">
                    <div className="section-title d-flex flex-column gap-20 mb-70">
                        <div className="sub-section d-flex">
                            <span className="number d-block">02</span>
                            <span className="sub-title d-flex align-items-center gap-10">[BLOGS]
                                <span className="rel">ARTICLES</span>
                                <span className="iblock">↵</span>
                            </span>
                        </div>
                        <h2 className="title d-flex flex-column text-effect" data-dsn-text="28">
                            <span>blo</span>
                            {/* <span>duc</span> */}
                            <span>gs</span>
                        </h2>
                    </div>
                </div>

                <div className="dsn-container">
                    <div className="dsn-cards">
                        <div className="dsn-cards use-v-scroll p-relative"
                            data-dsn-option='{"speed" : 4,"center_screen" : true }'>
                            <div className="dsn-posts ">
                                {Articles.map((item, index) => (
                                    <article
                                        key={index}
                                        className="dsn-item-post grid-item over-hidden p-relative has-border-radius photography"
                                    >
                                        <div className="box-content d-flex">
                                            <div className="img-cat w-100">
                                                <div
                                                    className="box-image-bg w-100 over-hidden has-border-radius before-z-index dsn-swiper-parallax-transform p-relative"
                                                    data-overlay="5"
                                                >
                                                    <img
                                                        src={item.images[0]}
                                                        className="cover-bg-img dsn-swiper-parallax-transform"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>

                                            <div className="post-content z-index-1 d-flex flex-column p-absolute">
                                                <div className="post-info d-flex flex-column align-items-center">
                                                    <h2
                                                        className="post-title word-wrap d-inline-block title-lg text-upper text-effect"
                                                        data-dsn-text="28"
                                                    >
                                                        <Link
                                                            to={`/blog/${item.link}`}
                                                            className="effect-ajax init-color"
                                                            data-dsn-ajax="work"
                                                        >
                                                            {item.shortTitle}
                                                        </Link>
                                                    </h2>
                                                </div>
                                            </div>

                                            <div className="d-flex justify-content-between align-items-center w-100 mt-auto p-absolute bottom-0 left-0 z-index-1 p-30">
                                                <div className="slide-date">
                                                    <span className="filter-bg heading-color">{item.year}</span>
                                                </div>

                                                <div className="cat d-flex">
                                                    <span className="filter-bg heading-color">{item.category}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Our_work