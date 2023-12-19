import React from'react'
import '../App.css'
import Cards2 from '../components/Cards2'
import Footer from '../components/Footer'
import GallerySection from '../components/GallerySection'
import GalleryImages from '../components/GalleryImages'

export default function Gallery() {
    return (
        <>
            <GallerySection />
            {/* <Cards2 /> */}
            <GalleryImages />
            <Footer />
        </>
    )
}