import React, { useState } from "react";
import "./header.scss";
import headerlogo from "../../assets/logo/polyone final logo-03.png"
import { useNavigate, NavLink } from "react-router-dom";
import Fade from "react-reveal/Fade";
import MenuItems from "../components/MenuItems";
// import reactReveal from "react-reveal";

const Header = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
    window.scrollTo(0, 0);
    setIsMenuExpand(!isMenuExpand);
  };

  const handleAbout = () => {
    navigate("/about-us");
    window.scrollTo(0, 0);
    setIsMenuExpand(!isMenuExpand);
  };

  const handleContact = () => {
    navigate("/contact-us");
    window.scrollTo(0, 0);
    setIsMenuExpand(!isMenuExpand);
  };

  const handleProduct = () => {
    navigate("/products");
    window.scrollTo(0, 0);
    setIsMenuExpand(!isMenuExpand);
  };
  const handleBlogs = () =>{
    navigate("/blogs");
    window.scrollTo(0, 0);
    setIsMenuExpand(!isMenuExpand);

  }

  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  const [isMenuExpand, setIsMenuExpand] = useState(false);

  // const items = [
  //   {
  //     title: "home",
  //     submenus: "submenus",
  //     url: "ertret",
  //   },
  //   {
  //     title: "about",
  //     submenus: "submenus2",
  //     url: "ertretsef",
  //   },
  //   {
  //     title: "products",
  //     submenus: "submenus2",
  //     url: "ertretsef",
  //   },
  // ];

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__section">
          <div className="header__top">
            <div className="header__top__social">
              <div className="header__top__social__links">
                <div className="header__top__social__link">
                  <a
                    href="https://www.facebook.com/polyonecables"
                    target="_blank"
                  >
                    <Fade left>
                      {" "}
                      <i className="fa fa-facebook" />{" "}
                    </Fade>
                  </a>
                </div>
                <div className="header__top__social__link">
                  <a
                    href="https://www.instagram.com/polyonecables/"
                    target="_blank"
                  >
                    <Fade left>
                      {" "}
                      <i className="fa fa-instagram" />
                    </Fade>
                  </a>
                </div>
                <div className="header__top__social__link">
                  <a
                    href="https://www.linkedin.com/company/polyone-cables/"
                    target="_blank"
                  >
                    <Fade left>
                      {" "}
                      <i className="fa fa-linkedin" />
                    </Fade>
                  </a>
                </div>
                <div className="header__top__social__link">
                  <a href="https://twitter.com/Polyonecables" target="_blank">
                    <Fade left>
                      {" "}
                      <i className="fa fa-twitter" />
                    </Fade>
                  </a>
                </div>
              </div>
            </div>
            <div className="header__top__contact">
              <div className="header__top__contact__details">
                <div className="header__top__contact__details__mail">
                  <a href="mailto:adishwarmarketing@gmail.com">
                    <i className="fa fa-envelope" />
                    <h6>adishwarmarketing@gmail.com</h6>
                  </a>
                </div>
                <div className="header__top__contact__details__phone">
                  <i className="fa fa-phone" />
                  <a href="tel:080-40901541">
                    {" "}
                    <h6>080-40901541, </h6>
                  </a>
                  <a href="tel:080-41140166">
                    {" "}
                    <h6>080-41140166</h6>
                  </a>
                  {/* <h6>+91 9341748549</h6> */}
                </div>
              </div>
            </div>
          </div>
          <div className="header__line"></div>
          <div className="header__bottom">
            <div className="header__bottom__container">
              <div className="header__bottom__logo">
                <img onClick={handleHome} src={headerlogo} alt="header-logo" />
              </div>
              <div className="header__bottom__menus">
                {/* <ul>
                  {items.map((item, index) => (
                    <MenuItems
                      key={index}
                      items={item}
                      depthLevel={0}
                    />
                  ))}
                </ul> */}

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
                  <a onClick={handleBlogs} className="header-button">
                    <li>Blogs</li>
                  </a>
                  <a onClick={handleContact} className="header-button">
                    <li>Contact us</li>
                  </a>
                 
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header__mobile">
        <div className="header__mobile__section">
          <div className="header__mobile__top">
            <div className="header__mobile__logo">
              <Fade left delay={500}>
                {" "}
                {/* <img onClick={handleHome} src={logo} alt="header-logo" />{" "} */}
                <NavLink to="/">
                  {" "}
                  <img src={headerlogo} alt="header-logo" />{" "}
                </NavLink>
              </Fade>
            </div>
            <div className="header__mobile__menu">
              <Fade right delay={500}>
                {" "}
                <div
                  className="header__mobile__menu__icon"
                  onClick={() => {
                    setIsMenuExpand(!isMenuExpand);
                  }}
                >
                  {/* <i class="fa fa-bolt" aria-hidden="true"></i> */}
                  <i class="fa fa-lightbulb-o" aria-hidden="true"></i>
                </div>
              </Fade>
              {isMenuExpand ? (
                <div className="header__mobile__menu__expand">
                  <ul>
                    <li onClick={handleHome}>Home</li>
                    <center>
                      <hr />
                    </center>
                    <li onClick={handleAbout}>About us</li>
                    <center>
                      <hr />
                    </center>
                    <li onClick={handleProduct}>Products</li>
                    <center>
                      <hr />
                    </center>
                    <li onClick={handleBlogs}>Blogs</li>
                    <center>
                      <hr />
                    </center>
                    <li onClick={handleContact}>Contact us</li>
                  </ul>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
          {/* <div className="header__mobile__line"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
