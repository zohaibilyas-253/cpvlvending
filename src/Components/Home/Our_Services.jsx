import React from 'react'
import { Services } from '../../Static/Services'

const Our_Services = () => {
    return (
        <>
            <section className="our-services services-personal section-padding v-light over-hidden">
                <div className="title-move p-relative over-hidden mb-70 text-center">
                    <div className="section-title not-mw grid-item  text-effect" data-dsn-text="28">
                        <h2 className="title text-center">

                            <span className="d-block"></span>
                            Why CPVL
                        </h2>
                    </div>

                </div>

                <div className="container">
                    <div className="services-inner">
                        {Services.map((service, index) => (
                            <div className="service-item dsn-up" key={index}>
                                <div className="d-flex flex-column">
                                    <div className="title-box d-flex align-items-center gap-20">
                                        <div className={`icon ${service.iconBgClass}`}>
                                            {service.svg}
                                        </div>
                                        <h4 className="title text-upper">{service.title}</h4>
                                    </div>

                                    <div className="content mt-30 d-grid grid-1-half">
                                        <div className="text">
                                            <p className="sm-title-block text-upper max-w570">
                                                {service.description}
                                            </p>
                                        </div>

                                        <ul className="text-upper text-right ml-auto body-color">
                                            {service.features.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </>
    )
}

export default Our_Services