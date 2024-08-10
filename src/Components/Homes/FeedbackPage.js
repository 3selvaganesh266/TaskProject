// src/pages/FeedbackPage.js
import React from 'react';
import '../../Assets/Styles/FeedbackPage.css';

const FeedbackPage = () => {
  return (
    <div className="feedback-page">
      <h1>Feedback</h1>
      <form className="feedback-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackPage;
