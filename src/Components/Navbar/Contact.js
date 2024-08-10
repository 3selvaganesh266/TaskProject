import React, { useState } from 'react';
import '../../Assets/Styles/Contact.css';
import '../../Assets/Styles/Navbar.css';
import Navbars from './Navbars';
const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your message has been sent!');
  };

  return (
    <div>
    <div>
      <Navbars />
      </div>
    <div className="contact-us-page">
      <div className="header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you!</p>
      </div>
      <div className="content1">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>If you have any questions or feedback, please reach out to us using the form below or through our contact details:</p>
          <ul>
            <li><strong>Email:</strong> TimeSync@example.com</li>
            <li><strong>Phone:</strong> (123) 456-7890</li>
            <li><strong>Address:</strong> 1234 Elm Street, Suite 567, Switerland,Barodda, 12345</li>
          </ul>
        </div>
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactUsPage;
