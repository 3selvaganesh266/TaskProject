import React from "react";
import "../../Assets/Styles/ProfilePage.css";
import { useAuth } from "../contexts/AuthContext";
import TotalCompletionStatus from "./TotalCompletionStatus";
import TimeSpent from "./TimeSpent";

const ProfilePage = () => {
  const { user } = useAuth();

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-page">
      <div className="profile-sidebar">
        <div className="profile-card">
          <img src="profilepic.png" alt="Profile" className="profile-image" />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>Rank {user.rank}</p>
          <p>#Problem solver</p>
          <button>Edit Profile</button>
          <p>{user.location}</p>
          <p>{user.skill}</p>
        </div>
        <div className="community-stats">
          <h3>Community Stats</h3>
          <p>Views: {user.views}</p>
          <p>Solutions: {user.solutions}</p>
          <p>Discuss: {user.discuss}</p>
          <p>Reputation: {user.reputation}</p>
        </div>
      </div>
      <div className="profile-main-content">
        <div className="cards-container">
          <TotalCompletionStatus />
          <TimeSpent />
        </div>
        <div className="recent-activities">
          <h3>Recent Activities</h3>
          <ul>
            {user.recentActivities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
