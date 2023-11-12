import React from 'react'
import './ContactForm.css'

function ContactForm() {
  return (
    <div className="contact-form1">
        <div className='containers'>
            <div className="container1">
                <div class="text">Contact Me</div>
                <p>If you would like to know more or are interested in comissioning me, please use the form to do so</p>
                <p>I will get back to you as soon as I can. Thank you</p>
            </div>
            <div class="container2">
                <form action="#">
                <div class="form-row">
                    <div class="input-data">
                        <input type="text" required />
                        <div class="underline"></div>
                        <label for="">First Name</label>
                    </div>
                    <div class="input-data">
                        <input type="text" required />
                        <div class="underline"></div>
                        <label for="">Last Name</label>
                    </div>
                </div>
                <div class="form-row">
                    <div class="input-data">
                        <input type="text" required />
                        <div class="underline"></div>
                        <label for="">Email Address</label>
                    </div>
                </div>
                <div class="form-row">
                    <div class="input-data textarea">
                        <textarea rows="8" cols="70" required></textarea>
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
                </form>
            </div>
        </div>
     </div>
  )
}

export default ContactForm