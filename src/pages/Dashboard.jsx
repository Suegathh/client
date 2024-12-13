import React, { useContext } from 'react';
import { UserContext } from '../../context/userContext'; 
import './Dashboard.css'

function Dashboard() {
  const { user } = useContext(UserContext);

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome, {user ? user.name : 'Guest'}!</h1>
        <p>This is your personal dashboard where you can manage your activities and settings.</p>
      </header>
      <main className="dashboard-main">
        <section className="dashboard-section">
          <h3>Your Profile</h3>
          <p>Email: {user ? user.email : 'Loading...'}</p>
          
        </section>
        <section className="dashboard-section">
          <h3>Recent Activities</h3>
          <p>Here you can find a summary of your recent activities.</p>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
