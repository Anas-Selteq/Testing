import React from "react";
import Styles from "../../styles/Landingpagemodules/Hero.module.css";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { FaMicrophoneAlt } from "react-icons/fa";

const Hero: React.FC = () => {
  return (
    <div className={Styles.heroSlider}>
      <Swiper
        spaceBetween={0}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
        // pagination={{
        //   clickable: true,
        // }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={1200}
      >
        <SwiperSlide>
          <div className={Styles.heroSlider}>
            <img src="../imagess/hero.png" alt="Hero" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={Styles.heroSlider}>
            <img src="../imagess/hero.png" alt="Hero" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={Styles.heroSlider}>
            <img src="../imagess/hero.png" alt="Hero" />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className={Styles.alignSearchContainer}>
        <div>
          <p className={Styles.sloganText}>
            Find the <span className={Styles.sloganBold}>Service You Need</span>{" "}
            Today!
          </p>
          <div className={Styles.CompleteInputField}>
            <input
              type="text"
              name=""
              id=""
              placeholder="Search Here..."
              className={Styles.inputField}
            />
            <div className={Styles.VoiceSearchIconBg}>
              <FaMicrophoneAlt color="#FFFFFF" size={16.48} />
            </div>
          </div>
        </div>
        <div className={Styles.bigOfferText}>Big Offers</div>
        <p className={Styles.discountText}>Get discount on</p>
        <p className={Styles.discountText}>many Services Everyday!</p>
        <div className={Styles.getAppBtn}>
          <img src="../imagess/mobile.png" alt="Mobile" />
          <p className="pt-3">Get the App</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
