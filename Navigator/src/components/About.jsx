

export default function About() {
  return (
    <div className="product-about-container">
      

      {/* Hero Section */}
      <section className="product-hero">
        <h1>About Our Product</h1>
        <p>
          Our product is designed to simplify your life. With powerful features and an intuitive design,
          it’s built to help you do more, faster.
        </p>
      </section>

      {/* Product Story */}
      <section className="product-story">
        <h2>How It All Started</h2>
        <p>
          We saw a common problem—and decided to solve it. What started as a side project has now become a
          solution trusted by thousands.
        </p>
      </section>

      {/* Product Features */}
      <section className="product-features">
        <h2>Key Features</h2>
        <ul>
          <li>⚡ Blazing fast performance</li>
          <li>🔒 End-to-end data security</li>
          <li>📱 Mobile-first experience</li>
          <li>🎯 Easy to use and customizable</li>
        </ul>
      </section>

      {/* Values */}
      <section className="product-values">
        <h2>What We Stand For</h2>
        <p>
          We believe in building products that are user-first, ethical, and constantly evolving based on
          your feedback.
        </p>
      </section>

      <style jsx>{`
        .product-about-container {
          font-family: Arial, sans-serif;
          max-width: 900px;
          margin: 0 auto;
          padding: 50px 20px;
          color: #333;
        }

        .product-hero {
          text-align: center;
          margin-bottom: 60px;
        }

        .product-hero h1 {
          font-size: 2.8rem;
          margin-bottom: 20px;
        }

        .product-hero p {
          font-size: 1.2rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .product-story,
        .product-features,
        .product-values {
          margin-top: 50px;
        }

        .product-story h2,
        .product-features h2,
        .product-values h2 {
          font-size: 1.8rem;
          margin-bottom: 15px;
        }

        .product-story p,
        .product-values p {
          line-height: 1.6;
        }

        .product-features ul {
          padding-left: 20px;
        }

        .product-features li {
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
}
