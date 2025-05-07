import React from 'react'
import './Footer.css'
import X from '../../assets/X-logo.jpeg'
import Facebook from '../../assets/facebook-logo.jpeg'
import LinkedIn from '../../assets/Linkedin-logo.jpeg'
import Instagram from '../../assets/insta-logo.jpeg'
const Footer = () => {
  return (
    <div>


<footer className="footer">
  <div className="container">
    <div className="grid">
      
      <div>
        <h3 className="footer-heading">Quick Links</h3>
        <ul className="footer-links">
          <li><a href="/" className="footer-link">Home</a></li>
          <li><a href="" className="footer-link">About Us</a></li>
          <li><a href="" className="footer-link">Recipes</a></li>
          <li><a href="" className="footer-link">Blog</a></li>
          <li><a href="" className="footer-link">Privacy Policy</a></li>
          <li><a href="" className="footer-link">Terms of Service</a></li>
        </ul>
      </div>
     
      <div>
        <h3 className="footer-heading">Contact Us</h3>
        <ul className="footer-links">
          <li className="footer-contact"><span>contact@Dishcover.com</span></li>
          <li className="footer-contact"><span>+1 (555) 123-4567</span></li>
        </ul>
      </div>
     
      <div>
        <h3 className="footer-heading">Follow Us</h3>
        <div className="social-links">
          <a href="https://facebook.com" className="social-icon"><img src={Facebook} alt="" /></a>
          <a href="https://x.com/" className="social-icon"><img src={X} alt="" /></a>
          <a href="https://www.linkedin.com/in/ishan-maheshwari-4b6154323/"  className="social-icon"><img src={LinkedIn} alt="" /></a>
          <a href="https://instagram.com" className="social-icon"><img src={Instagram} alt="" /></a>
        </div>
      </div>
    </div>
    
    <div className="footer-copyright">
      <p>© 2025 Dishcover. All rights reserved.</p>
    </div>
  </div>
</footer>



    </div>
  )
}

export default Footer
