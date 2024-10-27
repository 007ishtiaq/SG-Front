import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Scorebanner.css";
import cornerstyle from "../../images/scorebanner/cornerstyle.png";
import subjectimg from "../../images/scorebanner/subject.png";
import ShippingModal from "../../components/modal/ShippingModal";
import ShippingForm from "../../components/forms/ShippingForm";
import { saveUserForm } from "../../functions/user";
import { useFormik } from "formik";
import { ApplyNowSchema } from "../../schemas";
import { toast } from "react-hot-toast";

export default function Scorebanner() {
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
    <div className="cardcontainer">
      <div className="insidecont contentcont scorecardcontainer">
        <div className="scorecardcont">
          <div className="scorecardleft">
            <div className="scorecont">
              <div className="scorecircle">
                <div className="scoreself">1000 +</div>
                <div className="scoretxt">
                  We Have Worked <br /> With Clients
                </div>
              </div>
              <div className="scorecircle">
                <div className="scoreself">99 %</div>
                <div className="scoretxt">
                  Successfull Visa <br /> Process Rate
                </div>
              </div>
              <div className="scorecircle">
                <div className="scoreself">30 Days</div>
                <div className="scoretxt">
                  Application Approval <br /> Time We Follow
                </div>
              </div>
            </div>
            <div className="scorecontent">
              <p className="scoreheading">
                Top rated by Students & immigration firms with{" "}
                <span>100% success rate.</span>
              </p>
              <p className="scoresub">
                Get free Study Abroad Assessment today!
              </p>
              <div className="actionbtncont">
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
            </div>
          </div>
          <div className="scorecardright">
            <img className="cornerstyle" src={cornerstyle} alt="" />
            <img src={subjectimg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
