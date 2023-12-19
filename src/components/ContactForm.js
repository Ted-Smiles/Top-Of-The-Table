import React, { useState } from 'react'
import './ContactForm.css'
import axios from 'axios';
/**
 * Contact form for sending email direct to email address
 */

function ContactForm() { 

    const [emailSent, setEmailSent] = useState(false);
    const [emailError, setEmailError] = useState(null);
    const [firstName, setFirstName] = useState('Ted');
    const [lastName, setLastName] = useState('Smiles');
    const [email, setEmail] = useState('tedsmiles01@gmail.com');
    const [message, setMessage] = useState('Hi, this is a test');

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log("data", firstName, lastName, email, message)

        try {
            const res = await axios.post('http://localhost:3001/send-email', {
                method: 'POST',
                body: ({
                    firstName, lastName, email, message
                }),
                headers: {
                    'Content-Type': 'application/json',
                }
            }); 

            if (res.status === 200) {
                setEmailSent(true);
                setEmailError(null); // Clear any previous error
            } else {
                setEmailError('Error sending email. Please try again later.');
            }
        } catch (error) {
            console.error('Error sending email: ', error);
            setEmailError('Error sending email. Please try again later.');
        }
    };


    return (
        <div className="contact-form1">
            <div className='containers'>
                <div className="container1">
                    <div class="text">Contact Me</div>
                    <p>If you would like to know more or are interested in comissioning me, please use the form to do so</p>
                    <p>I will get back to you as soon as I can. Thank you</p>
                </div>
                <div class="container2">
                    <form onSubmit={onSubmit} action="#">
                    <div class="form-row">
                        <div class="input-data">
                            <input value={firstName} onChange={ e => setFirstName(e.target.value)} type="text" required />
                            <div class="underline"></div>
                            <label for="">First Name</label>
                        </div>
                        <div class="input-data">
                            <input value={lastName} onChange={ e => setLastName(e.target.value)} type="text" required />
                            <div class="underline"></div>
                            <label for="">Last Name</label>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="input-data">
                            <input value={email} onChange={ e => setEmail(e.target.value)} type="text" required />
                            <div class="underline"></div>
                            <label for="">Email Address</label>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="input-data textarea">
                            <textarea value={message} onChange={ e => setMessage(e.target.value)} rows="8" cols="70" required></textarea>
                            <br />
                            <div class="underline"></div>
                            <label for="">Write your message</label>
                            <br />
                        </div>
                    </div>
                    <div class="form-row submit-btn">
                        <div class="input-data">
                            <div class="inner"></div>
                                <input type="submit" value="submit" />
                        </div>
                    </div>
                    {emailError && <div className="error-message">{emailError}</div>}
                    {emailSent && <div className="notification">Email sent successfully!</div>}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm