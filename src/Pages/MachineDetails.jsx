import React from 'react'
import Navbar from '../Shared/Navbar'
import ContentDetails from '../Components/Content'
import Cursor from '../Components/Cursor/Cursor'
import Footer from '../Shared/Footer'
import { Machines } from '../Static/Machines'
import LoadScripts from '../Hooks/LoadScripts'
import Testimonials from '../Shared/Testimonials'
import CTA from '../Shared/CTA'

const MachineDetails = () => {
    LoadScripts()
    return (
        <body className="v-dark dsn-ajax">
            <Navbar />
            <ContentDetails dataSource={Machines} contentType="machines" />
            <Testimonials/>
            <CTA/>
            <Cursor />
            <Footer />
        </body>
    )
}

export default MachineDetails