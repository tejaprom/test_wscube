import React, { useState } from 'react';
import video from '../../assets/LandingVideo/video/video.mp4';
import './LandingPage.scss';
import { ContactUsForm } from "../utils/apicalls";
import Confirm from "../components/confirmModal/confirm";
import Loader from "../components/loader";
import { useNavigate } from "react-router-dom";
import img from "../../assets/LandingVideo/multicore.png";
import aluminium from "../../assets/LandingVideo/aluminium.png"
import coaxial from "../../assets/LandingVideo/coaxial.png"
import cctv from "../../assets/LandingVideo/cctv.png"
import water from "../../assets/LandingVideo/waterCable.png"
import speaker from "../../assets/LandingVideo/speakerWire.png"
import taped from "../../assets/LandingVideo/tapedCabel.png"
import tele from "../../assets/LandingVideo/telecom.png"
import indus from "../../assets/LandingVideo/indus.png"
import color from "../../assets/LandingVideo/colorcable.png"
import Swipers from '../components/swiper/Swipers';
import LandingHeader from '../components/LandingHeader/LandingHeader';
import Footer from '../footer/footer';
import { motion } from 'framer-motion';
import Loader1 from '../components/loader1/Loader1';
import axios from 'axios';


const LandingPage = () => {
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


    const handleContactUsClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

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
            navigate("/thankyou")
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
    };

    return (
        <div>
            <LandingHeader/>
            <div className="landing">
                <div className="landind_bgvideo">
                    <div className="landing_bgvideo_overlay">
                        <video src={video} autoPlay loop muted></video>
                        <div className="landing_bgvideo_overlay_section">
                            <div className="landing_bgvideo_overlay_section_container">
                                <div className="landing_bgvideo_overlay_section_container_left">
                                    <div className="landing_bgvideo_overlay_section_container_left_content">
                                        <h3>Welcome to Polyone</h3>
                                        <p>A wire and cable seller based in Bangalore, India with over 15+ years of experience in the industry</p>
                                    </div>
                                </div>
                                <div className="landing_bgvideo_overlay_section_container_right">
                                    <div className="landing_bgvideo_overlay_section_container_right_form">
                                        <h3>Contact Us</h3>
                                        <div className="landing_bgvideo_overlay_section_container_right_input ">
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
                       className="landingerrors">{formErrors.name}</p>
                    )}
                                        </div>
                                        <div className="landing_bgvideo_overlay_section_container_right_input ">
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
                      <p className="landingerrors1">{formErrors.phoneNumber}</p>
                    )}
                                        </div>
                                        <div className="landing_bgvideo_overlay_section_container_right_input">
                                            <label>Email Address</label>
                                            <input
                      type="email"
                      name="email"
                      value={formData.email}

                      placeholder="Email Address"
                      onChange={handleInputChange}
                    />
                                            {formErrors.email && (
                      <p  className="landingerrors2">{formErrors.email}</p>
                    )}
                                        </div>
                                        <div className="landing_bgvideo_overlay_section_container_right_input">
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
                      <p  className="landingerrors3">{formErrors.message}</p>
                    )}
                                        </div>
                                        <button onClick={handleSubmit}>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="landing_content">
                    <div className="landing_content_aboutus">
                        <div className="landing_content_aboutus_container">
                            <h2>About Us</h2>    
                            <p>PolyOne's cable materials offer a number of benefits to cable manufacturers, including improved electrical performance, greater resistance to environmental factors such as heat and moisture, and enhanced flame retardancy</p>
                        </div>
                    </div>
                    <div className="landing_content_products">
                        <div className="landing_content_products_container">
                            <h2>Our Products</h2>
                            <div className="landing_content_products_container_prod">
                            <div className="landing_content_products_container_prod_card">
                                <div className="landing_content_products_container_prod_card_top">
                                    <img src={img} alt="" />
                                </div>
                                <div className="landing_content_products_container_prod_card_bottom">
                                    <h3>Multi Core</h3>
                                </div>
                            </div>
                            <div className="landing_content_products_container_prod_card">
                                <div className="landing_content_products_container_prod_card_top">
                                    <img src={aluminium} alt="" />
                                </div>
                                <div className="landing_content_products_container_prod_card_bottom">
                                    <h3>Aluminium wire</h3>
                                </div>
                            </div>
                            <div className="landing_content_products_container_prod_card">
                                <div className="landing_content_products_container_prod_card_top">
                                    <img src={coaxial} alt="" />
                                </div>
                                <div className="landing_content_products_container_prod_card_bottom">
                                    <h3>Jelly filled co-axial cable</h3>
                                </div>
                            </div>
                            <div className="landing_content_products_container_prod_card">
                                <div className="landing_content_products_container_prod_card_top">
                                    <img src={cctv} alt="" />
                                </div>
                                <div className="landing_content_products_container_prod_card_bottom">
                                    <h3>Cctv cable</h3>
                                </div>
                            </div>
                            <div className="landing_content_products_container_prod_card">
                                <div className="landing_content_products_container_prod_card_top">
                                    <img src={water} alt="" />
                                </div>
                                <div className="landing_content_products_container_prod_card_bottom">
                                    <h3>Water level control cable</h3>
                                </div>
                            </div>
                            <div className="landing_content_products_container_prod_card">
                                <div className="landing_content_products_container_prod_card_top">
                                    <img src={speaker} alt="" />
                                </div>
                                <div className="landing_content_products_container_prod_card_bottom">
                                    <h3>Speaker wire</h3>
                                </div>
                            </div>
                            <div className="landing_content_products_container_prod_card">
                                <div className="landing_content_products_container_prod_card_top">
                                    <img src={taped} alt="" />
                                </div>
                                <div className="landing_content_products_container_prod_card_bottom">
                                    <h3>Industrial wire</h3>
                                </div>
                            </div>
                            <div className="landing_content_products_container_prod_card">
                                <div className="landing_content_products_container_prod_card_top">
                                    <img src={color} alt="" />
                                </div>
                                <div className="landing_content_products_container_prod_card_bottom1">
                                    <h3>House wire</h3>
                                </div>
                            </div>
                            <div className="landing_content_products_container_prod_card">
                                <div className="landing_content_products_container_prod_card_top">
                                    <img src={tele} alt="" />
                                </div>
                                <div className="landing_content_products_container_prod_card_bottom2">
                                    <h3>Telecommunication cable</h3>
                                </div>
                            </div>
                            <div className="landing_content_products_container_prod_card">
                                <div className="landing_content_products_container_prod_card_top">
                                    <img src={indus} alt="" />
                                </div>
                                <div className="landing_content_products_container_prod_card_bottom3">
                                    <h3>Industrial wire</h3>
                                </div>
                            </div>
                            </div>
                            <div className="landing_content_products_container_button">
                                <button className="button-48" role="button">
                                    <span className="text" onClick={handleContactUsClick}>Contact</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="landing_content_review">
                        <div className="landing_content_review_container">
                            <div className="landing_content_review_container_top">
                                <h2>Testimonial</h2>
                                <h3>What Our Customers Say</h3>
                            </div>  
                            <div className="landing_content_review_container_bottom">
                                <div className="landing_content_review_container_bottom_section">
                                    <Swipers/>
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
                        setLoader(false)
                    }}
                    onCancel={() => {
                        setShowConfirmModal(false);
                        setLoader(false)
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
                        setLoader(false)
                    }}
                    onCancel={() => {
                        setShowConfirmModal1(false);
                        setLoader(false)
                    }}
                />
            )}
            {loader ? <Loader1 /> : null}
            
        </div>
    )
}

export default LandingPage;
