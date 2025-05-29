import React from 'react'
import { Clients } from '../Static/Clients'
const Testimonials = () => {
    return (
        <section className="dsn-testimonials section-margin">
            <div className="container">

                <div className="w-100 d-flex flex-column pb-20 mb-50 border-bottom">
                    <div className="sub-section d-flex">
                        <span className="sub-title d-flex align-items-center gap-10">[Our Client]
                            <span className="rel">WHAT THEY SAID</span>
                            <span className="iblock">↵</span>
                        </span>
                    </div>
                </div>

                <div className="content-inner d-grid">
                    <div className="testimonials-inner d-flex flex-column gap-row-30">
                        {Clients.map((item, index) => (
                            <div className="testimonial-item d-flex flex-column" key={index}>
                                <div className="quote mb-30">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 40 30" fill="none">
                                        <path d="M0 0V30L15.0025 15V0H0Z" fill="#030104" />
                                        <path d="M24.9961 0V30L39.9986 15V0H24.9961Z" fill="#030104" />
                                    </svg>
                                </div>

                                <div className="content d-flex flex-column gap-row-20">
                                    <p className="title-block dsn-fill text-upper max-w570">
                                        <span>{item.quote}</span>
                                    </p>

                                    <div className="testimonial_info d-flex flex-column gap-row-5">
                                        <p className="info_name heading-color">{item.name}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="testimonials_thumbs_inner pinned-scroll">
                        <ul className="testimonials_thumbs_list_list testimonials_thumbs_flash pinned-element d-flex flex-column gap-row-10">
                            {Clients.map((item, index) => (
                                <li className={`thumb-item ${index === 0 ? "is-active" : ""}`} key={index}>
                                    <span className="thumb-item_inner">
                                        <img className="cover-bg-img" src={item.image} alt={item.name} />
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Testimonials