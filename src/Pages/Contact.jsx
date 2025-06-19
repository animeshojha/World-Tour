import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_z6q6znc', // replace with your EmailJS service ID
        'template_og18649', // replace with your EmailJS template ID
        form.current,
        'K_fWEklq9F1g072rA' // replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset(); 
          alert('Message sent successfully!');
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send message.');
        }
      );
  };

  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>
      <div className="contact-wrapper container">
        <form ref={form} onSubmit={handleFormSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
            name="name"
            required
            autoComplete="off"
          />

          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            name="email"
            required
            autoComplete="off"
          />

          <textarea
            className="form-control"
            rows="10"
            placeholder="Enter your message"
            name="message"
            required
            autoComplete="off"
          ></textarea>
          
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
