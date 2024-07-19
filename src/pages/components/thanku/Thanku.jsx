import React from 'react';
import "./Thanku.scss";
import thankuvideo from "../../../assets/LandingVideo/video/video.mp4"
import LandingHeader from '../LandingHeader/LandingHeader';
import Typewriter from 'typewriter-effect';
import { Zoom } from 'react-reveal';


const Thanku = () => {
  return (
    <div>

      <div className="thanku">
        <LandingHeader/>
        <div className="thanku_container">
        <video src={thankuvideo} autoPlay loop muted></video>
        <div className="thanku_container_content">
           <Zoom cascade><h1>Thank You For Your Query!</h1></Zoom> 
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("One of our representatives will connect you shortly.")
                  .pauseFor(1000)
                  .start();
              }}
              options={{
                strings: ["One of our representatives will connect you shortly."],
                autoStart: true,
                loop: false, // Disable looping
                wrapperClassName: 'typewriter-text' 
              }}
            />

        </div>
        </div>
      </div>
    </div>
  )
}

export default Thanku
