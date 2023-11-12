import React from 'react'
import '../../App.css'
import Cards from '../Cards'
import Footer from '../Footer'
import ContactForm from '../ContactForm'
import HomePage from '../HomePage'

function Home () {
    return (
        <>      
            <HomePage />       
            <Cards />
            <ContactForm />
            <Footer />
        </>
    )
}

export default Home