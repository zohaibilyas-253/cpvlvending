import React from 'react'
import Helpers from '../Helpers/Helpers';
import LoadScripts from '../Hooks/LoadScripts';
import Navbar from '../Shared/Navbar';
import Hero from '../Components/Home/Hero';
import About from '../Components/Home/About';
import Our_work from '../Components/Home/Our_work';
import Our_Services from '../Components/Home/Our_Services';
import Footer from '../Shared/Footer';
import CTA from '../Shared/CTA';
import Cursor from '../Components/Cursor/Cursor';
import Testimonials from '../Shared/Testimonials';
const Index = () => {
    LoadScripts()
    return (
        <>
            <body className="v-dark dsn-ajax">
                <main  className="main-root">
                    <Navbar />
                    <div id="dsn-scrollbar">
                        <div id="page_wrapper" className="wrapper">
                            <div className="p-relative over-clip">
                                <Hero />
                                <About />
                            </div>
                            <Our_work />
                            <Our_Services />
                            <Testimonials/>
                        </div>
                        <CTA />
                        <Footer />
                    </div>
                </main>
                <Cursor />
            </body>

        </>
    )
}

export default Index