import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Button } from './Button';

function Footer() {
  return (
    <div className='footer-container'>
        <section className="footer-subscription">
            <p className="footer-subscription-heading">
                Join the newsletter to recieve update and new blogs.
            </p>
            <p className="footer-subscription-text">
                You can unsunscribe at any time.
            </p>
            <div className="input-areas">
                <form action="">
                    <input type="email" name='email' placeholder='Your Email' className='footer-input'/>
                    <Button buttonStyle='btn--outline'>Subscribe</Button> 
                </form>
            </div>
        </section>
        {/* <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>About Me</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/'>Testimonials</Link>
                </div>
            </div>
  </div> */}

        <section className="social-media">
            <div className="social-media-wrap">
                <img className="social-logo" src='images/Logo.png' alt='Logo' />   
            </div>             
            <div className="social-media-wrap2">
                <small className='website-rights'>Top Of The Table Minis</small> 
            </div>    
            <div className="social-media-wrap">       
                <div className="social-icons">   
                    <Link 
                        className='social-icon-link'
                        to='https://www.instagram.com/top_of_the_table_minis/'
                        target="_blank" 
                        aria-label='Instagram'
                    >
                        <FontAwesomeIcon icon={faInstagram}/>
                    </Link>
                    <Link 
                        className='social-icon-link'
                        to='https://www.youtube.com/@topofthetableminis/videos'
                        target="_blank" 
                        aria-label='Youtube'
                    >
                        <FontAwesomeIcon icon={faYoutube}/>
                    </Link>
                    <Link 
                        className='social-icon-link'
                        to='https://twitter.com/i/flow/login?redirect_after_login=%2FTopOfTheTableUK'
                        target="_blank" 
                        aria-label='Youtube'
                    >
                        <FontAwesomeIcon icon={faXTwitter}/>
                    </Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer