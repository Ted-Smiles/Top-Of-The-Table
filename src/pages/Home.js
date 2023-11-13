import React from 'react'
import '../App.css'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import HomePage from '../components/HomePage'

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