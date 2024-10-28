import React, { useState } from "react";
import "./MegaSlide.css";
import bannerimage from "../../images/megabanner/1.webp";
import ShippingModal from "../../components/modal/ShippingModal";
import ShippingForm from "../../components/forms/ShippingForm";
import { saveUserForm } from "../../functions/user";
import { useFormik } from "formik";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { ApplyNowSchema } from "../../schemas";

export default function MegaSlide() {
  const [mainModalVisible, setMainModalVisible] = useState(false);
  const [noNetModal, setNoNetModal] = useState(false);

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
    <div className="megaslidecont">
      <div className="megaslideoverlay"></div>
      <div className="megaslideleft">
        <div className="mshead">
          <p className="headspan1">Path to</p>
          <p className="headspan2">Success</p>
          <p className="headspan3">Empower Your Future</p>
        </div>
        <div className="mssub">
          <p className="subp">
            Empowering Success Worldwide: Your Ultimate Guide to Learning
            Excellence.
          </p>
        </div>
        <div className="msctacont">
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
          <Link to="/Stories">
            <button className="apllyBtn shopBtn">Explore</button>
          </Link>
        </div>
      </div>
      <div className="megaslideright">
        <div className="megaslideimgcont">
          <img src={bannerimage} alt="" />
        </div>
      </div>
    </div>
  );
}
