import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop'
const Home = lazy(() => import ('./pages/Home'))
const Gallery = lazy (() => import ('./pages/Gallery'))
const ChoasDaemons = lazy (() => import ('./pages/ChoasDaemons'))
const Services = lazy(() => import ('./pages/Services'))
const Contact = lazy (() => import ('./pages/Contact'))
const SignUp = lazy (() => import ('./pages/SignUp'))
const Blog = lazy (() => import ('./pages/Blog'))
const SingleBlog = lazy (() => import ('./pages/SingleBlog'))

/**
 * General function including all the pages and route to each 
 */

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Suspense fallback={<div className="container">Loading...</div>}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/choas-daemons" element={<ChoasDaemons />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<SingleBlog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sign-up" element={<SignUp />} /> 
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
