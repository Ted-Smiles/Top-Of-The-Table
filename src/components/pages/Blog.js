import React from'react'
import '../../App.css'
import BlogSection from '../BlogSection'
import Footer from '../Footer'

export default function Blog() {
    return (
        <>
            <h1 className='blog'>BLOG</h1>
            <BlogSection />
            <Footer />
        </>
    )
}