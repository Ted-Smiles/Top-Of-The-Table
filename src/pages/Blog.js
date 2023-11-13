import React, { useEffect, useState } from'react'
import '../App.css'
import BlogSection from '../components/BlogSection'
import Footer from '../components/Footer'

{/*import { graphcms, QUERY_SLUG_POST } from '../Graphql/Queries' */}

export default function Blog() {
    {/* const [ post, setPost ] = useState([])

    useEffect(() => {
        graphcms.request(QUERY_SLUG_POST)
        .then(res =>console.log(res))
    }) */}
    return (
        <>
            <BlogSection />
            <Footer />
        </>
    )
}