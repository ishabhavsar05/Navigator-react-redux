import React from 'react'

const Home = () => {
  
  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Our Website</h1>
        <p>
          Discover amazing features, learn new things, and explore what we offer.
        </p>
        <button className="primaryButton">Get Started</button>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="featureCard">
          <h3>🚀 Fast Performance</h3>
          <p>Our platform is optimized for speed and efficiency.</p>
        </div>
        <div className="featureCard">
          <h3>🔒 Secure</h3>
          <p>Your data is protected with top-tier security measures.</p>
        </div>
        <div className="featureCard">
          <h3>📱 Mobile Friendly</h3>
          <p>Enjoy a seamless experience on any device.</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Ready to dive in?</h2>
        <p>Join us today and experience the difference.</p>
        <button className="ctaButton">Sign Up Now</button>
      </section>

      <style jsx>{`
        .container {
          font-family: Arial, sans-serif;
          background-color: #f7f7f7;
          color: #333;
        }

        .hero {
          text-align: center;
          padding: 100px 20px;
          background: white;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .hero h1 {
          font-size: 3rem;
          margin-bottom: 20px;
        }

        .hero p {
          font-size: 1.2rem;
          max-width: 600px;
          margin: 0 auto 30px;
        }

        .primaryButton {
          padding: 12px 30px;
          background-color: #0070f3;
          color: white;
          border: none;
          font-size: 1rem;
          border-radius: 25px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .primaryButton:hover {
          background-color: #005fd1;
        }

        .features {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          padding: 60px 20px;
          gap: 20px;
        }

        .featureCard {
          background: white;
          padding: 30px;
          border-radius: 15px;
          max-width: 300px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          text-align: center;
        }

        .cta {
          text-align: center;
          padding: 80px 20px;
          background-color: #0070f3;
          color: white;
        }

        .cta h2 {
          font-size: 2rem;
          margin-bottom: 20px;
        }

        .ctaButton {
          padding: 12px 30px;
          background: white;
          color: #0070f3;
          border: none;
          font-size: 1rem;
          border-radius: 25px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .ctaButton:hover {
          background: #f0f0f0;
        }
      `}</style>
    </div>
   
  )
  }

export default Home