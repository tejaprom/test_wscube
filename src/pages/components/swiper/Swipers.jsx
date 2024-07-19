import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Swipers.scss";
// import "../../components/MultipleItems/MultipleItems.scss";

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade,Autoplay]);

const Swipers = () => {
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = () => {
    if (swiperRef.current && currentIndex > 0) {
      swiperRef.current.swiper.slidePrev();
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
      setCurrentIndex(currentIndex === 5 ? 0 : currentIndex + 1);
    }
  };

  return (
    <>
      <Swiper
        ref={swiperRef}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={false}
        modules={[Pagination, Navigation,Autoplay]}
        className="mySwiper"
        breakpoints={{
          768: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }}
      >
        <SwiperSlide className="mySwiper_one">
          <div className="swipermb">
            <div className="gap1">
              <div className="gap1_back">
                <div className="gap1_back_content">
                  <div className="gap1_back_content_container">
                    <h3>
                      " I've been sourcing cables from Polyone for over a year now, and every product, whether 
                      it’s for industrial or residential use, has exceeded my expectations in durability and performance."
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="gap1">
              <div className="gap1_back">
                <div className="gap1_back_content">
                  <div className="gap1_back_content_container">
                    <h3>
                      "Handling installations in tough environmental conditions is challenging, but Polyone’s water level control cables have 
                      performed flawlessly. They're built to deliver under pressure."
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mySwiper_one">
          <div className="swipermb">
          <div className="gap1">
            <div className="gap1_back">
              <div className="gap1_back_content">
                <div className="gap1_back_content_container">
                  <h3>
                    " For any DIY home improvements, I always turn to Polyone. Their house wires are safe, 
                    reliable, and exactly what I need for a worry-free setup."
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="gap1">
            <div className="gap1_back">
              <div className="gap1_back_content">
                <div className="gap1_back_content_container">
                  <h3>
                    "We upgraded our entire security system using Polyone’s CCTV cables and the clarity we've achieved is
                     second to none. It's reassuring to work with such high-quality products!"
                  </h3>
                </div>
              </div>
            </div>
          </div></div>
        </SwiperSlide>
        <SwiperSlide className="mySwiper_one">
          <div className="swipermb">
          <div className="gap1">
            <div className="gap1_back">
              <div className="gap1_back_content">
                <div className="gap1_back_content_container">
                  <h3>
                    "Our recent project required highly reliable multi-core cables, and Polyone delivered 
                    exactly what we needed. The ease of installation and product quality were outstanding."
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="gap1">
            <div className="gap1_back">
              <div className="gap1_back_content">
                <div className="gap1_back_content_container">
                  <h3>
                    "Polyone's speaker wires were recommended to us for our theater setup. 
                    I was impressed by the sound clarity—definitely a game-changer for our audio experience."
"
                  </h3>
                </div>
              </div>
            </div>
          </div></div>
        </SwiperSlide>
      </Swiper>
      <div className="arrows1">
        <div className="arrows1_container">
          <MdKeyboardArrowLeft className="next1" onClick={goPrev} />
          <MdKeyboardArrowRight className="next1" onClick={goNext} />
        </div>
      </div>
    </>
  );
};

export default Swipers;
