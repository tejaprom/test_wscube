import React ,{useState,useEffect}from 'react'
import './LandingHeader.scss';
import { useNavigate } from 'react-router-dom';
import landinglogo from "../../../assets/logo/polyone final logo-03.png"
const LandingHeader = () => {
  const [backgroundColor, setBackgroundColor] = useState("initial");
 
  const navigate = useNavigate();

  const handleLogo = ()=>{
navigate("/")
  };
  useEffect(() => {
  const handleScroll = () => {
    const scrollThreshold = 300;
    const scrollPosition =
      window.scrollY || document.documentElement.scrollTop;

    console.log("Scroll Position:", scrollPosition);

    if (scrollPosition > scrollThreshold) {
      setBackgroundColor("#f0623a");
    } else {
      setBackgroundColor("initial");
    }
  };

  window.addEventListener("scroll", handleScroll);


  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
  return (
    <div>
      <div className="headerlanding " style={{ backgroundColor }}>
        <div className="headerlanding_container">
            <img  onClick={handleLogo} src={landinglogo} alt="" />
        </div>
      </div>
    </div>
  )
}

export default LandingHeader
