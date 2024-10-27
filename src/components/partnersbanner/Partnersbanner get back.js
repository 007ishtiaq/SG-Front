import React, { useState, useEffect } from "react";
import "./Partnersbanner.css";
import uni1 from "../../images/partnerdiv/1.png";
import uni2 from "../../images/partnerdiv/2.png";
import uni3 from "../../images/partnerdiv/3.png";
import uni4 from "../../images/partnerdiv/4.png";
import uni5 from "../../images/partnerdiv/5.png";
import uni6 from "../../images/partnerdiv/6.png";
import uni7 from "../../images/partnerdiv/7.png";

const images = [uni1, uni2, uni3, uni4, uni5, uni6, uni7];

export default function Partnersbanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 1000);
    return () => clearInterval(interval);
  }, []);

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
                transition: "transform 0.5s ease",
              }}
            >
              {images.map((image, index) => (
                <div key={index} className="bennerself">
                  <img
                    className="uniimages"
                    src={image}
                    alt={`Partner ${index}`}
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
