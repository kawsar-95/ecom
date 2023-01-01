import React, {
  Fragment,
  useEffect,
  useContext,
  useState,
  useRef,
} from "react";
import OrderSuccessMessage from "./OrderSuccessMessage";
import { HomeContext } from ".";
import { sliderImages } from "../../admin/dashboardAdmin/Action";
import { prevSlide, nextSlide } from "./Mixins";
import { getSliderImages } from "../../admin/dashboardAdmin/FetchApi";

import Slider from "react-slick";
import ReactHtmlParser from "react-html-parser";

const apiURL = process.env.REACT_APP_API_URL;

let items = "";
const Sliders = () => {
  const { data, dispatch } = useContext(HomeContext);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    sliderImages(dispatch);
    // startSlider(2);
  }, []);

  const startSlider = (data, length) => {
    // console.log(length);
    var i = 0;
    for (i; i < length; i++) {
      items =
        items +
        "<div>" +
        "<img" +
        'className="object-cover h-full max-h-screen"' +
        "src={`${apiURL}/uploads/customize/${data.sliderImages[" +
        i +
        "].slideImage}`}" +
        'alt="sliderImage"' +
        "/>" +
        "</div>";
    }
  };

  return (
    <Fragment>
      <div className="box-border w-full select-none relative bg-gray-500">
        {data.sliderImages.length > 0
          ? (startSlider(data, data.sliderImages.length),
            (
              <Slider
                className="absolute"
                dots={true}
                arrows={false}
                fade={true}
                infinite={true}
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
                autoplay={true}
              >
                {data.sliderImages?.map((image, index) => (
                  <div key={index}>
                    <img
                      className="object-cover w-full h-full max-h-screen"
                      src={`${apiURL}/uploads/customize/${data.sliderImages[index].slideImage}`}
                      alt={`sliderImage${index + 1}`}
                    />
                  </div>
                ))}
                {/* <div>
                  <img
                    className="object-cover w-full h-full max-h-screen"
                    src={`${apiURL}/uploads/customize/${data.sliderImages[0].slideImage}`}
                    alt="sliderImage"
                  />
                </div>
                <div>
                  <img
                    className="object-cover w-full h-full max-h-screen"
                    src={`${apiURL}/uploads/customize/${data.sliderImages[1].slideImage}`}
                    alt="sliderImage"
                  />
                </div> */}
              </Slider>
            ))
          : // <img
          //     className="object-cover w-full max-h-screen"
          //     src={`${apiURL}/uploads/customize/${data.sliderImages[slide].slideImage}`}
          //     alt="sliderImage"
          // />
          // console.log(`${data.sliderImages[slide].slideImage}`)
          null}
      </div>
      <OrderSuccessMessage />
    </Fragment>
  );
};

export default Sliders;
