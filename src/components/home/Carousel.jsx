import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, EffectCreative, Navigation } from "swiper";
import "swiper/css/effect-creative";

import "swiper/css/navigation";
import sliderData from "../../data/slider.json";
import { MdOutlineArrowOutward } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";
import Typewriter from "typewriter-effect";
import { useAppContext } from "../../contexts/AppContext";

const Carousel = () => {
  const { navigate } = useAppContext();
  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.activeIndex);
  };

  const slideNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const slidePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <>
      <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectCreative, Navigation]}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
        ref={swiperRef}
      >
        {sliderData?.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <section
                style={{ backgroundImage: `url('${item?.image}')` }}
                className="w-full md:min-h-[400px] md:h-[85vh] min-h-[500px] bg-no-repeat bg-cover bg-center relative"
              >
                <div
                  className={`w-full h-full absolute top-0 left-0 bg-gradient-to-t from-black/80 to-black/30 flex items-center text-white px-5 md:px-[100px] ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="w-full md:w-[700px] lg:w-[60%]">
                    <div className="w-fit px-4 py-1 rounded-md border border-white text-white text-[.85rem] uppercase first-text">
                      {item?.tag}
                    </div>
                    <h1 className="text-[1.75rem] md:text-[3rem] lg:text-[3.5rem] font-medium mt-2 first-text">
                      {item?.title}
                    </h1>
                    <div className="w-[80%] md:pl-[100px] flex gap-5 mt-5 text-[1rem]">
                      <div className="w-[100px] h-[1px] bg-white mt-2 first-text"></div>
                      {item?.body}
                    </div>
                    <div className="md:pl-[100px] mt-5">
                      <button
                        onClick={() => navigate("/contact")}
                        className="px-5 py-2 bg-white rounded-md text-black font-medium flex gap-2 items-center"
                      >
                        Contact
                        <MdOutlineArrowOutward size="20px" color="black" />
                      </button>
                    </div>
                  </div>

                  <div className="navigation-buttons flex gap-3 md:gap-10 md:ml-auto">
                    {/* Left and Right navigation buttons */}
                    <button
                      onClick={slidePrev}
                      className="w-10 md:w-[80px] h-10 md:h-[80px] border border-white rounded-xl flex justify-center items-center"
                    >
                      <MdArrowBackIos size="20px" color="#d1d5db" />
                    </button>
                    <button
                      onClick={slideNext}
                      className="w-10 md:w-[80px] h-10 md:h-[80px] border border-white rounded-xl flex justify-center items-center"
                    >
                      <MdArrowForwardIos size="20px" color="#d1d5db" />
                    </button>
                  </div>
                </div>
              </section>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Carousel;
