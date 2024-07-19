import React, { useEffect, useState } from "react";
import "./home.scss";
import banner from "../../assets/LandingVideo/video/video.mp4";
import bg from "../../assets/images/home/bg.png";
import bgsec from "../../assets/images/home/background.jpg";
// import img1 from '../../assets/images/home/img 1.png';
// import img2 from '../../assets/images/home/img 2.png';
import img1 from "../../assets/images/new-images/multistrand.png";
import img2 from "../../assets/images/new-images/multicore.png";
import img3 from "../../assets/images/new-images/industrial.png";
import img4 from "../../assets/images/new-images/Shielded mylar taped cable-home.png";

// import img3 from "../../assets/images/home/img 3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper";
import bgservice from "../../assets/images/home/service-background.jpg";
import what from "../../assets/images/home/what we do.png";
import Certificate from "../components/certificates/Certificate";
import { useNavigate } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import video from "../../assets/LandingVideo/video/video.mp4";

import Confirm from "../components/confirmModal/confirm";
import facebook from "../../assets/images/home/Group.png";
import instagram from "../../assets/images/home/Layer 2.png";
import twitter from "../../assets/images/home/Group (1).png";
import Swipers from "../components/swiper/Swipers";
// import "../../components/MultipleItems/MultipleItems.scss";
import { Helmet } from "react-helmet";

