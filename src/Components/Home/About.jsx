import React from 'react'

const About = () => {
  return (
    <>
      <div id="about_us" className="about-section p-relative mt-section mb-50  text-effect"
        data-dsn-text="27">
        <div className="container">
          <div className="d-flex gap-50">
            <span className="sub-title pt-10 f-str ">[QUICK INTRO]</span>
            <h2
              className="title text-upper icon-size-30 dsn-icon-main-color d-flex align-items-center flex-wrap gap-20">
              We help businesses
              <span className="brand"><span className="dsn-icon"> <svg width="20" height="24"
                viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              </svg> </span></span>
              modernize and stay relevant
              <span className="brand"><span className="dsn-icon"> <svg xmlns="http://www.w3.org/2000/svg"
                width="1000" height="356.39" viewBox="135.5 361.38 1000 356.39">
              </svg> </span></span>
              with smart vending
              <span className="brand"><span className="dsn-icon"> <svg xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" viewBox="0 0 24 24" fill="none">
              </svg> </span></span>
              solutions
              <span className="brand"><span className="dsn-icon"> <svg width="49" height="24"
                viewBox="0 0 49 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              </svg> </span></span>

            </h2>
          </div>
        </div>
      </div>

      <div className="about-section container">
        <div className="w-50 ml-auto">
          <p className="max-w570 mt-30">
            Whether you're looking to purchase a vending machine or enjoy a FREE vending service at your business, workplace, or construction site, CPVL Vending has you covered. We provide a wide selection of modern, easy-to-use vending machines across Australia — from snack and drink combos to healthy options and coffee machines. With convenient payment options via phone, card, or cash, our machines offer a seamless experience for your staff, visitors, and guests. Best of all, with our free hire service, we handle everything — so you can focus on what matters while we keep your team refreshed.
          </p>


          <div className="">
            <div className="dsn-btn dsn-btn-shape d-flex mt-30 ">

              <a className="button background-section v-dark effect-ajax" href="/contact" onClick={(e) => { e.preventDefault(); window.location.href = '/about'; }}>
                <span className="title-btn text-upper p-relative  z-index-1 heading-color"
                  data-animate-text="About Me">
                  <span>About Us</span>
                </span>
              </a>

              <span className="icon background-section v-dark">
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
    </>
  )
}

export default About