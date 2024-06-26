import React, { useState, useEffect, useRef } from "react";
import "./Partnersbanner.css";
import uni1 from "../../images/partnerdiv/1.png";
import uni2 from "../../images/partnerdiv/2.png";
import uni3 from "../../images/partnerdiv/3.png";
import uni4 from "../../images/partnerdiv/4.png";
import uni5 from "../../images/partnerdiv/5.png";
import uni6 from "../../images/partnerdiv/6.png";
import uni7 from "../../images/partnerdiv/7.png";
import uni8 from "../../images/partnerdiv/8.png";
import uni9 from "../../images/partnerdiv/9.png";
import uni10 from "../../images/partnerdiv/10.png";

const images = [uni1, uni2, uni3, uni4, uni5, uni6, uni7, uni8, uni9, uni10];
const delay = 2000;

export default function Partnersbanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef(null);

  const nextImage = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    intervalRef.current = setInterval(nextImage, delay);
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (isTransitioning) {
      const timeout = setTimeout(() => setIsTransitioning(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning]);

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
          <button className="carousel-btn left" onClick={prevImage}>
            &lt;
          </button>
          <div className="carousel-container">
            <div
              className="carousel-images"
              style={{
                transform: `translateX(-${
                  (currentIndex % images.length) * 25
                }%)`,
                transition: isTransitioning ? "transform 0.5s ease" : "none",
              }}
            >
              {images.concat(images).map((image, index) => (
                <div key={index} className="bennerself">
                  <img
                    className="uniimages"
                    src={image}
                    alt={`Partner ${index % images.length}`}
                  />
                </div>
              ))}
            </div>
          </div>
          <button className="carousel-btn right" onClick={nextImage}>
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
