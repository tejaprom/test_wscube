import React from "react";
import "./footer.scss";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";
import footerlogo from "../../assets/logo/polyone final logo-03.png"
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const Footer = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  const handleAbout = () => {
    navigate("/about-us");
    window.scrollTo(0, 0);
  };

  const handleContact = () => {
    navigate("/contact-us");
    window.scrollTo(0, 0);
  };

  const handleProduct = () => {
    navigate("/products");
    window.scrollTo(0, 0);
  };

  const handleClickScroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__sections">
          <div className="footer__one">
            <Fade left cascade duration={2000}><img onClick={handleHome} src={footerlogo} alt="logo" /></Fade>
          </div>
          <div className="footer__two">
            <ul>
              <a onClick={handleHome}>
                <li>Home</li>
              </a>
              <a onClick={handleAbout}>
                <li>About us</li>
              </a>
              <a onClick={handleProduct}>
                <li>Products</li>
              </a>
              <a onClick={handleContact}>
                <li>Contact us</li>
              </a>
            </ul>
          </div>
          <div className="footer__two-mobile">
            <ul>
              <a onClick={handleHome}>
                <Fade left> <li>Home</li></Fade>
              </a>
              <a onClick={handleAbout}>
                <Fade right><li>About us</li></Fade>
              </a>
              <a onClick={handleProduct}>
                <Fade left><li>Products</li></Fade>
              </a>
              <a onClick={handleContact}>
                <Fade right> <li>Contact us</li></Fade>
              </a>
            </ul>
          </div>
          <div className="footer__social">
            <div className="footer__social__link">
              <a href="https://www.facebook.com/polyonecables" target="_blank">
                <i className="fa fa-facebook" />
              </a>
            </div>
            <div className="footer__social__link">
              <a
                href="https://www.instagram.com/polyonecables/"
                target="_blank"
              >
                <Zoom><i className="fa fa-instagram" /></Zoom>
              </a>
            </div>
            <div className="footer__social__link">
              <a
                href="https://www.linkedin.com/company/polyone-cables/"
                target="_blank"
              >
                <Zoom><i className="fa fa-linkedin" /></Zoom>
              </a>
            </div>
            <div className="footer__social__link">
              <a href="https://twitter.com/Polyonecables"
                target="_blank">
                <i className="fa fa-twitter" />
              </a>
            </div>
          </div>
          <div className="footer__line"></div>
          <div className="footer__copy">
            <p>&#xA9;Copyright at Polyone. All rights reserved. Developed by &nbsp;
              <a href="https://www.promena.in/" target="_blank" >
                Promena </a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
