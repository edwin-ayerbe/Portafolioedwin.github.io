import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Edwin ayerbe rojas </h1>
        <p>Colombia,Bogota</p>
      </div>
      <div className="footer-contact">
        <h3>Contact me</h3>
        <p>And let's get down to work</p>
      </div>
      <div className="footer-sns">
        <div className="design-by">Done by</div>
        <div className="sns-links">
          <a href="https://www.linkedin.com/in/edwin-ayerbe-749548210/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a href="https://www.instagram.com/edwin_ayerbe/" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram instagram"></i>
          </a>
          <a href="https://web.facebook.com/edwin.pte2/" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook facebook"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;