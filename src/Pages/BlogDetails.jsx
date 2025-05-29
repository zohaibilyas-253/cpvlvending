import React from 'react'
import LoadScripts from '../Hooks/LoadScripts'
import Navbar from '../Shared/Navbar'
import Cursor from '../Components/Cursor/Cursor'
import Footer from '../Shared/Footer'
import { Articles } from '../Static/Articles'
import ContentDetails from '../Components/Content'
import CTA from '../Shared/CTA'

const BlogDetails = () => {
    LoadScripts()
    return (
        <body className="v-dark dsn-ajax">
            <Navbar />
            <ContentDetails dataSource={Articles} contentType="blog" />
            <CTA/>
            <Cursor />
            <Footer />
        </body>
    )
}

export default BlogDetails