import React from 'react';
import '../../Assets/Styles/PremiumPage.css';

const PremiumPage = () => {
  return (
    <div className="premium-container">
      <header className="premium-header">
        <h1>Premium</h1>
        <p>Get started with a TimeSync Subscription that works for you.</p>
      </header>
      
      <section className="subscription-options">
        <div className="subscription-card">
          <h2>Monthly <span>billed monthly</span></h2>
          <p>Down from $39/month.</p>
          <p>Our monthly plan grants access to all premium features, the best plan for short-term subscribers.</p>
          <div className="price">$35/mo</div>
          <button className="subscribe-button">Subscribe</button>
        </div>
        
        <div className="subscription-card">
          <h2>Yearly <span>billed yearly ($159)</span></h2>
          <p>Our most popular plan previously sold for $299 and is now only $13.25/month.</p>
          <p>This plan saves you over 60% in comparison to the monthly plan.</p>
          <div className="price">$13.25/mo</div>
          <button className="subscribe-button">Subscribe</button>
        </div>
      </section>
      
      <section className="premium-features">
        <h2>Premium Features</h2>
        <ul>
        <li>Access more than 10 tasks as well as for projects</li>
          <li>Submit more than 20 tasks and projects in a day</li>
          <li>Get detailed analytics on your progress</li>
        </ul>
      </section>

      <section className="premium-feedback">
        <h2>User Feedback</h2>
        <p>See how our users are improving with TimeSync Premium:</p>
        <div className="feedback-cards">
          <div className="feedback-card">
            <p>"TimeSync Premium helped me organize my tasks and projects efficiently!" - User A</p>
          </div>
          <div className="feedback-card">
            <p>"The premium features are worth it for the detailed insights alone." - User B</p>
          </div>
          <div className="feedback-card">
            <p>"I love the priority judging and exclusive content." - User C</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PremiumPage;
