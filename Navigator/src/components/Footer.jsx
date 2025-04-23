export default function Footer() {
    return (
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} YourCompany. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </div>
        </div>
  
        <style jsx>{`
          .footer {
            background-color: #1f2937;
            color: #ccc;
            padding: 30px 20px;
            text-align: center;
           
          }
  
          .footer-content {
            max-width: 1000px;
            margin: 0 auto;
          }
  
          .footer-links {
            margin-top: 10px;
          }
  
          .footer-links a {
            margin: 0 10px;
            color: #ccc;
            text-decoration: none;
            transition: color 0.3s ease;
          }
  
          .footer-links a:hover {
            color: #fff;
          }
        `}</style>
      </footer>
    );
  }
  