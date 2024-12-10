import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Our Application</h1>
        <p>Your one-stop solution for all your needs.</p>
      </header>
      <main className="home-main">
        <section className="home-section">
          <h2>Why Choose Us?</h2>
          <p>
            We provide the best services to ensure your satisfaction. Our platform is user-friendly, secure, and efficient.
          </p>
        </section>
        <section className="home-section">
          <h2>Get Started</h2>
          <p>
            <Link to="/register" className="home-link">Register</Link> or <Link to="/login" className="home-link">Login</Link> to begin your journey with us.
          </p>
        </section>
      </main>
    </div>
  );
}

export default Home;
