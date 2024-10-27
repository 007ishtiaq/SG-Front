import React, { useState, useEffect, useRef } from "react";
import "./Partnersbanner.css";
import uni1 from "../../images/partnerdiv/1.png";
import uni2 from "../../images/partnerdiv/2.png";
import uni3 from "../../images/partnerdiv/3.png";
import uni4 from "../../images/partnerdiv/4.png";
import uni5 from "../../images/partnerdiv/5.png";
import uni6 from "../../images/partnerdiv/6.png";
import uni7 from "../../images/partnerdiv/7.png";

const images = [uni1, uni2, uni3, uni4, uni5, uni6, uni7];
const delay = 2000;
const perView = 3;

export default function Partnersbanner() {
  const [totalScroll, setTotalScroll] = useState(0);
  const imageWrapperRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const imageWrapper = imageWrapperRef.current;
    imageWrapper.style.setProperty("--per-view", perView);

    // Cloning the first `perView` elements to create an infinite scroll effect
    for (let i = 0; i < perView; i++) {
      imageWrapper.insertAdjacentHTML(
        "beforeend",
        imageWrapper.children[i].outerHTML
      );
    }

    intervalRef.current = setInterval(scrolling, delay);

    return () => clearInterval(intervalRef.current);
  }, []);

  const scrolling = () => {
    setTotalScroll((prevScroll) => {
      const imageWrapper = imageWrapperRef.current;
      const widthEl = imageWrapper.children[0].offsetWidth;

      if (prevScroll === images.length) {
        setTimeout(() => {
          imageWrapper.style.transition = "none";
          imageWrapper.style.left = "0";
          setTotalScroll(0);
          setTimeout(() => {
            imageWrapper.style.transition = "left 0.3s";
            imageWrapper.style.left = `-${widthEl}px`;
          }, 50);
        }, 0);
        return 0;
      }

      imageWrapper.style.left = `-${(prevScroll + 1) * widthEl}px`;
      return prevScroll + 1;
    });
  };

  return (
    <div className="cardcontainer">
      <div className="insidecont contentcont partnercont">
        <div className="partnerright">
          <div className="aboveheading">OUR PREMIUM PARTNERS</div>
          <div className="heading">Trusted By The World</div>
          <div className="subdata">
            You can list your partners or instructors brands here to show off
            your site's reputation.
          </div>
          <button className="actionbtn">Apply Now</button>
        </div>
        <div className="partnerleft">
          <div className="image-container">
            <div className="image-wrapper" ref={imageWrapperRef}>
              {images.concat(images.slice(0, perView)).map((src, index) => (
                <div key={index}>
                  <img src={src} alt={`partner ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
