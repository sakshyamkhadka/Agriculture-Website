import React, { useState } from 'react';
import '../Styles/ContactForm.css';

const ContactForm = () => {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")

  const validEmail = (e) => {
    const emailInput= e.target.value;
    setEmail(emailInput);

    const valid= /^[A-Z0-9._%+-]+@(arg)\.[A-Z]{2,}$/i;
    if (!valid.test(email)){
    setError("Email is Invalid")}
    else{
      setError("")
    }
    
  }

  return (
    <div className="container my-5 contact-section">
      {/* Contact Info Box */}
      <div className="contact-info">
        <h3>Get in touch</h3>
        <p className="text-muted">
          Et id eius voluptates atque nihil voluptatem enim in tempore minima sit ad mollitia commodi minus.
        </p>

        <div className="contact-item">
          <div>
            <i className="bi bi-geo-alt-fill icon"></i>
            <strong>Location:</strong>
          </div>
          <p>Kathmandu,Nepal</p>
        </div>

        <div className="contact-item">
          <div>
            <i className="bi bi-envelope icon"></i>
            <strong>Email:</strong>
          </div>
          <p>Khadka@gmail.com</p>
        </div>

        <div className="contact-item">
          <div>
            <i className="bi bi-phone icon"></i>
            <strong>Call:</strong>
          </div>
          <p>+977 9843121331</p>
        </div>
      </div>

      {/* Contact Form */}

      <form className="contact-form">
        <div className="form-row">
          <div className="col">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="col">
            <input type="email" placeholder="Your Email" onChange={validEmail}
               />
              <span className='text-danger'>{error}</span>
          </div>
        </div>

        <input type="text" placeholder="Subject" />

        <textarea placeholder="Message" rows={8} />

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
