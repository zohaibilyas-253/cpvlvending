import React from 'react'

const ContactComp = () => {
  return (
    <>
      <div id="dsn-scrollbar">
        <div id="page_wrapper" className="wrapper">

          <header className="header-no-bg p-relative v-dark-head dsn-header-animation over-hidden">
            <div className="box-img w-100 p-absolute top-0 right-0 bottom-0 before-z-index dsn-hero-parallax-img "
              data-overlay="7">
              <img className="cover-bg-img" src="/assets/img/about-back.jpg" alt="" />
            </div>

            <div className="content p-relative z-index-1">
              <div className="container">
                <h1 className="title-lg text-upper">Contact</h1>

                <div className="d-flex align-items-center gap-30 mt-20">
                  <div className="icon-s background-main v-light">
                    <svg height="820" viewBox="0 0 1066 820" width="1066"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="m532.999 546.66h-266.499v-273.32h532.196l266.504-273.34h-598.835l-466.365 478.335v341.665h333.115l399.749-409.99v409.99h266.481v-478.335h-266.481z"
                        fill="#000000"></path>
                    </svg>
                  </div>
                  <h5 className="sm-title-block text-upper max-w570">Have a project or an idea<br /> you'd like
                    to collaborate with Us? Let's get in touch!</h5>
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

          {/* <!-- ========== Section Move ========== --> */}
          <div className="section-video p-relative dsn-animate-video v-dark-head" data-dsn-option='{"speed":5}'>
            <div className="dsn-container dsn-bg-section p-absolute w-100 h-100 over-hidden top-0 left-0">
              <div className="h-100 img-box-parallax before-z-index w-100">
                <div className="map-custom has-border-radius h-100" data-dsn-lat="51.5073509"
                  data-dsn-len="-0.1277583" data-dsn-zoom="14">
                </div>
              </div>

            </div>
          </div>
          {/* <!-- ========== End Section Move ========== --> */}


          <div   className="contact-inner section-margin">
            <div className="container">
              <div className="box-info">
                <div className="d-grid grid-sm-3">

                  <div
                    className="info-item d-flex flex-column gap-row-5 icon-size-40 dsn-icon-heading-color text-center">
                    <div className="dsn-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path
                          d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                      </svg>
                    </div>
                    <p className="sm-title-block text-upper">2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
                    <p className="text-upper">Address</p>
                  </div>

                  <div
                    className="info-item d-flex flex-column gap-row-10 icon-size-40 dsn-icon-heading-color text-center">
                    <div className="dsn-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path
                          d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                      </svg>
                    </div>
                    <p className="sm-title-block text-upper"><a href="#">vending@gmail.com</a></p>
                    <p className="text-upper">Email</p>
                  </div>

                  <div
                    className="info-item d-flex flex-column gap-row-10 icon-size-40 dsn-icon-heading-color text-center">
                    <div className="dsn-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path
                          d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                      </svg>
                    </div>
                    <p className="sm-title-block text-upper"><a href="tel:+1312-555-5678">(+12) 345 6789</a></p>
                    <p className="sm-title-block text-upper"><a href="tel:+1312-555-5678">(+33) 345 6789</a></p>
                    <p className="text-upper">Phone</p>
                  </div>
                </div>
              </div>

              <div className="box-form d-flex flex-column align-items-center p-relative mt-50">
                <h3 className="title text-center text-upper mb-30">Let's Work <br /> Together</h3>
                <div className="dsn-form form-box d-flex flex-column p-relative">
                  <form className="form w-100"
                    data-toggle="validator">
                    <div className="messages"></div>
                    <div className="input__wrap controls">
                      <div className="d-flex gap-30" data-dsn-gap="0px 30px">
                        <div className="form-group dsn-up">
                          <div className="entry-box">

                            <input type="text" name="name"
                              placeholder="Type your name" required="required"
                              data-error="name is required." />
                          </div>
                          <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-group dsn-up">
                          <div className="entry-box">

                            <input type="email" name="email"
                              placeholder="Type your Email Address" required="required"
                              data-error="Valid email is required." />
                          </div>
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>


                      <div className="form-group dsn-up">
                        <div className="entry-box">

                          <textarea   className="form-control" name="message" rows="7"
                            placeholder="Tell us about you and the world" required="required"
                            data-error="Please,leave us a message."></textarea>
                        </div>
                        <div className="help-block with-errors"></div>
                      </div>

                      <div className="d-flex align-items-center justify-content-center dsn-up">
                        <div className="image-zoom move-circle" data-dsn="parallax">
                          <input className="background-theme" type="submit" value="Send Message" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <section
            className="next-page-2 over-hidden mt-section z-index-1 p-relative d-flex flex-column align-items-center justify-content-center text-cente">
            <span className="sub-title d-flex align-items-center justify-content-center text-center gap-10 mb-30">
              <span className="rel">EXPLORING OUR WORLD <br /> OF VISUAL AND INTERACTIVE DESIGN</span>
            </span>
            <a href="/" onClick={(e) => { e.preventDefault(); window.location.href = '/about'; }}>
            <h2>ABOUT US</h2>
            </a>
          </section>


        </div>

      </div>
    </>
  )
}

export default ContactComp