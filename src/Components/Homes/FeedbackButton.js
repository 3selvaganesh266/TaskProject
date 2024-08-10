// src/components/FeedbackButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import '../../Assets/Styles/FeedbackButton.css';
import { Icon } from '@iconify/react';
import feedbackIcon from '@iconify/icons-mdi/comment-text-outline'; 

const FeedbackButton = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleClick = () => {
    if (isAuthenticated) {
      navigate('/feedback');
    } else {
      alert('This feature is available for premium users only.');
    }
  };

  return (
    <div className="feedback-button" onClick={handleClick}>
      <Icon icon={feedbackIcon} width="30" height="30" />
    </div>
  );
};

export default FeedbackButton;
