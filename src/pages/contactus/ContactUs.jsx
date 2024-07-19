import React, { useState } from "react";
import "./ContactUs.scss";
import banner from "../../assets/images/contactus/Contact_us_Banner.png";
import gmail from "../../assets/images/gmail.png";
import tele from "../../assets/images/tele.png";
import location from "../../assets/images/location.png";
import Confirm from "../components/confirmModal/confirm";
import Loader from "../components/loader";
import axios from "axios";
import { Fade, Zoom } from "react-reveal";
import Loader1 from "../components/loader1/Loader1";
import { Helmet } from "react-helmet";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [loader,setLoader] = useState(false);
  const [alertText, setAlertText] = useState("");
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showConfirmModal1, setShowConfirmModal1] = useState(false);

  const address =
    "#34,1st floor ,BHAGYALAKSHMI COMPLEX, UM Ln, Chickpet, Bengaluru, Karnataka 560053";

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
  
    if (!formData.phoneNumber.trim()) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: "Phone number is required",
      }));
      isValid = false;
    } else if (formData.phoneNumber.length !== 10 ||!/^\d{10}$/.test(formData.phoneNumber)) {
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
      setLoader(false)
    } finally {
      setLoader(false);
    }
  };

  const handleConfirm = () => {
    setShowConfirmModal(false);
    setFormData(" ");
  };

  return (
  <>

<Helmet>
        <title>
        Contact us - Polyone Cables
        </title>
        <meta
          name="description"
          content="Explore Polyone Cables in Bangalore for top-quality wires and cables. Trusted by professionals for reliability and performance. Contact us now!
          "
        />
      </Helmet>
    <div className="contact">
      <div className="contact__container">
        <div
          className="contact__banner"
          style={{
            backgroundImage: `url(${banner})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center top",
          }}
        >
        <Zoom cascade>  <div className="contact__banner__heading">
            <h2>Contact Us</h2>
          </div></Zoom>
        </div>
        <div className="contact__touch">
            <div className="contact__touch__container">
              <div className="contact__touch__left">
                <div className="contact__touch__left__content">
                  <h3>Get In Touch</h3>
                  <h2>Need any Help ?</h2>
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
                </div>
                <div className="contact__touch__left__social">
                  <a
                    className="face"
                    href="https://www.facebook.com/polyonecables"
                    target="_blank"
                  >
                    <i className="fa fa-facebook" />
                  </a>
                  <a
                    href="https://www.instagram.com/polyonecables/"
                    target="_blank"
                  >
                    <i className="fa fa-instagram" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/polyone-cables/"
                    target="_blank"
                  >
                    <i className="fa fa-linkedin" />
                  </a>
                  <a href="https://twitter.com/Polyonecables/"
                    target="_blank">
                    <i className="fa fa-twitter" />
                  </a>
                </div>
              </div>
              <div className="contact__touch__right">
                <div className="contact__touch__right__form">
                  <div className="contact__touch__right__input wrap">
                    <label>Full Name</label>
                    <input
                      type="text"
                      placeholder="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                     {formErrors.name && (
                      <p
                       className="errors">{formErrors.name}</p>
                    )}
                  </div>
                  <div className="contact__touch__right__input wrap">
                    <label>Phone</label>
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
                  <div className="contact__touch__right__input">
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}

                      placeholder="Email Address"
                      onChange={handleInputChange}
                    />
                    {formErrors.email && (
                      <p  className="errors2">{formErrors.email}</p>
                    )}
                  </div>
                  <div className="contact__touch__right__input">
                    <label>Message</label>
                    <textarea
                      rows={5}
                      type="text"
                      placeholder="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                     {formErrors.message && (
                      <p  className="errors3">{formErrors.message}</p>
                    )}
                  </div>
                  <button onClick={handleSubmit}>Contact Us</button>
                </div>
              </div>
            </div>
          </div>
        <div className="contact__sections">
          <div className="contact__section">
            <div className="contact__section__top">
              <Fade left> <div className="contact__section__top__card">
                <div className="contact__section__top__card__icon">
                  <img src={location} alt="Location" />
                </div>
                <div className="contact__section__top__card__content">
                  <h4>Location</h4>
                  <a
                    href={`https://www.google.com/maps?q=${encodeURIComponent(
                      address
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    #34,1st floor ,BHAGYALAKSHMI COMPLEX, UM Ln, Chickpet,
                    Bengaluru, Karnataka 560053
                  </a>
                </div>
              </div> </Fade>
              <Fade bottom> <div className="contact__section__top__card">
                <div className="contact__section__top__card__icon">
                  <img src={gmail} alt="Email" />
                </div>
                <div className="contact__section__top__card__content">
                  <h4>Email</h4>
                  <a href="mailto:adishwarmarketing@gmail.com">
                    adishwarmarketing@gmail.com
                  </a>
                </div>
              </div></Fade>
              <Fade right> <div className="contact__section__top__card">
                <div className="contact__section__top__card__icon">
                  <img src={tele} alt="Phone" />
                </div>
                <div className="contact__section__top__card__content">
                  <h4>Call Us</h4>
                  <a href="tel:080-40901541">080-40901541,</a>
                  <a href="tel:080-41140166">080-41140166</a>
                </div>
              </div></Fade>
            </div>
          </div>
          <div className="contact__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3888.0168875938543!2d77.5751917!3d12.9707711!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16091a2eb2bd%3A0x7ab6060e8cf80d01!2sAdishwar%20Marketing!5e0!3m2!1sen!2sin!4v1682313769009!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
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
            setFormData(" ");
          }}
          onCancel={() => {
            setShowConfirmModal(false);
            setLoader(false);
            setFormData(" ");
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
            setFormData(" ");
          }}
          onCancel={() => {
            setShowConfirmModal1(false);
            setLoader(false);
            setFormData(" ");
          }}
        />
      )}
      {loader && <Loader1 />}
    </div>
  </>
  );
};

export default ContactUs;
