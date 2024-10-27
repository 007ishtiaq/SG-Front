import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./Footer.css";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { createOptinEmail } from "../../functions/optinEmail";
import { getRelatedStaticText } from "../../functions/staticText";
import { useFormik } from "formik";
import { optinSchema } from "../../schemas";
import { ReactComponent as Logotexttrans } from "../../images/headersvgs/logotexttrans.svg";
import { ReactComponent as Callsvg } from "../../images/contactUs/calloutlined.svg";
import { ReactComponent as Whatsappthin } from "../../images/social/whatsappthin.svg";
import { ReactComponent as Mailsvg } from "../../images/contactUs/mail.svg";

export default function Footer() {
  const [footertag, setFootertag] = useState([
    {
      _id: "6677bed768337be7bf9c7d0d",
      identity: "footertag",
      serialNum: 1,
      info1:
        "Let us help you yield your true academic potential for foreign education. To configure and discover an apt international enrolment strategy, get in touch!",
      slug: "let-us-help-you-yield-your-true-academic-potential-for-foreign-education.-to-configure-and-discover-an-apt-international-enrolment-strategy-get-in-touch!",
      info2: "",
      info3: "",
      createdAt: "2024-06-23T06:21:11.350Z",
      updatedAt: "2024-06-23T06:21:11.350Z",
      __v: 0,
    },
    {
      _id: "6677c07f68337be7bf9c7d54",
      identity: "footertag",
      serialNum: 2,
      info1:
        "Copyright © 2023 Study Guide International, LLC. All rights reserved.",
      slug: "copyright-(c)-2023-Study-Guide-llc.-all-rights-reserved.",
      info2: "",
      info3: "",
      createdAt: "2024-06-23T06:28:15.070Z",
      updatedAt: "2024-06-23T06:29:00.836Z",
      __v: 0,
    },
  ]);
  const [sociallinks, setSociallinks] = useState([
    {
      _id: "6677c14c68337be7bf9c7da0",
      identity: "footerSocialLink",
      serialNum: 1,
      info1:
        '<svg                     class="fbsvg"                     xmlns="http://www.w3.org/2000/svg"                     viewBox="0 0 320 512"                   >                     <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />                   </svg>',
      slug: 'lesssvg-class"fbsvg"-xmlns"http:www.w3.org2000svg"-viewbox"0-0-320-512"-greater-lesspath-d"m279.14-288l14.22-92.66h-88.91v-60.13c0-25.35-12.42-50.06-52.24-50.06h40.42v6.26s260.43-0-225.36-0c-73.22-0-121.08-44.38-121.08-124.72v70.62h22.89v288h81.39v224h100.17v288z"-greater-lesssvggreater',
      info2: "facebook",
      info3:
        "https://www.facebook.com/profile.php?id=100069348382258&mibextid=ZbWKwL",
      createdAt: "2024-06-23T06:31:40.831Z",
      updatedAt: "2024-06-23T06:31:40.831Z",
      __v: 0,
    },
    {
      _id: "6677c18768337be7bf9c7db6",
      identity: "footerSocialLink",
      serialNum: 2,
      info1:
        '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 256 256" enable-background="new 0 0 256 256" xml:space="preserve"><g><g><path fill="" d="M237.1,18.9C231.1,13,224,10,215.7,10H40.3c-8.3,0-15.4,3-21.4,8.9S10,32,10,40.3v175.5c0,8.3,3,15.4,8.9,21.4S32,246,40.3,246h175.5c8.3,0,15.4-3,21.4-8.9s8.9-13.1,8.9-21.4V40.3C246,32,243,24.9,237.1,18.9z M94.7,95c9.3-9,20.4-13.4,33.4-13.4c13.1,0,24.3,4.5,33.6,13.4s13.9,19.8,13.9,32.5S171,151,161.7,160c-9.3,9-20.5,13.4-33.6,13.4c-13,0-24.2-4.5-33.4-13.4c-9.3-9-13.9-19.8-13.9-32.5C80.8,114.8,85.5,104,94.7,95z M219.3,209.4c0,2.6-0.9,4.9-2.8,6.7c-1.9,1.8-4,2.7-6.6,2.7H45.6c-2.7,0-4.9-0.9-6.7-2.7c-1.8-1.8-2.7-4-2.7-6.7v-99.6h21.7c-2,6.5-3.1,13.2-3.1,20.1c0,19.7,7.2,36.4,21.5,50.3c14.4,13.9,31.6,20.8,51.8,20.8c13.3,0,25.6-3.2,36.9-9.5c11.3-6.4,20.2-15,26.7-25.9c6.5-10.9,9.8-22.8,9.8-35.7c0-7-1-13.7-3.1-20.1h20.8V209.4L219.3,209.4z M219.3,72.2c0,3-1,5.5-3.1,7.5s-4.6,3.1-7.5,3.1h-26.7c-3,0-5.5-1-7.5-3.1s-3.1-4.6-3.1-7.5V46.9c0-2.9,1-5.3,3.1-7.4c2-2.1,4.6-3.2,7.5-3.2h26.7c3,0,5.5,1.1,7.5,3.2c2,2.1,3.1,4.6,3.1,7.4L219.3,72.2L219.3,72.2z"/></g></g></svg>',
      slug: 'lesssvg-xmlns"http:www.w3.org2000svg"-viewbox"0-0-512-512"greater-lesspath-d"m459.37-151.716c.325-4.548.325-9.097.325-13.645-0-138.72-105.583-298.558-298.558-298.558-59.452-0-114.68-17.219-161.137-47.106-8.447.974-16.568-1.299-25.34-1.299-49.055-0-94.213-16.568-130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772-6.498.974-12.995-1.624-19.818-1.624-9.421-0-18.843-1.3-27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969-7.797-30.214-12.67-47.431-13.319-28.264-18.843-46.781-51.005-46.781-87.391-0-19.492-5.197-37.36-14.294-52.954-51.655-63.675-129.3-105.258-216.365-109.807-1.624-7.797-2.599-15.918-2.599-24.04-0-57.828-46.782-104.934-104.934-104.934-30.213-0-57.502-12.67-76.67-33.137-23.715-4.548-46.456-13.32-66.599-25.34-7.798-24.366-24.366-44.833-46.132-57.827-21.117-2.273-41.584-8.122-60.426-16.243-14.292-20.791-32.161-39.308-52.628-54.253z"-greater-lesssvggreater',
      info2: "instagram",
      info3:
        "https://www.instagram.com/stud_yguideinternational?igsh=aHBlYWNiNHlkaW1i",
      createdAt: "2024-06-23T06:32:39.818Z",
      updatedAt: "2024-06-23T06:32:39.818Z",
      __v: 0,
    },
    {
      _id: "6677c12868337be7bf9c7d9c",
      identity: "footerSocialLink",
      serialNum: 3,
      info1:
        '<svg                     class="linkedinsvg"                     xmlns="http://www.w3.org/2000/svg"                     viewBox="0 0 448 512"                   >                     <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />                   </svg>',
      slug: 'lesssvg-class"linkedinsvg"-xmlns"http:www.w3.org2000svg"-viewbox"0-0-448-512"-greater-lesspath-d"m100.28-448h7.4v148.9h92.88zm53.79-108.1c24.09-108.1-0-83.5-0-53.8a53.79-53.79-0-0-1-107.58-0c0-29.7-24.1-54.3-53.79-54.3zm447.9-448h-92.68v302.4c0-34.7-.7-79.2-48.29-79.2-48.29-0-55.69-37.7-55.69-76.7v448h-92.78v148.9h89.08v40.8h1.3c12.4-23.5-42.69-48.3-87.88-48.3-94-0-111.28-61.9-111.28-142.3v448z"-greater-lesssvggreater',
      info2: "linkedin",
      info3:
        "https://www.linkedin.com/in/study-guide-05a10b318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      createdAt: "2024-06-23T06:31:04.925Z",
      updatedAt: "2024-06-23T06:31:04.925Z",
      __v: 0,
    },
    {
      _id: "6677c1ac68337be7bf9c7dba",
      identity: "footerSocialLink",
      serialNum: 4,
      info1:
        '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 256 256" enable-background="new 0 0 256 256" xml:space="preserve"><g><g><path fill="" d="M130.1,10c-64,0-115.9,51.5-115.9,115c0,21.7,6.1,42,16.6,59.4L10,246l64.2-20.4c16.6,9.1,35.7,14.3,56,14.3c64,0,115.9-51.5,115.9-115C246,61.5,194.1,10,130.1,10L130.1,10z M187.7,168.6c-2.7,6.8-15.1,12.9-20.5,13.2c-5.4,0.3-5.6,4.2-35.2-8.6C102.4,160.3,84.6,129,83.2,127c-1.4-2-11.5-16.4-10.9-30.8c0.6-14.4,8.5-21.3,11.3-24.1c2.8-2.8,6-3.3,8-3.4c2.3,0,3.9-0.1,5.6,0c1.7,0.1,4.3-0.4,6.6,5.6c2.2,6,7.6,20.6,8.3,22.1c0.7,1.5,1.1,3.2,0,5.2c-1.1,1.9-1.6,3.1-3.1,4.8c-1.5,1.7-3.3,3.7-4.6,5c-1.5,1.4-3.2,2.9-1.5,5.9c1.6,3,7.2,12.8,15.7,20.9c10.9,10.4,20.3,13.9,23.2,15.4c2.9,1.6,4.6,1.4,6.4-0.5c1.8-1.9,7.7-8.3,9.8-11.2c2.1-2.9,4-2.3,6.7-1.2c2.7,1.1,16.9,8.7,19.8,10.3c2.9,1.6,4.8,2.4,5.5,3.6C190.7,156,190.5,161.9,187.7,168.6L187.7,168.6z"/></g></g></svg>',
      slug: 'lesssvg-xmlns"http:www.w3.org2000svg"-viewbox"0-0-576-512"greater-lesspath-d"m549.655-124.083c-6.281-23.65-24.787-42.276-48.284-48.597c458.781-64-288-64-288-64s117.22-64-74.629-75.486c-23.497-6.322-42.003-24.947-48.284-48.597-11.412-42.867-11.412-132.305-11.412-132.305s0-89.438-11.412-132.305c6.281-23.65-24.787-41.5-48.284-47.821c117.22-448-288-448-288-448s170.78-0-213.371-11.486c23.497-6.321-42.003-24.171-48.284-47.821-11.412-42.867-11.412-132.305-11.412-132.305s0-89.438-11.412-132.305zm-317.51-213.508v175.185l142.739-81.205-142.739-81.201z"-greater-lesssvggreater',
      info2: "Whatsapp",
      info3: "https://api.whatsapp.com/send?phone=00923455005810",
      createdAt: "2024-06-23T06:33:16.234Z",
      updatedAt: "2024-06-23T06:33:16.234Z",
      __v: 0,
    },
  ]);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   getRelatedStaticText("footertag").then((t) => {
  //     setFootertag(t.data);
  //     console.log("footertag", t.data);
  //   });
  //   getRelatedStaticText("footerSocialLink").then((res) => {
  //     console.log("footerSocialLink", res.data);
  //     setSociallinks(res.data);
  //   });
  // }, []);

  const htmlToRender = (htmlString) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
  };

  // ---------formik usage--------

  const initialValues = {
    email: "",
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
    validationSchema: optinSchema,
    onSubmit: async (values, action) => {
      if (navigator.onLine) {
        toast.promise(createOptinEmail(values.email), {
          loading: "Subscribing to newsletter...",
          success: (res) => {
            action.resetForm();
            return "Successfully Subscribed Newsletter";
          },
          error: (err) => {
            console.log(err);
            return err.response.data.err;
          },
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
    <footer>
      <div class="optinouter">
        <div class="newsletter">
          <form class="optin-form" onSubmit={handleSubmit}>
            <h3>Get Free Counselling via Email!</h3>
            <div className="optinformcont">
              <div class="footerrow">
                <input
                  name="email"
                  id="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="off"
                  class="optin-input"
                  placeholder="Your Email"
                />
                <button type="submit" class="optinbtn">
                  Submit
                </button>
              </div>
              <div className="errcont">
                {errors.email && touched.email ? (
                  <p className="error-message">{errors.email}</p>
                ) : null}
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="footerouter">
        <div class="footercol">
          <div class="center-footer footerrow">
            <div class="footer-logo-side">
              <div class="footer-logo">
                <Logotexttrans />
                <div class="footerdemotxt">Study Guide International</div>
              </div>
              <div class="footer-site-desc">
                <p>{footertag && footertag.length > 0 && footertag[0].info1}</p>
              </div>
              <div class="footer-social-icon">
                {sociallinks &&
                  sociallinks.length > 0 &&
                  sociallinks.map((l, i) => (
                    <a
                      href={l.info3}
                      key={i}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="socialhover">
                        {htmlToRender(l.info1)}
                        <span> {l.info2} </span>
                      </div>
                    </a>
                  ))}
              </div>
            </div>

            <div class="footer-colum">
              <div class="col-heading">Let Us Help You</div>
              <div class="col-ul">
                <ul>
                  <li>
                    <Link to="/aboutus" class="col-li">
                      About us
                    </Link>
                  </li>

                  <li>
                    <Link to="/Stories" class="col-li">
                      Success Stories
                    </Link>
                  </li>
                  <li>
                    <Link to="/ContactUs" class="col-li">
                      Contact us
                    </Link>
                  </li>
                  <li>
                    <Link to="/Destinations/sweden" class="col-li">
                      Sweden
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="footer-colum">
              <div class="col-heading">Destinations</div>
              <div class="col-ul">
                <ul>
                  <li>
                    <Link to="/Destinations/United-Kingdom" class="col-li">
                      United Kingdom
                    </Link>
                  </li>
                  <li>
                    <Link to="/Destinations/Australia" class="col-li">
                      Australia
                    </Link>
                  </li>
                  <li>
                    <Link to="/Destinations/France" class="col-li">
                      France
                    </Link>
                  </li>
                  <li>
                    <Link to="/Destinations/Denmark" class="col-li">
                      Denmark
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div class="footer-colum">
              <div class="col-heading">Study Guide International</div>
              <div class="col-ul">
                <ul>
                  <li>
                    <a
                      href={`https://api.whatsapp.com/send?phone=00923455005810`}
                      className="helperlinkcont"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="helperlinkcont">
                        <Callsvg /> <Whatsappthin className="wpthinsvg" />
                        <p className="col-li">+92 322 5005810</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`https://api.whatsapp.com/send?phone=00923210378899`}
                      className="helperlinkcont"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="helperlinkcont">
                        <Callsvg /> <Whatsappthin className="wpthinsvg" />
                        <p className="col-li">+92 321 0378899</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`https://api.whatsapp.com/send?phone=00923008478889`}
                      className="helperlinkcont"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="helperlinkcont">
                        <Callsvg /> <Whatsappthin className="wpthinsvg" />
                        <p className="col-li">+92 300 8478889</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <Link to="/CookiePolicy" class="col-li">
                      <Mailsvg className="mailsvgcont" />
                      Info@Studyguideint.com
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="below-footer">
            <div class="copyright">
              {footertag &&
                footertag.length > 0 &&
                footertag[1] &&
                footertag[1].info1}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
