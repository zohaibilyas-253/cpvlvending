import React from 'react';
import { useParams, Link } from 'react-router';

const ContentDetails = ({ dataSource, contentType }) => {
    const { link } = useParams();

    console.log("Link: ", link)
    
    const item = dataSource.find((item) => item.link === link);
    console.log("item",item)
    
    if (!item) {
        return <div>Content not found</div>;
    }
    
    // Find the next item for navigation
    const nextItem = dataSource.find((b) => b.id === item.nextId);
    
    // Determine content-specific settings
    const returnLink = contentType === 'blog' ? '/blog' : '/machines';
    const returnText = contentType === 'blog' ? 'More Blogs' : 'More Machines';
    const nextText = contentType === 'blog' ? 'Next Case' : 'Another Machine';
    
    return (
        <>
            {/* Header */}
            <header className="header-project p-relative over-hidden d-flex align-items-end">
                <div className="box-img w-100 p-absolute top-0 right-0 dsn-hero-parallax-img before-z-index"
                    data-overlay="5">
                    <img className="cover-bg-img" src={item.images[0]} alt="" />
                </div>
                <div className="p-relative dsn-container dsn-hero-parallax-title w-100 z-index-1">
                    <div className="p-relative d-flex align-items-center w-100">
                        <div className="box-content w-100 d-flex flex-column z-index-1 gap-row-20">
                            <h1 className="title-lg text-upper text-center" data-dsn-ajax="title">{item.shortTitle}</h1>
                            <div className="d-grid grid-md-2 w-80 ml-auto mr-auto">
                                <ul className="d-flex flex-column justify-content-center gap-row-10">
                                    <li className="d-flex align-items-center gap-10">
                                        <h6 className="text-upper fw-400">Year :</h6><span>{item.year}</span>
                                    </li>
                                    <li className="d-flex align-items-center gap-10">
                                        <h6 className="text-upper fw-400">Category :</h6>
                                        <div className="cat d-flex">
                                            <span className="filter-bg heading-color">{item.category}</span>
                                        </div>
                                    </li>
                                    {item.specifications && (
                                        <li className="d-flex align-items-center gap-10">
                                            <h6 className="text-upper fw-400">Type :</h6>
                                            <span>{item.specifications.type}</span>
                                        </li>
                                    )}
                                </ul>
                                <div className="d-flex flex-column gap-row-15">
                                    <p className="description max-w570 heading-color">
                                        {item.largeTitle}
                                    </p>
                                    <div className="dsn-btn dsn-btn-shape d-inline-flex d-flex no-padding text-upper">
                                        <Link className="button"
                                            to={returnLink}
                                            target="_blank">
                                            <span className="title-btn p-relative z-index-1"
                                                data-animate-text={`View ${contentType === 'blog' ? 'project' : 'machine'}`}>
                                                <span>{returnText}</span>
                                            </span>
                                        </Link>
                                        <span className="icon background-section theme-color">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path
                                                    d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z">
                                                </path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            
            {/* Main Content */}
            <div id="page_wrapper" className="wrapper">
                {/* Image Gallery - Only show if there are multiple images */}
                {item.images && item.images.length > 1 && (
                    <div className="our-work section-margin not-filter dsn-filter"
                        data-dsn-option='{"speed" : 15 , "start" : "-40px top"}'>
                        <div className="dsn-container">
                            <div className="dsn-cards">
                                <div className="dsn-posts flexibly-hover gap-30">
                                    {item.images.slice(1, 4).map((image, index) => (
                                        <div key={index} className="dsn-item-post grid-item p-relative">
                                            <div className="box-image-bg w-100 h-500">
                                                <img src={image} className="cover-bg-img" alt="" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                
                {/* Content Sections */}
                <section className="project-info section-margin">
                    <div className="container">
                        <div className="d-flex flex-column align-items-center gap-row-60">
                            <h2 className="title w-90">{contentType === 'blog' 
                                ? "Infusing life into creativity, setting new standards in creative innovation." 
                                : "Premium vending solutions that transform spaces and enhance experiences."}</h2>
                            
                            {/* Standard content sections for both types */}
                            {item.content && item.content.map((section, idx) => (
                                <div key={idx} className="d-grid grid-half-1 w-90">
                                    <div className="pinned-scroll">
                                        <div className="pinned-elements">
                                            <span>( {section.section} )</span>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column gap-row-10">
                                        <p>{section.text}</p>
                                    </div>
                                </div>
                            ))}
                            
                            {/* Machine-specific specifications */}
                            {contentType === 'machines' && item.specifications && (
                                <div className="d-grid grid-half-1 w-90">
                                    <div className="pinned-scroll">
                                        <div className="pinned-elements">
                                            <span>( Specifications )</span>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column gap-row-10">
                                        <ul className="specs-list">
                                            {Object.entries(item.specifications).map(([key, value], idx) => (
                                                <li key={idx}><strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}
                            
                            {/* Machine-specific pricing if available */}
                            {contentType === 'machines' && item.pricing && (
                                <div className="d-grid grid-half-1 w-90">
                                    <div className="pinned-scroll">
                                        <div className="pinned-elements">
                                            <span>( Pricing )</span>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column gap-row-10">
                                        <h3>${item.pricing.price}</h3>
                                        <p>{item.pricing.description}</p>
                                        {item.pricing.financing && (
                                            <p className="financing-note">Financing available: {item.pricing.financing}</p>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
                
                {/* Large Feature Image */}
                <div className="over-hidden section-margin">
                    <div className="img-box-parallax dsn-animate dsn-effect-down has-popup dsn-active"
                        data-dsn-grid="move-up">
                        <div className="effect-popup before-z-index h-100" 
                            data-src={item.images[item.images.length > 4 ? 4 : 0]}
                            data-caption={`${item.category} #1`} data-fancybox="_1" data-cursor="open" data-dsn-overlay="0">
                            <img className="cover-bg-img has-direction" src={item.images[item.images.length > 4 ? 4 : 0]} alt="" />
                        </div>
                        <div className="cap"><span>{item.category}</span></div>
                    </div>
                </div>
                
                {/* Next Item Navigation */}
                {nextItem && (
                    <section className="next-projects p-relative mt-section p-relative over-hidden d-flex justify-content-center flex-column">
                        <div className="box-img w-100 p-absolute bottom-0 right-0 dsn-hero-parallax-img before-z-index"
                            data-overlay="5">
                            <img className="cover-bg-img" src="/assets/img/about-back.jpg" alt="" />
                        </div>
                        <div className="p-relative dsn-container dsn-hero-parallax-title w-100 z-index-1">
                            <div className="p-relative d-flex align-items-center w-100">
                                <div className="box-content w-100 d-flex flex-column z-index-1">
                                    <h4 className="title-block text-upper text-center">{nextText}</h4>
                                    <Link to={`${returnLink}/${nextItem.link}`}
                                        className="effect-ajax">
                                        <h1 className="title-lg text-upper text-center" data-dsn-ajax="title">
                                            {nextItem.shortTitle}
                                        </h1>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </div>
        </>
    );
};

export default ContentDetails;