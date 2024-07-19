import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import "./MultipleItems.scss";
import { styled } from "@mui/material";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

function MultipleItems() {
  const sliderRef = useRef();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    slidesToShow: windowWidth >= 267 && windowWidth <= 1020 ? 1 : 2,
    slidesToScroll: windowWidth >= 267 && windowWidth <= 1020 ? 1 : 2,
  };
  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };
  const goToNext = () => {
    sliderRef.current.slickNext();
  };
  function CustomPrevArrow(props) {
    const { className } = props;
    return (
      <div className={className} onClick={goToPrev}>
        <span>
          <MdKeyboardArrowLeft className="next" />
        </span>
      </div>
    );
  }
  function CustomNextArrow(props) {
    const { className } = props;
    return (
      <div className={className} onClick={goToNext}>
        <span>
          <MdKeyboardArrowRight className="next" />
        </span>
      </div>
    );
  }

  return (
    <div className="slider-content">
      <Slider ref={sliderRef} {...settings}>
        <div className="gap">
          <div className="gap_back">
            <div className="gap_back_content">
              <div className="gap_back_content_container">
                <h3>
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Beatae magni, odit deserunt assumenda distinctio laudantium
                  quis repellat necessitatibus similique quasi! similique
                  quasi!similique quasi!"
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="gap">
          <div className="gap_back">
            <div className="gap_back_content">
              <div className="gap_back_content_container">
                <h3>
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Beatae magni, odit deserunt assumenda distinctio laudantium
                  quis repellat necessitatibus similique quasi! similique
                  quasi!similique quasi!"
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="gap">
          <div className="gap_back">
            <div className="gap_back_content">
              <div className="gap_back_content_container">
                <h3>
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Beatae magni, odit deserunt assumenda distinctio laudantium
                  quis repellat necessitatibus similique quasi! similique
                  quasi!similique quasi!"
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="gap">
          <div className="gap_back">
            <div className="gap_back_content">
              <div className="gap_back_content_container">
                <h3>
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Beatae magni, odit deserunt assumenda distinctio laudantium
                  quis repellat necessitatibus similique quasi! similique
                  quasi!similique quasi!"
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="gap">
          <div className="gap_back">
            <div className="gap_back_content">
              <div className="gap_back_content_container">
                <h3>
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Beatae magni, odit deserunt assumenda distinctio laudantium
                  quis repellat necessitatibus similique quasi! similique
                  quasi!similique quasi!"
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="gap">
          <div className="gap_back">
            <div className="gap_back_content">
              <div className="gap_back_content_container">
                <h3>
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Beatae magni, odit deserunt assumenda distinctio laudantium
                  quis repellat necessitatibus similique quasi! similique
                  quasi!similique quasi!"
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Slider>
      <div className="arrows">
        <div className="arrows_container">
          <CustomPrevArrow />
          <CustomNextArrow />
        </div>
      </div>
    </div>
  );
}

export default MultipleItems;
