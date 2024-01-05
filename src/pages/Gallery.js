import React from'react'
import '../App.css'
import Footer from '../components/Footer'
import GallerySection from '../components/GallerySection'
import GalleryImages from '../components/GalleryImages'

export default function Gallery() {
    return (
        <>
            {/* <GallerySection /> */}
            <GalleryImages />
            <Footer />
        </>
    )
}