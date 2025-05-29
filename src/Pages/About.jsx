import React from 'react'
import LoadScripts from '../Hooks/LoadScripts'
import AboutComp from '../Components/About/AboutComp'
import Cursor from '../Components/Cursor/Cursor'
import Navbar from '../Shared/Navbar'
import Footer from '../Shared/Footer'

const About = () => {
  LoadScripts()
  return (
    <>
      <body className="v-dark dsn-ajax">
        <Navbar />
        <AboutComp />
        <Footer />
        <Cursor />
      </body>
    </>
  )
}

export default About