import React from 'react'

const Video = () => {
    return (
        <>
            {/* <!-- ========== Play Video ========== --> */}
            < div className="section-video section-margin p-relative dsn-animate-video v-dark-head"
                data-dsn option='{"speed":5}' >
                <div className="container d-flex align-items-center h-100">
                    <div className="content d-grid grid-3 justify-content-between align-items-center w-100 z-index-1">
                        <h6 className="title animate-left text-left">PLAY</h6>
                        <div className="dsn-normal-btn dsn-icon-heading-color d-flex justify-content-center">
                            <a className="dsn-btn dsn-border border-color-default vid  filter-bg move-circle has-icon-left"
                                href="/assets/img/vending/vending1.mp4" target="_blank" rel="nofollow"
                                data-dsn="parallax">
                                <span className="dsn-icon dsn-bg-before btn-icon-left heading-color z-index-1">
                                    <i className="fas fa-play"></i>
                                </span>
                                <span className="title-btn p-relative z-index-1">PLAY</span>
                            </a>
                        </div>
                        <h6 className="title animate-right text-right">REEL</h6>
                    </div>
                </div>
                <div className="dsn-container dsn-bg-section p-absolute w-100 h-100 over-hidden top-0 left-0">
                    <div className="h-100 img-box-parallax before-z-index section-margin w-100 has-border-radius"
                        data-overlay="4">
                        <img src="/assets/img/vending/vending2.jpg" className="cover-bg-img has-direction has-border-radius"
                            alt="" />
                    </div>

                </div>
            </div >
            {/* <!-- ========== End Play Video ========== --> */}
        </>
    )
}

export default Video