import Loader1 from "../components/loader1/Loader1";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [loader, setLoader] = useState(false);
  const [alertText, setAlertText] = useState();
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showConfirmModal1, setShowConfirmModal1] = useState(false);
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "phoneNumber" && value.length > 10) {
      setFormData({
        ...formData,
        [name]: value.slice(0, 10),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }

    setFormErrors({
      ...formErrors,
      [name]: "",
    });
  };

  const validateForm = () => {
    let isValid = true;
    debugger
    if (!formData.name) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        name: "Name is required",
      }));
      isValid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        name: "Name must contain only letters",
      }));
      isValid = false;
    }

    if (!formData.email.trim()) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required",
      }));
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email address",
      }));
      isValid = false;
    }
   debugger
    if (!formData.phoneNumber.trim()) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: "Phone number is required",
      }));
      isValid = false;
    } else if (
      formData.phoneNumber.length !== 10 ||
      !/^\d{10}$/.test(formData.phoneNumber)
    ) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: "Phone number must be 10 digits",
      }));
      isValid = false;
    }

    if (!formData.message.trim()) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        message: "Message is required",
      }));
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    const { name, email, phoneNumber, message } = formData;

    const payload = {
      id: 7,
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      description: message,
    };

    try {
      setLoader(true);
      const response = await axios.post(
        "https://static.promena.in/SendMail",
        payload
      );

      if (response.status === 200) {
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          message: "",
        });

        setShowConfirmModal1(false);
        setShowConfirmModal(true);
        setAlertText(response.data.message);
      } else {
        setAlertText(response.status);
      }
    } catch (error) {
      setShowConfirmModal(false);
      setShowConfirmModal1(true);
      setAlertText(error.message);
      setLoader(false);
    } finally {
      setLoader(false);
    }
  };

  const handleConfirm = () => {
    setShowConfirmModal(false);
  };

  return (
    <>
      <Helmet>
        <title>
          Best Wires and Cables Company In Bangalore | Polyone Cables
        </title>
        <meta
          name="description"
          content="Polyone Cables: Your trusted wires and cables company in Bangalore. Offering durable, high-quality solutions for all your wiring needs."
        />
      </Helmet>
      <div className="home">
        <div className="home__container">
          <div className="home__banner">
            <video src={video} autoPlay loop muted></video>
            <div className="home__banner__section">
              <div className="home__banner__top">
                <Zoom cascade>
                  {" "}
                  <div className="home__banner__top__content">
                    <h1>Welcome to Polyone</h1>
                    <p>
                      A wire and cable seller based in Bangalore, India with
                      over 15+ years of experience in the industry.
                    </p>
                    {/* <button onClick={handleAbout}>Learn More</button> */}
                  </div>
                </Zoom>
              </div>
             
            </div>
          </div>
          <div
            className="home__prod"
            style={{
              backgroundImage: `url(${bgsec})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center top",
            }}
          >
            <div
              className="home__prod__sections"
              style={{
                backgroundImage: `url(${bg})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center top",
              }}
            >
               <div className="home__prod__section__bottom">
                <h3>About Us</h3>
                {/* <h2>LOREM IPSUM DOLOR</h2> */}
                <p>
                  PolyOne's cable materials offer a number of benefits to cable
                  manufacturers, including improved electrical performance,
                  greater resistance to environmental factors such as heat and
                  moisture, and enhanced flame retardancy.
                </p>
                
                <p>
                  Overall, PolyOne is an important player in the cable industry,
                  providing high-quality materials and solutions that help to
                  improve the performance, safety, and reliability of cables and
                  wires.
                </p>
              </div>
              <div className="home__prod__section section">
             
                <div className="home__prod__section__left">
                  <Fade top>
                    {" "}
                    <img className="image-1" src={img1} alt="product-image" />
                  </Fade>
                </div>
                <div className="home__prod__section__right">
                  <div className="home__prod__section__right__content">
                    <h3>Products</h3>
                    <h2>MULTI-STRAND CABLES</h2>
                    <p>
                      With the same cross-sectional surface, multi-strand wires
                      are more bendable than single-strand wires. When you need
                      a stronger resistance to metal fatigue, multi-stranded
                      wires are useful. Transducers can be constructed from a
                      variety of materials, including copper and aluminum. They
                      are protected by an exterior layer of insulation
                      consisting of PVC, rubber, or another material. Wires with
                      one or more strands are utilized in both home and business
                      settings.
                    </p>
                    {/* <button>Learn More</button> */}
                  </div>
                </div>
              </div>
              <div className="home__prod__section section1">
                <div className="home__prod__section__left multicore-image">
                  <Fade right>
                    {" "}
                    <img src={img2} alt="product-image" />
                  </Fade>
                </div>
                <div className="home__prod__section__right">
                  <div className="home__prod__section__right__content ">
                    <h3>Products</h3>
                    <h2>MULTICORE CABLES</h2>
                    <p>
                      Multiple insulated cores (single wires) are contained
                      within a single outer sheath in multicore cables.
                      Aluminium, copper, and fibred optic strands are just a few
                      of the elements that are used to create multicore cables.
                      In a variety of applications, multicore cables are a
                      flexible and effective way to transport power and
                      communications, which are further used in power
                      transmission, industrial control systems, computer
                      networking, audio and video systems.
                    </p>
                    {/* <button>Learn More</button> */}
                  </div>
                </div>
              </div>
              <div className="home__prod__section section">
                <div className="home__prod__section__left industrial-image">
                  <Fade left>
                    {" "}
                    <img src={img3} alt="product-image" />
                  </Fade>
                </div>
                <div className="home__prod__section__right">
                  <div className="home__prod__section__right__content industrial-content">
                    <h3>Products</h3>
                    <h2>INDUSTRIAL CABLE</h2>
                    <p>
                      The Industrial cable used is a specialized type of cable
                      that is implemented in heavy-duty locations including
                      factories, power plants, and other industrial settings.
                      These cables are made of strong materials that can survive
                      challenging environmental factors including high
                      temperatures, dampness, chemicals, and physical stress.
                      widely utilized for data transfer, security and
                      monitoring, and fire prevention.
                    </p>
                    {/* <button>Learn More</button> */}
                  </div>
                </div>
              </div>
              <div className="home__prod__section section1 mylar-section">
                <div className="home__prod__section__left mylar-image">
                  <Fade right>
                    {" "}
                    <img src={img4} alt="product-image" />
                  </Fade>
                </div>
                <div className="home__prod__section__right">
                  <div className="home__prod__section__right__content ">
                    <h3>Products</h3>
                    <h2>Shielded mylar taped cable</h2>
                    <p>
                      Also known as foil-shielded cable, a shielded mylar taped
                      cable is a type of electrical cable that has a layer of
                      Mylar tape wrapped around the internal wiring. Mylar tape
                      is typically made of polyester film and is coated with a
                      thin layer of aluminum on one side. These cables are
                      commonly used in medical and military
                      applications,computer networking, aerospace systems.
                    </p>
                    {/* <button>Learn More</button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="home__what">
            <div className="home__what__container">
              <div className="home__what__sections">
                <div className="home__what__left">
                  <div className="home__what__left__content">
                    <h2>What we do?</h2>
                    <p>
                      Polyone focuses on innovation, design and installation,
                      quality assurance, maintenance and repair, testing and
                      certification, cable management, connect delivery, and
                      sustainability. Their innovation involves investing in
                      advanced materials and technology. They design and install
                      systems while adhering to industry standards and
                      regulations. Their quality control system ensures that raw
                      materials, manufacturing processes, and finished products
                      meet specifications.
                    </p>
                    <p>
                      They provide prompt repair work, testing and certification
                      to comply with safety and performance standards. They
                      organize and secure cables effectively, deliver products
                      efficiently while maintaining effective communication, and
                      are committed to sustainability in their products and
                      workflow.
                    </p>
                  </div>
                </div>
                <div className="home__what__right">
                  <div className="home__what__right__images">
                    <Fade bottom>
                      {" "}
                      <img src={what} alt="what-we-do" />
                    </Fade>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Certificate />

          <div className="home__review">
            <div className="home__review__container">
              <div className="home__review__container__top">
                <h2>Testimonial</h2>
                <h3>What our Customers Say</h3>
              </div>

              <div className="home__review__container__bottom">
                <div className="home__review__container__bottom__section">
                  <Swipers />
                </div>
              </div>
            </div>
          </div>
          <div className="home__contact">
            <div className="home__contact__container">
              <div className="home__contact__container__left">
                <div className="home__contact__container__left__section">
                  <div className="home__contact__container__left__section__input wrap">
                    <input
                      type="text"
                      placeholder="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                    {formErrors.name && (
                      <p className="errors">{formErrors.name}</p>
                    )}
                  </div>
                  <div className="home__contact__container__left__section__input wrap">
                    <input
                      type="text"
                      placeholder="Phone"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      minLength={10}
                      maxLength={10}
                      onChange={handleInputChange}
                    />
                    {formErrors.phoneNumber && (
                      <p className="errors1">{formErrors.phoneNumber}</p>
                    )}
                  </div>
                  <div className="home__contact__container__left__section__input">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      placeholder="Email Address"
                      onChange={handleInputChange}
                    />
                    {formErrors.email && (
                      <p className="errors2">{formErrors.email}</p>
                    )}
                  </div>
                  <div className="home__contact__container__left__section__input">
                    <textarea
                      rows={5}
                      type="text"
                      placeholder="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                    {formErrors.message && (
                      <p className="errors3">{formErrors.message}</p>
                    )}
                  </div>
                  <button onClick={handleSubmit}>Submit</button>
                </div>
              </div>
              <div className="home__contact__container__right">
                {/* <img src={contactus} alt="" /> */}
                <div className="home__contact__container__right__content">
                  <h3>Get In Touch</h3>
                  <h2>Need any help ?</h2>
                  <p>
                    Thank you for considering our cable service for your
                    connectivity needs. We're here to help you find the right
                    cable package that suits your lifestyle and budget.
                  </p>
                  <p>
                    If you have any questions or need assistance selecting the
                    perfect cable package, please don't hesitate to reach out to
                    us. We're always happy to help and look forward to serving
                    you.
                  </p>
                  <div className="home__contact__container__right__content__social">
                    <a
                      href="https://www.instagram.com/polyonecables/"
                      target="_blank"
                    >
                      <img src={instagram} alt="" />
                    </a>
                    <a
                      href="https://www.facebook.com/polyonecables"
                      target="_blank"
                    >
                      <img src={facebook} alt="" />
                    </a>
                    <a
                      href="https://twitter.com/Polyonecables/"
                      target="_blank"
                    >
                      {" "}
                      <img src={twitter} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {showConfirmModal && (
          <Confirm
            buttonText={"OK"}
            isCancelRequired={false}
            confirmTitle={alertText}
            onConfirm={() => {
              handleConfirm();
              setLoader(false);
            }}
            onCancel={() => {
              setShowConfirmModal(false);
              setLoader(false);
            }}
          />
        )}
        {showConfirmModal1 && (
          <Confirm
            buttonText={"OK"}
            isCancelRequired={false}
            confirmTitle={alertText}
            onConfirm={() => {
              setShowConfirmModal1(false);
              setLoader(false);
            }}
            onCancel={() => {
              setShowConfirmModal1(false);
              setLoader(false);
            }}
          />
        )}
        {/* {loader ? <Loader1 /> : null} */}
        {/* {loader ? <div className="home_loader">
      <Loader1/> 
      </div>:null} */}
      </div>
    </>
  );
};

export default Home;
