import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./contactus.css";
import Contactimg from "../../images/contactUs/contactimg.webp";
import { ReactComponent as Callsvg } from "../../images/contactUs/calloutlined.svg";
import { ReactComponent as Mailsvg } from "../../images/contactUs/mail.svg";
import { ReactComponent as Locationsvg } from "../../images/contactUs/location.svg";
import { ReactComponent as Facebooksvg } from "../../images/contactUs/Facebookoutlined.svg";
import ContactAttachment from "../../components/forms/ContactAttachment";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { submitContact } from "../../functions/contact";
import { getRelatedStaticText } from "../../functions/staticText";
import { useFormik } from "formik";
import { ContactUsSchema } from "../../schemas";
import { LoadingOutlined } from "@ant-design/icons";

export default function ContactUs() {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const [staticTexts, setStaticTexts] = useState([
    {
      _id: "6567f9bca815956b1f8eaee6",
      identity: "contactpageinfo",
      serialNum: 1,
      info1: "+92 322 5005810, +92 321 0378899, +92 300 8478889",
      slug: "+92 322 5005810, +92 321 0378899, +92 300 8478889",
      info2: "",
      info3: "",
      createdAt: "2023-11-30T02:55:56.539Z",
      updatedAt: "2024-05-26T08:03:27.922Z",
      __v: 0,
    },
    {
      _id: "6567f9dba815956b1f8eaeea",
      identity: "contactpageinfo",
      serialNum: 2,
      info1: "Info@Studyguideint.com",
      slug: "Info@Studyguideint.com",
      info2: "",
      info3: "",
      createdAt: "2023-11-30T02:56:27.008Z",
      updatedAt: "2023-11-30T02:56:27.008Z",
      __v: 0,
    },
    {
      _id: "6567f9eca815956b1f8eaeee",
      identity: "contactpageinfo",
      serialNum: 3,
      info1: "78-A, Garden Block, Garden Town, Lahore.",
      slug: "abuja-uk",
      info2: "",
      info3: "",
      createdAt: "2023-11-30T02:56:44.709Z",
      updatedAt: "2023-11-30T02:56:44.709Z",
      __v: 0,
    },
    {
      _id: "6567fa01a815956b1f8eaef2",
      identity: "contactpageinfo",
      serialNum: 4,
      info1: "@Study-guide-International",
      slug: "@Study-guide-International ",
      info2: "",
      info3: "",
      createdAt: "2023-11-30T02:57:05.646Z",
      updatedAt: "2023-11-30T02:57:05.646Z",
      __v: 0,
    },
  ]);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   getRelatedStaticText("contactpageinfo").then((t) => console.log(t.data));
  // }, []);

  const htmlToRender = (htmlString) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
  };

  // ---------formik usage--------

  const initialValues = {
    fullname: "",
    subject: "",
    email: "",
    text: "",
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: ContactUsSchema,
    onSubmit: async (values, action) => {
      if (navigator.onLine) {
        setLoading(true);
        // console.log(values);
        submitContact({ contactForm: values, image })
          .then((res) => {
            setLoading(false);
            action.resetForm();
            setImage("");
            // Reset the value of the file input
            const fileInput = document.getElementById("contact-attachment");
            if (fileInput) {
              fileInput.value = "";
            }
            toast.success(`Form Submitted Successfully`);
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
            if (err.response.status === 400) toast.error(err.response.data);
          });
      } else {
        dispatch({
          type: "SET_NETMODAL_VISIBLE",
          payload: true,
        });
      }
    },
  });

  return (
    <main>
      <div class="contactmaincont">
        <div class="contacttopcont">
          <div class="contactheadcont">
            <p>Need Help ?</p>
          </div>
          <div class="contactsubcont">
            <div class="contectcont">
              <div class="contectcontleft">
                <div class="contectformcont">
                  <div>
                    <div class="ctaformheadline">
                      <p>
                        For any kind of questions, queries or suggestions feel
                        free to contact, we will be sure to get back to you as
                        soon as possible, We'd love to hear from you.
                      </p>
                    </div>
                    <form onSubmit={handleSubmit} class="ctaformfields">
                      <div>
                        <label for="full-name">Full Name:</label>
                        <input
                          id="full-name"
                          type="text"
                          placeholder=""
                          name="fullname"
                          value={values.fullname}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          autoComplete="off"
                        />
                        {errors.fullname && touched.fullname ? (
                          <p className="errorstate">{errors.fullname}</p>
                        ) : null}
                      </div>
                      <div>
                        <label for="subject">Subject:</label>
                        <input
                          id="subject"
                          type="text"
                          name="subject"
                          value={values.subject}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder=""
                          autoComplete="off"
                        />
                        {errors.subject && touched.subject ? (
                          <p className="errorstate">{errors.subject}</p>
                        ) : null}
                      </div>
                      <div>
                        <label for="email">Email address:</label>
                        <input
                          name="email"
                          id="email"
                          type="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder=""
                          autoComplete="off"
                        />
                        {errors.email && touched.email ? (
                          <p className="errorstate">{errors.email}</p>
                        ) : null}
                      </div>
                      <div>
                        <label for="textmassage">Your Message:</label>
                        <textarea
                          id="textmassage"
                          type="text"
                          placeholder=""
                          cols="30"
                          rows="7"
                          name="text"
                          value={values.text}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          autoComplete="off"
                        ></textarea>
                        {errors.text && touched.text ? (
                          <p className="errorstate">{errors.text}</p>
                        ) : null}

                        <ContactAttachment
                          image={image}
                          setImage={setImage}
                          btnclasses={"btnattach"}
                        />
                        <div class="ctabtncont">
                          <button type="submit" class="mybtn btnprimary">
                            <span className="contactbtntxt">
                              {loading ? (
                                <div className="contactbtnload">
                                  <LoadingOutlined />
                                </div>
                              ) : (
                                "Submit"
                              )}
                            </span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="contectcontright">
                <div class="contectinfocont">
                  <div class="contectinfoabove">
                    <img src={Contactimg} alt="" />
                  </div>
                  <div className="contectinfohead">
                    <h4>Our Contact Information</h4>
                    <p>
                      Fill the form or contact us via other channels listed
                      below
                    </p>
                  </div>
                  <div class="contectinfobelow">
                    <div class="contectinfosub">
                      <div class="infosubline">
                        <span>
                          <Callsvg></Callsvg>
                        </span>
                        <p>
                          {staticTexts &&
                            staticTexts.length > 0 &&
                            staticTexts[0].info1}
                        </p>
                      </div>
                      <div class="infosubline">
                        <span>
                          <Mailsvg></Mailsvg>
                        </span>
                        <p>
                          {staticTexts &&
                            staticTexts.length > 0 &&
                            staticTexts[1].info1}
                        </p>
                      </div>
                      <div class="infosubline">
                        <span>
                          <Locationsvg></Locationsvg>
                        </span>
                        <p>
                          {staticTexts &&
                            staticTexts.length > 0 &&
                            staticTexts[2].info1}
                        </p>
                      </div>
                      <div class="infosubline">
                        <span>
                          <Facebooksvg></Facebooksvg>
                        </span>
                        <p>
                          {staticTexts &&
                            staticTexts.length > 0 &&
                            staticTexts[3].info1}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
