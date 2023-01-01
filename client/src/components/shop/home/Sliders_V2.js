import React, { Fragment, useEffect, useContext, useState, useRef } from "react";
import OrderSuccessMessage from "./OrderSuccessMessage";
import { HomeContext } from ".";
import { sliderImages } from "../../admin/dashboardAdmin/Action";
import { prevSlide, nextSlide } from "./Mixins";
import { getSliderImages } from "../../admin/dashboardAdmin/FetchApi";

import Slider from "react-slick";

const apiURL = process.env.REACT_APP_API_URL;

let iLength;
let count=0;
let iText;
let iFirst;
let iLast;
const Sliders = (props) => {
  const { data, dispatch } = useContext(HomeContext);
  const [slide, setSlide] = useState(0);

  const handelOnNextClick = (length) => {
    count = (count+1)%length;
    setSlide(count);
    slideRef.current.classList.add('fade-anim');
  }

  const handleOnPrevClick= (length) => {
    count = (slide + length - 1) % length;
    setSlide(count);
    slideRef.current.classList.add('fade-anim');
  }

  const slideRef = useRef()

  const removeAnimation = () => {
    slideRef.current.classList.remove('fade-anim');
  }

  useEffect(() => {
    sliderImages(dispatch);
    slideRef.current.addEventListener('animationend', removeAnimation)
    startSlider();
  }, []);

  const startSlider = () => {
    setInterval(() => {
      handelOnNextClick(iLength);
    }, 10000)
  }

  return (
      <Fragment>
          <div ref={slideRef} className="w-full select-none relative bg-gray-100">
            <Slider>
            {data.sliderImages.length > 0 ? (
                iLength = data.sliderImages.length,
                iFirst = (data.sliderImages[slide].slideImage).indexOf('_')+1,
                iText = (data.sliderImages[slide].slideImage).substr(iFirst),
                iLast = iText.indexOf('.'),
                iText = iText.substr(0,iLast),
                <img
                    className="object-cover w-full max-h-screen"
                    src={`${apiURL}/uploads/customize/${data.sliderImages[slide].slideImage}`}
                    alt="sliderImage"
                />
                // console.log(`${data.sliderImages[slide].slideImage}`)
                ) : (
                ""
                )}
            
            <div class="absolute h-screen w-full inset-0  bg-blue-500 opacity-50">
                  <div className="flex text-white text-3xl justify-left items-center text-5xl bg-black">
                    <div className="flex-1"></div>
                    <div className="flex-auto">
                      {iText}
                    </div>
                  </div>
            </div>
            <svg
              onClick={(e) => handleOnPrevClick(data.sliderImages.length)}
              xmlns="http://www.w3.org/2000/svg"
              className={`z-10 absolute top-0 left-0 my-48 flex justify-end items-center box-border flex justify-center w-8 h-8 text-gray-700  cursor-pointer hover:text-yellow-700`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              onClick={(e) => handelOnNextClick(data.sliderImages.length)}
              className={`z-10 absolute top-0 right-0 my-48 flex justify-start items-center box-border flex justify-center w-8 h-8 text-gray-700 cursor-pointer hover:text-yellow-700`}
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>

            

            {/* <div className="z-10 w-full absolute top-0 left-0 my-48 flex justify-between items-center w-8 h-8 text-gray-700  cursor-pointer hover:text-yellow-700 px-3">
                <button onClick={(e) => handleOnPrevClick(data.sliderImages.length)}>Previous</button>
                <button onClick={(e) => handelOnNextClick(data.sliderImages.length)}>Next</button>
            </div> */}
            </Slider>
            
          </div>
      </Fragment>
  );
};

export default Sliders;
