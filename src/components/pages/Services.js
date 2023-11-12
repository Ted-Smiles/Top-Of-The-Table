import React from'react'
import '../../App.css'
import Cards3 from '../Cards3'
import Footer from '../Footer'
import PricingGuide from '../PricingGuide'

export default function Services() {
    return (
        <>
            <h1 className='services'>SERVICES</h1>
            <Cards3 />
            <PricingGuide />
            <Footer />
        </>
    )
}