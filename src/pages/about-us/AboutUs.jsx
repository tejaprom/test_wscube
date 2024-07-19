import React from "react";
import "./AboutUs.scss";
import banner from "../../assets/images/about us/banner.png";
import company from "../../assets/images/about us/company.png";
import companywire from "../../assets/images/about us/company-wire.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import icon from "../../assets/images/about us/icon.svg";
import video from "../../assets/images/about us/video.png";
import icon1 from "../../assets/images/about us/menu.png";
import choose from "../../assets/images/about us/Whychooseusbg.jpg";
import team1 from "../../assets/images/about us/team1.png";
import team2 from "../../assets/images/about us/team2.png";
import team3 from "../../assets/images/about us/team3.png";
import team4 from "../../assets/images/about us/team4.png";
import client from "../../assets/images/about us/ourclients.png";
import Certificate from "../components/certificates/Certificate";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import NumberCounter from "number-counter";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { Helmet } from "react-helmet";

const AboutUs = () => {


  
  return (
    <>

<Helmet>
        <title>
        Best Wires & Cables Manufacturer Supplier in India | Polyone Cables
        </title>
        <meta
          name="description"
          content="Discover Polyone Cables, India's leading wires and cables manufacturer and supplier.
           Exceptional quality and service. Visit us now!"
        />
      </Helmet>
    <div className="about">
      <div className="about__container">
        <div
          className="about__banner"
          style={{
            backgroundImage: `url(${banner})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center top",
            // opacity:"0.9"
          }}
        >
          <Zoom cascade>
            <div className="about__banner__heading">
              <h2>About Us</h2>
            </div>
          </Zoom>
        </div>
        <div className="about__sections">
          <div className="about__company">
            <div className="about__company__section">
              <div className="about__company__section__left">
                <div className="about__company__section__left__images">
                  <img src={company} alt="about-company" />
                  <Fade top duration={2000}>
                    <div className="about__company__section__left__tab">
                      <h4>Polyone</h4>
                    </div>
                  </Fade>
                  <Fade left duration={2000}>
                    <div className="about__company__section__left__tab1">
                      <h3>15+</h3>
                      <h5>Years of Experience</h5>
                      <div className="about__company__section__left__tab1__line"></div>
                    </div>{" "}
                  </Fade>
                  <Fade right duration={2000}>
                    {" "}
                    <div className="about__company__section__left__tab2">
                      <img src={companywire} alt="about-company-wire" />
                    </div>{" "}
                  </Fade>
                </div>
              </div>
              <div className="about__company__section__right">
                <div className="about__company__section__right__headings">
                  <h5>Company</h5>
                  <h4>
                    A wire and cable seller based in Bangalore, India with over
                    15+ years of experience in the industry.
                  </h4>
                </div>
                <div className="about__company__section__right__line"></div>
                <div className="about__company__section__right__tabs">
                  <div className="about__company__section__right__tabs__container">
                    <Tabs>
                      <TabList>
                        <Tab>
                          About<span> &#8599;</span>
                        </Tab>
                        <Tab>
                          Mission<span> &#8599;</span>
                        </Tab>
                        <Tab>
                          Vision <span>&#8599;</span>
                        </Tab>
                      </TabList>
                      <TabPanel>
                        <div className="about__company__section__right__tabs__container__tab">
                          <p>
                            Adishwar Marketing a well established business
                            engaged in selling of wires and cables under the
                            brand of “POLYONE”. Incorporated in 2007 and an ISO
                            9001-2015 certified company. It engages in marketing
                            and distribution of copper, aluminum wires and
                            cables for domestic, industrial applications and
                            speciality market.{" "}
                          </p>
                          <p>
                            It deals in distribution of wires and cables like
                            House wire FR/FR-LS cable, multi core cable,
                            industrial cable, telecommunication cable, cctv
                            cable, jelly fixed co-axial cable, water level
                            control cable, shielded mylar taped cable, speaker
                            wire and aluminum wire.
                          </p>
                          {/* <p>Overall, PolyOne is an important player in the cable industry, providing high-quality materials and solutions that help to improve the performance, safety, and reliability of cables and wires.</p> */}
                        </div>
                        {/* <div className='about__company__section__right__tabs__container__tab__points'>
                                                    <div className='about__company__section__right__tabs__container__tab__point'>
                                                        <span>&#10003;</span>
                                                        <h4>Lorem ipsum doloramet</h4>
                                                    </div>
                                                    <div className='about__company__section__right__tabs__container__tab__point'>
                                                        <span>&#10003;</span>
                                                        <h4>Lorem ipsum doloramet</h4>
                                                    </div>
                                                    <div className='about__company__section__right__tabs__container__tab__point'>
                                                        <span>&#10003;</span>
                                                        <h4>Lorem ipsum doloramet</h4>
                                                    </div>
                                                    <div className='about__company__section__right__tabs__container__tab__point'>
                                                        <span>&#10003;</span>
                                                        <h4>Lorem ipsum doloramet Lorem ipsum</h4>
                                                    </div>
                                                    <div className='about__company__section__right__tabs__container__tab__point'>
                                                        <span>&#10003;</span>
                                                        <h4>Lorem ipsum doloramet</h4>
                                                    </div>
                                                    <div className='about__company__section__right__tabs__container__tab__point'>
                                                        <span>&#10003;</span>
                                                        <h4>Lorem ipsum doloramet</h4>
                                                    </div>
                                                </div> */}
                      </TabPanel>
                      <TabPanel>
                        <div className="about__company__section__right__tabs__container__tab">
                          <p>
                            Committed to leveraging the latest technologies and
                            industry best practices to deliver reliable and
                            efficient products that are safe, environmentally
                            friendly, and cost-effective. We aim to build
                            long-term relationships with our customers and
                            partners based on trust, transparency, and mutual
                            respect.
                          </p>
                          <p>
                            Our goal is to contribute to the growth and
                            development of the industries we serve, while
                            creating value for our shareholders and employees.
                          </p>
                        </div>
                        {/* <div className='about__company__section__right__tabs__container__tab__points'>
                                                    <div className='about__company__section__right__tabs__container__tab__point'>
                                                        <span>&#10003;</span>
                                                        <h4>Lorem ipsum doloramet</h4>
                                                    </div>
                                                    <div className='about__company__section__right__tabs__container__tab__point'>
                                                        <span>&#10003;</span>
                                                        <h4>Lorem ipsum doloramet</h4>
                                                    </div>
                                                    <div className='about__company__section__right__tabs__container__tab__point'>
                                                        <span>&#10003;</span>
                                                        <h4>Lorem ipsum doloramet</h4>
                                                    </div>
                                                    <div className='about__company__section__right__tabs__container__tab__point'>
                                                        <span>&#10003;</span>
                                                        <h4>Lorem ipsum doloramet Lorem ipsum</h4>
                                                    </div>
                                                    <div className='about__company__section__right__tabs__container__tab__point'>
                                                        <span>&#10003;</span>
                                                        <h4>Lorem ipsum doloramet</h4>
                                                    </div>
                                                    <div className='about__company__section__right__tabs__container__tab__point'>
                                                        <span>&#10003;</span>
                                                        <h4>Lorem ipsum doloramet</h4>
                                                    </div>
                                                </div> */}
                      </TabPanel>
                      <TabPanel>
                        <div className="about__company__section__right__tabs__container__tab">
                          <p>
                            Our vision is to become the leading provider of
                            high-quality wires and cables that enable seamless
                            connectivity and power distribution across
                            industries, while consistently delivering superior
                            value to our customers and stakeholders.
                          </p>
                        </div>
                        {/* <div className='about__company__section__right__tabs__container__tab__points'>
                                                    <div className='about__company__section__right__tabs__container__tab__point'>
                                                        <span>&#10003;</span>
                                                        <h4>Lorem ipsum doloramet</h4>
                                                    </div>
                                                    <div className='about__company__section__right__tabs__container__tab__point'>
                                                        <span>&#10003;</span>
                                                        <h4>Lorem ipsum doloramet</h4>
                                                    </div>
                                                    <div className='about__company__section__right__tabs__container__tab__point'>
                                                        <span>&#10003;</span>
                                                        <h4>Lorem ipsum doloramet</h4>
                                                    </div>
                                                    <div className='about__company__section__right__tabs__container__tab__point'>
                                                        <span>&#10003;</span>
                                                        <h4>Lorem ipsum doloramet Lorem ipsum</h4>
                                                    </div>
                                                    <div className='about__company__section__right__tabs__container__tab__point'>
                                                        <span>&#10003;</span>
                                                        <h4>Lorem ipsum doloramet</h4>
                                                    </div>
                                                    <div className='about__company__section__right__tabs__container__tab__point'>
                                                        <span>&#10003;</span>
                                                        <h4>Lorem ipsum doloramet</h4>
                                                    </div>
                                                </div> */}
                      </TabPanel>
                    </Tabs>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about__features">
            <div className="about__features__container">
              <div className="about__features__heading">
                <h3>Amazing Features</h3>
                {/* <h2>Lorem ipsum dolor sit amet,</h2> */}
              </div>
              <div className="about__features__cards">
                <Swiper
                  spaceBetween={30}
                  // slidesPerView={3}
                  centeredSlides={true}

                  autoplay={{ delay: 2000 ,          disableOnInteraction: false,
                  }}
                  modules={[Autoplay, Navigation, Pagination]}
                  pagination={{
                    clickable: true,
                  }}
                  loop={true}
                  navigation={false}
                  breakpoints={{
                    280: {
                      slidesPerView: 1,
                      spaceBetween: 0,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 0,
                    },
                    800: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                    // "@1.50": {
                    //   slidesPerView: 3,
                    //   spaceBetween: 40,
                    // },
                    // "@1.75": {
                    //   slidesPerView: 3,
                    //   spaceBetween: 50,
                    // },
                    // "@2.0": {
                    //   slidesPerView: 3,
                    //   spaceBetween: 50,
                    // },
                  }}
                >
                  <SwiperSlide>
                    <div className="about__features__card">
                      <div className="about__features__card__image">
                        <img src={icon} alt="icon" />
                      </div>
                      <h2>Quality products</h2>
                      <p>
                        A reputed wires and cable firm that offer products of
                        the highest calibre that are built to last. The products
                        will be tested to verify to fulfil the necessary
                        specifications, and it will only utilise materials that
                        meet or exceed industry standards.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="about__features__card">
                      <div className="about__features__card__image">
                        <img src={icon} alt="icon" />
                      </div>
                      <h2>Expertise</h2>
                      <p>
                        The ideal goods for your unique demands might be
                        recommended by a team of professionals who work for a
                        reputable wires and cable business. They will be able to
                        assist you in making the best product selection for your
                        project and respond to any queries you may have.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="about__features__card">
                      <div className="about__features__card__image">
                        <img src={icon} alt="icon" />
                      </div>
                      <h2>Competitive pricing</h2>
                      <p>
                        A reputable wires and cable company will offer
                        competitive pricing for their products, making it more
                        cost-effective for you to purchase from them. To further
                        assist you in saving money, they will also provide bulk
                        discounts and other unique promotions.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="about__features__card">
                      <div className="about__features__card__image">
                        <img src={icon} alt="icon" />
                      </div>
                      <h2>Customer service</h2>
                      <p>
                        Any questions you may have will be answered, and if
                        there are any issues with your order, they will offer
                        prompt and effective help.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="about__features__card">
                      <div className="about__features__card__image">
                        <img src={icon} alt="icon" />
                      </div>
                      <h2>Wide range of products</h2>
                      <p>
                        A quality wires and cable business will provide a large
                        selection of items, including various wire and cable
                        kinds, connectors, and other accessories. You will
                        discover it simpler to locate the precise goods you
                        require for your project as a result.
                      </p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>{" "}
          {/* <div className="about__clients">
            <div className="about__clients__container">
              <div className="about__clients__heading">
                <h3>Popular Clients</h3>
                <h2>Lorem ipsum dolor sit amet, consectetur</h2>
              </div>
              <div className="about__clients__right">
                <img src={client} alt="ABSTRACT" />
                <img src={client} alt="ABSTRACT" />
                <img src={client} alt="ABSTRACT" />
              </div>
            </div>
          </div> */}
          <div className="about__why">
            <div className="about__why__container">
              <div className="about__why__left">
                <h3>Why Choose Us</h3>
                {/* <h2>Quality control
                                </h2> */}
                <p>
                  <span>Quality control</span> - is a critical feature of wire
                  and cable company services, ensuring that products meet or
                  exceed industry standards for performance and safety.
                </p>
                {/* <h2></h2> */}
                <p>
                  <span>Warranty & guarantee</span> - providing customers with
                  peace of mind and protection against defects and failures.
                </p>
                {/* <h2>Customization</h2> */}
                <p>
                  <span>Customization</span> - In order to meet their individual
                  application needs, customers can order cables and wires with
                  precise lengths, diameters, and materials.
                </p>
              </div>
              <div className="about__why__video">
                <Fade bottom duration={2000}>
                  {" "}
                  <img src={video} alt="video" />
                </Fade>
              </div>
            </div>
          </div>
          <div
            className="about__choose"
            style={{
              backgroundImage: `url(${choose})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center top",
            }}
          >
            <div className="about__choose__container">
              <div className="about__choose__heading">
                <h3>Why Choose Us</h3>
                {/* <h2>Lorem ipsum dolor sit amet</h2> */}
              </div>
              <div className="about__choose__sections">
                <div className="about__choose__section">
                  <div className="about__choose__section__icon rotate">
                    <img src={icon1} alt="icon" />
                  </div>
                  <h4>
                    <NumberCounter
                      style={{ color: "white" }}
                      end={15}
                      delay={10}
                      className="increment"
                      postFix="+ years"
                    />
                    <br />
                    Experience
                  </h4>
                </div>
                <div className="about__choose__section">
                  <div className="about__choose__section__icon rotate">
                    <img src={icon1} alt="icon" />
                  </div>
                  <h4>
                    <NumberCounter
                      style={{ color: "white" }}
                      end={500}
                      delay={10}
                      className="increment"
                      postFix="+"
                    />
                    <br />
                    Clients or Customers
                  </h4>
                </div>
                <div className="about__choose__section">
                  <div className="about__choose__section__icon rotate">
                    <img src={icon1} alt="icon" />
                  </div>
                  <h4>
                    <NumberCounter
                      style={{ color: "white" }}
                      end={100}
                      delay={10}
                      className="increment"
                      postFix="%"
                    />
                    <br />
                    Quality Assurance
                  </h4>
                </div>
                <div className="about__choose__section">
                  <div className="about__choose__section__icon rotate">
                    <img src={icon1} alt="icon" />
                  </div>
                  <h4>
                    <NumberCounter
                      style={{ color: "white" }}
                      end={30}
                      delay={10}
                      className="increment"
                      postFix="mins"
                    />
                    <br />
                    quick service and delivery
                  </h4>
                </div>
              </div>
            </div>
          </div>
          {/* <div className='about__team'>
                        <div className='about__team__container'>
                            <div className='about__team__heading'>
                                <h3>Our Team Member</h3>
                                <h2>Meet our amazing team</h2>
                            </div>
                            <div className='about__team__cards'>
                                <div className='about__team__card'>
                                    <div className='about__team__card__content'>
                                        <h4>Name</h4>
                                        <h5>Manager</h5>
                                    </div>
                                    <div className='about__team__card__image'>
                                        <img src={team1} alt='Name' />
                                        <div className='about__team__card__icons'>
                                            <a>
                                                <i className='fa fa-facebook' />
                                            </a>
                                            <a>
                                                <i className='fa fa-instagram' />
                                            </a>
                                            <a>
                                                <i className='fa fa-linkedin' />
                                            </a>
                                            <a>
                                                <i className='fa fa-twitter' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='about__team__card'>
                                    <div className='about__team__card__content'>
                                        <h4>Name</h4>
                                        <h5>Manager</h5>
                                    </div>
                                    <div className='about__team__card__image'>
                                        <img src={team2} alt='Name' />
                                        <div className='about__team__card__icons'>
                                            <a>
                                                <i className='fa fa-facebook' />
                                            </a>
                                            <a>
                                                <i className='fa fa-instagram' />
                                            </a>
                                            <a>
                                                <i className='fa fa-linkedin' />
                                            </a>
                                            <a>
                                                <i className='fa fa-twitter' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='about__team__card'>
                                    <div className='about__team__card__content'>
                                        <h4>Name</h4>
                                        <h5>Manager</h5>
                                    </div>
                                    <div className='about__team__card__image'>
                                        <img src={team3} alt='Name' />
                                        <div className='about__team__card__icons'>
                                            <a>
                                                <i className='fa fa-facebook' />
                                            </a>
                                            <a>
                                                <i className='fa fa-instagram' />
                                            </a>
                                            <a>
                                                <i className='fa fa-linkedin' />
                                            </a>
                                            <a>
                                                <i className='fa fa-twitter' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='about__team__card'>
                                    <div className='about__team__card__content'>
                                        <h4>Name</h4>
                                        <h5>Manager</h5>
                                    </div>
                                    <div className='about__team__card__image'>
                                        <img src={team4} alt='Name' />
                                        <div className='about__team__card__icons'>
                                            <a>
                                                <i className='fa fa-facebook' />
                                            </a>
                                            <a>
                                                <i className='fa fa-instagram' />
                                            </a>
                                            <a>
                                                <i className='fa fa-linkedin' />
                                            </a>
                                            <a>
                                                <i className='fa fa-twitter' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
          <Certificate />
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutUs;
