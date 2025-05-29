import React from 'react'
import LoadScripts from '../Hooks/LoadScripts'
import AboutComp from '../Components/About/AboutComp'
import Cursor from '../Components/Cursor/Cursor'
import Navbar from '../Shared/Navbar'
import Footer from '../Shared/Footer'
import MachineComp from '../Components/Machines/Machines'

const Machines = () => {
    LoadScripts()
    return (
        <>
            <body className="v-dark dsn-ajax">
                <Navbar />
                <MachineComp />
                <Footer />
                <Cursor />
            </body>
        </>
    )
}

export default Machines