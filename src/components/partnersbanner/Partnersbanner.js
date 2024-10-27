import React, { useState, useEffect, useRef } from "react";
import "./Partnersbanner.css";
import uni1 from "../../images/partnerdiv/1.webp";
import uni2 from "../../images/partnerdiv/2.webp";
import uni3 from "../../images/partnerdiv/3.webp";
import uni4 from "../../images/partnerdiv/4.webp";
import uni5 from "../../images/partnerdiv/5.webp";
import uni6 from "../../images/partnerdiv/6.webp";
import uni7 from "../../images/partnerdiv/7.webp";
import uni8 from "../../images/partnerdiv/8.webp";
import uni9 from "../../images/partnerdiv/9.webp";
import uni10 from "../../images/partnerdiv/10.webp";
import uni11 from "../../images/partnerdiv/11.webp";
import uni12 from "../../images/partnerdiv/12.webp";
import ShippingModal from "../../components/modal/ShippingModal";
import ShippingForm from "../../components/forms/ShippingForm";
import { saveUserForm } from "../../functions/user";
import { useFormik } from "formik";
import { ApplyNowSchema } from "../../schemas";
import { toast } from "react-hot-toast";

const images = [
  uni1,
  uni2,
  uni3,
  uni4,
  uni5,
  uni6,
  uni7,
  uni8,
  uni9,
  uni10,
  uni11,
  uni12,
];
const delay = 2000;

export default function Partnersbanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mainModalVisible, setMainModalVisible] = useState(false);
  const [noNetModal, setNoNetModal] = useState(false);

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

  // ------apply form working------

  const initialValues = {
    Name: "",
    PhoneNum: "",
    Email: "",
    Gender: "",
    Address: "",
    Qualification: "",
    Institution: "",
    CGPA: "",
    PassingYear: "",
    CountryInterestedIn: "",
    ApplyingForVisaType: "",
    EnglishLanguageTest: "",
    TestName: "",
    TestMarks: "",
    EstimatedBudget: "",
    AnyQuery: "",
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
    setValues,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: ApplyNowSchema,
    onSubmit: async (values, action) => {
      if (navigator.onLine) {
        try {
          // console.log("values we have", values);
          saveUserForm(values)
            .then((res) => {
              // console.log("form sent");
              if (res.data.ok) {
                toast.success("Form Submitted");
                setMainModalVisible(false);
                action.resetForm();
              }
            })
            .catch((err) => console.log("Form Submitted Error", err));
        } catch (error) {
          console.error(error);
          setMainModalVisible(false);
          // Handle errors if necessary
        }
      } else {
        setMainModalVisible(false);
        setNoNetModal(true);
      }
    },
  });

  const handlecancel = () => {
    setMainModalVisible(false);
  };

  return (
    <div className="cardcontainer">
      <div className="insidecont contentcont partnercont">
        <div className="partnerright">
          <div className="aboveheading">OUR PREMIUM PARTNERS</div>
          <div className="heading">Trusted By The World</div>
          <div className="subdata">
            Trusted by top educators and renowned brands in study guidance,
            enhancing your learning experience with the support of our valued
            partners.
          </div>
          <ShippingModal
            onModalok={handleSubmit}
            onModalcancel={handlecancel}
            setModalVisible={setMainModalVisible}
            modalVisible={mainModalVisible}
            values={values}
            btnClasses={"apllyBtn"}
          >
            <ShippingForm
              values={values}
              errors={errors}
              touched={touched}
              handleBlur={handleBlur}
              handleChange={handleChange}
            />
          </ShippingModal>
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
