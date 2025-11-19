import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div>
      <div className="contact-form" id="contact">
        <h2>Contact Me</h2>
        <p>Please fill this form to book my service</p>
        <form action="#">
            <label htmlFor="firstName">Full Name *</label>
            <div className="names">
                <input type="text" name="firstName" id="firstName" placeholder='firstName' />
                <input type="text" name="lastName" id="lastName" placeholder='lastName' />
            </div>
            <div>
            <label htmlFor="email">Email * </label>
            <input type="email" name="email" id="email" placeholder="example2025@gmail.com" />
            </div>
            <div>
                <label htmlFor="message">Message *</label>
                <textarea name="message" id="message"></textarea>
            </div>
            

        </form>
        <button>Submit</button>

      </div>
    </div>
  )
}

export default Contact
