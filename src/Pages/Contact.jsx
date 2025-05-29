import React from 'react'
import Cursor from '../Components/Cursor/Cursor'
import ContactComp from '../Components/Contact/ContactComp'
import Navbar from '../Shared/Navbar'
import LoadScripts from '../Hooks/LoadScripts'
import Footer from '../Shared/Footer'

const Contact = () => {
    LoadScripts()
    return (
        <body className="v-dark dsn-ajax">
            <Navbar />
            <ContactComp />
            <Footer/>
            <Cursor />
        </body>
    )
}

export default Contact