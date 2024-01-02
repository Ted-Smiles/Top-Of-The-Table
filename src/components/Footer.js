import React, { useState } from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Button } from './Button';
import ReCAPTCHA from 'react-google-recaptcha';

/**
 * Footer for each page
 */


function Footer() {

    const [emailSent, setEmailSent] = useState(false);
    const [emailError, setEmailError] = useState(null);
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [tempName, setTempName] = useState("")
    const [recaptchaValue, setRecaptchaValue] = useState(null);

    const onSubmit = async (e) => {
        e.preventDefault();

        console.log("data", name, email)

        if (!recaptchaValue) {
            alert('Please complete the reCAPTCHA verification.');
            return;
        }
        try {
            const url = 'https://script.google.com/macros/s/AKfycbxFXvEO11P_Yp1jeZFvXnbyg4F-mucHlVXaJTZl-RQ4ZUbxgHDFpv-jcOkM_Vb-7iNU/exec'

            const data = {
                name: name,
                email: email,
              };
            
            fetch(url, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Authorization': 'Basic' 
                },
                body: JSON.stringify(data),
                mode: 'no-cors', // Set mode to 'cors'
            });

            setTempName(name)
            setName('')
            setEmail('');

            // Check if cells were updated
            setEmailSent(true);
            setEmailError(null);
        } catch (error) {
            console.error('Error adding row to Google Sheet: ', error);
        }
    }

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
                    <form onSubmit={onSubmit}>
                        <div className='data'>
                            <input type="text" name='name' placeholder='Your First Name' className='footer-input' onChange={ e => setName(e.target.value)} value={name} required />
                            <input type="email" name='email' placeholder='Your Email' className='footer-input' onChange={ e => setEmail(e.target.value)} value={email} required/>
                        </div>
                        <div className='chaptcha-container'>
                            <ReCAPTCHA
                                className='g-recaptcha'
                                sitekey='6LetVTcpAAAAAPfnTyH9zAzN__F57JixAyZgVt9g'
                                onChange={(value) => setRecaptchaValue(value)}
                            />
                        </div>
                        <Button type="submit" buttonStyle='btn--outline'>Subscribe</Button> 
                    </form>
                    {emailError && <div className="error-message">{emailError}</div>}
                    {emailSent && <div className="notification">You were successfully add to the newsletter subscription, {tempName}!</div>}
                    
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
                    <img className="social-logo" src='../images/Logo.png' alt='Logo' />   
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