import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Blogs.scss';
import image1 from '../../assets/images/blogs/blog1main.jpg';
import image2 from '../../assets/images/blogs/blog2main.jpg'
import profile from '../../assets/images/blogs/Ellipse 7572.png';
import Tilt from "react-parallax-tilt";
import Zoom from "react-reveal/Zoom";
import { motion } from 'framer-motion';
import { Fade } from 'react-reveal';


const Blogs = () => {
  const navigate = useNavigate();

  const handleClick1 = () => {
    navigate('/choosing-the-right-control-cables-for-your-industry-needs'); 
    window.scrollTo(0, 0); 
  };
  const handleClick2 = () => {
    navigate('/how-to-choose-premier-wire-supplier-india') 
    window.scrollTo(0, 0); 
  };

  return (
    <div>
      <div className="blog">
        <div className="blog_container">
          <div className="blog_container_banner">
           <Zoom><h2>Blogs</h2></Zoom> 
          </div>

          <div className="blog_container_content">
            <div className="blog_container_content_section">
              <div className="blog_container_content_section_heading">
                <h3>Find Latest Resources</h3>
                <h2> Our Latest Blogs</h2>
              </div>
              
              <div className="blog_container_content_section_blogs1">


        
    
              
             
                
                
               <div className="blog_container_content_section_blogs1_row1">
                <Fade bottom><div className="blog_container_content_section_blogs1_row1_description">
                  <div className="blog_container_content_section_blogs1_row1_description_image">
                    <img src={image1} alt="" />
                  </div>
                  <div className="blog_container_content_section_blogs1_row1_description_details">
                    <h2>Choosing the Right Control Cables for Your Industry Needs</h2>
                    


                    <p>
                    For those seeking dependable control
                     cables in Bangalore, look no further than Polyone Cables and Wires. Known for our exceptional quality, performance, and competitive pricing, we stand out as 
                    the best . {' '}
             
                       <span  onClick={handleClick1}>&gt; Read more
                  </span> 
             
                    </p>
                    <div className="blog_container_content_section_blogs1_row1_description_details_profile">
                      {/* <img src={profile} alt="" /> */}
                      <h3>Shashi Momdi</h3>
                      <p>08 May 2024</p>
                    </div>
                  </div>
                </div></Fade>
             <Fade bottom> <div className="blog_container_content_section_blogs1_row1_description">
                  <div className="blog_container_content_section_blogs1_row1_description_image">
                    <img src={image2} alt="" />
                  </div>
                  <div className="blog_container_content_section_blogs1_row1_description_details">
                    <h2>How to Choose a Premier Wire Supplier in India</h2>
                    


                    <p>
                    As industrial cable & wire manufacturers, we offer more robust products capable of withstanding the harsh conditions of industrial environments. Our cables are also perfect for factories, large-scale commercial setups, and for other demanding applications.{' '}
             
                       <span  onClick={handleClick2}> &gt; Read more </span> 
                    
                    </p>
                    <div className="blog_container_content_section_blogs1_row1_description_details_profile">
                      {/* <img src={profile} alt="" /> */}
                      <h3>Shashi Momdi</h3>
                      <p>08 May 2024</p>
                    </div>
                  </div>
                </div></Fade>  
                {/* <Fade bottom> <div className="blog_container_content_section_blogs1_row1_description">
                  <div className="blog_container_content_section_blogs1_row1_description_image">
                    <img src={image} alt="" />
                  </div>
                  <div className="blog_container_content_section_blogs1_row1_description_details">
                    <h2>Lorem ipsum dolor sitam</h2>
                    


                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laboriosam voluptatem vero dicta repellendus, itaque
                      cumque dolorum impedit repudiandae blanditiis{' '}
             
                       <span  onClick={handleClick}> &gt; Read more </span> 
                    
                    </p>
                    <div className="blog_container_content_section_blogs1_row1_description_details_profile">
                      <img src={profile} alt="" />
                      <h3>Lorem, ipsum</h3>
                      <p>10 aug 2023</p>
                    </div>
                  </div>
                </div></Fade>  */}
                </div>

{/* 
              <div className="blog_container_content_section_blog1_row1">
              <Fade bottom> <div className="blog_container_content_section_blogs1_row1_description">
                  <div className="blog_container_content_section_blogs1_row1_description_image">
                    <img src={image} alt="" />
                  </div>
                  <div className="blog_container_content_section_blogs1_row1_description_details">
                    <h2>Lorem ipsum dolor sitam</h2>
                    


                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laboriosam voluptatem vero dicta repellendus, itaque
                      cumque dolorum impedit repudiandae blanditiis{' '}
             
                       <span  onClick={handleClick}> &gt; Read more </span> 
                    
                    </p>
                    <div className="blog_container_content_section_blogs1_row1_description_details_profile">
                      <img src={profile} alt="" />
                      <h3>Lorem, ipsum</h3>
                      <p>10 aug 2023</p>
                    </div>
                  </div>
                </div></Fade> 
                <div className="blog_container_content_section_blogs1_row1_description">
                  <div className="blog_container_content_section_blogs1_row1_description_image">
                    <img src={image} alt="" />
                  </div>
                  <div className="blog_container_content_section_blogs1_row1_description_details">
                    <h2>Lorem ipsum dolor sitam</h2>
                    


                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laboriosam voluptatem vero dicta repellendus, itaque
                      cumque dolorum impedit repudiandae blanditiis{' '}
             
                       <span  onClick={handleClick}> &gt; Read more </span> 
                    
                    </p>
                    <div className="blog_container_content_section_blogs1_row1_description_details_profile">
                      <img src={profile} alt="" />
                      <h3>Lorem, ipsum</h3>
                      <p>10 aug 2023</p>
                    </div>
                  </div>
                </div>
                <Fade bottom>  <div className="blog_container_content_section_blogs1_row1_description">
                  <div className="blog_container_content_section_blogs1_row1_description_image">
                    <img src={image} alt="" />
                  </div>
                  <div className="blog_container_content_section_blogs1_row1_description_details">
                    <h2>Lorem ipsum dolor sitam</h2>
                    


                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laboriosam voluptatem vero dicta repellendus, itaque
                      cumque dolorum impedit repudiandae blanditiis{' '}
             
                       <span  onClick={handleClick}> &gt; Read more </span> 
                    
                    </p>
                    <div className="blog_container_content_section_blogs1_row1_description_details_profile">
                      <img src={profile} alt="" />
                      <h3>Lorem, ipsum</h3>
                      <p>10 aug 2023</p>
                    </div>
                  </div>
                </div></Fade> 
              </div>

              <div className="blog_container_content_section_blog1_row1">
              <Fade bottom> <div className="blog_container_content_section_blogs1_row1_description">
                  <div className="blog_container_content_section_blogs1_row1_description_image">
                    <img src={image} alt="" />
                  </div>
                  <div className="blog_container_content_section_blogs1_row1_description_details">
                    <h2>Lorem ipsum dolor sitam</h2>
                    


                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laboriosam voluptatem vero dicta repellendus, itaque
                      cumque dolorum impedit repudiandae blanditiis{' '}
             
                       <span  onClick={handleClick}> &gt; Read more </span> 
                    
                    </p>
                    <div className="blog_container_content_section_blogs1_row1_description_details_profile">
                      <img src={profile} alt="" />
                      <h3>Lorem, ipsum</h3>
                      <p>10 aug 2023</p>
                    </div>
                  </div>
                </div></Fade> 
                <div className="blog_container_content_section_blogs1_row1_description">
                  <div className="blog_container_content_section_blogs1_row1_description_image">
                    <img src={image} alt="" />
                  </div>
                  <div className="blog_container_content_section_blogs1_row1_description_details">
                    <h2>Lorem ipsum dolor sitam</h2>
                    


                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laboriosam voluptatem vero dicta repellendus, itaque
                      cumque dolorum impedit repudiandae blanditiis{' '}
             
                       <span  onClick={handleClick}> &gt; Read more </span> 
                    
                    </p>
                    <div className="blog_container_content_section_blogs1_row1_description_details_profile">
                      <img src={profile} alt="" />
                      <h3>Lorem, ipsum</h3>
                      <p>10 aug 2023</p>
                    </div>
                  </div>
                </div>
                <Fade bottom>  <div className="blog_container_content_section_blogs1_row1_description">
                  <div className="blog_container_content_section_blogs1_row1_description_image">
                    <img src={image} alt="" />
                  </div>
                  <div className="blog_container_content_section_blogs1_row1_description_details">
                    <h2>Lorem ipsum dolor sitam</h2>
                    


                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laboriosam voluptatem vero dicta repellendus, itaque
                      cumque dolorum impedit repudiandae blanditiis{' '}
             
                       <span  onClick={handleClick}> &gt; Read more </span> 
                    
                    </p>
                    <div className="blog_container_content_section_blogs1_row1_description_details_profile">
                      <img src={profile} alt="" />
                      <h3>Lorem, ipsum</h3>
                      <p>10 aug 2023</p>
                    </div>
                  </div>
                </div></Fade> 
              </div> */}
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
