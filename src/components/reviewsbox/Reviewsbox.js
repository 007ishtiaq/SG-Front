import React from "react";
import "./Reviewsbox.css";
import "../productPage/productreviews.css";
import "../productPage/ProductInfo.css";
import img1 from "../../images/reviews/1.jpg";
import img2 from "../../images/reviews/2.jpg";
import img3 from "../../images/reviews/3.jpg";
import img4 from "../../images/reviews/4.jpg";
import { ReactComponent as Verified } from "../../images/productpage/verified.svg";
import Mystars from "../ratingstars/Mystars";

export default function Reviewsbox() {
  return (
    <div className="cardcontainer reviewsbox">
      <div className="insidecont contentcont ">
        <div className="mainreviewcont">
          <h1 className="mainreviewheading"> Customers Reviews</h1>
          <div className="ratingcont">
            <span className="reviewsscore">4.8</span> Out of 5 based on 4562
            reviews
          </div>
          <div className="mainreviewscont">
            <div className="reviewself">
              <div class="productreviewself thisreview">
                <div class="cnamecont thiscnamecont">
                  <div class="cimg">
                    <img src={img1} alt="" />
                  </div>
                  <div class="cname">
                    <p>Asad Ali</p>
                  </div>
                </div>
                <div class="creviewcont thiscreviewcont">
                  <div class="givenstars">
                    <div class="prostarscont thisprostarscont">
                      <Mystars
                        rating={5}
                        containerclass={"prostarsspan"}
                        StarFullclass={"prostars thisprostars"}
                        StarHalfclass={"prostars thisprostars star-half"}
                        StarEmptyclass={"prostars thisprostars star-empty"}
                      ></Mystars>
                      <span>{5}</span>
                    </div>
                  </div>
                  <div class="reviewposttime">
                    <span>Reviewed on 16-Oct-2024</span>
                  </div>

                  <div class="reviewtxt thisreviewtxt">
                    Study Guide International made my visa application process
                    stress-free. Their team was always available to assist me,
                    and they provided clear instructions every step of the way.
                    I highly recommend their services to anyone looking to study
                    abroad!
                  </div>

                  <div class="varifiedcont thisvarifiedcont">
                    <Verified></Verified>
                    <div class="varifiedtxt">Verified</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="reviewself">
              <div class="productreviewself thisreview">
                <div class="cnamecont thiscnamecont">
                  <div class="cimg">
                    <img src={img2} alt="" />
                  </div>
                  <div class="cname">
                    <p>Kamran Ahmad</p>
                  </div>
                </div>
                <div class="creviewcont thiscreviewcont">
                  <div class="givenstars">
                    <div class="prostarscont thisprostarscont">
                      <Mystars
                        rating={5}
                        containerclass={"prostarsspan"}
                        StarFullclass={"prostars thisprostars"}
                        StarHalfclass={"prostars thisprostars star-half"}
                        StarEmptyclass={"prostars thisprostars star-empty"}
                      ></Mystars>
                      <span>{5}</span>
                    </div>
                  </div>
                  <div class="reviewposttime">
                    <span>Reviewed on 27-Sep-2024</span>
                  </div>

                  <div class="reviewtxt thisreviewtxt">
                    Navigating the visa process can be daunting, but Study Guide
                    International made it seem easy. Their attention to detail
                    and personalized approach ensured that my application was
                    flawless. I received my visa without any issues and am now
                    studying in Canada!
                  </div>

                  <div class="varifiedcont thisvarifiedcont">
                    <Verified></Verified>
                    <div class="varifiedtxt">Verified</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="reviewself">
              <div class="productreviewself thisreview">
                <div class="cnamecont thiscnamecont">
                  <div class="cimg">
                    <img src={img3} alt="" />
                  </div>
                  <div class="cname">
                    <p>Asif Khan</p>
                  </div>
                </div>
                <div class="creviewcont thiscreviewcont">
                  <div class="givenstars">
                    <div class="prostarscont thisprostarscont">
                      <Mystars
                        rating={4}
                        containerclass={"prostarsspan"}
                        StarFullclass={"prostars thisprostars"}
                        StarHalfclass={"prostars thisprostars star-half"}
                        StarEmptyclass={"prostars thisprostars star-empty"}
                      ></Mystars>
                      <span>{4}</span>
                    </div>
                  </div>
                  <div class="reviewposttime">
                    <span>Reviewed on 19-Mar-2024</span>
                  </div>

                  <div class="reviewtxt thisreviewtxt">
                    Choosing Study Guide International was the best decision I
                    made for my study abroad plans. Their team was
                    knowledgeable, supportive, and always available to answer my
                    questions. They handled my visa application perfectly, and I
                    received my visa in record time.
                  </div>

                  <div class="varifiedcont thisvarifiedcont">
                    <Verified></Verified>
                    <div class="varifiedtxt">Verified</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="reviewself">
              <div class="productreviewself thisreview">
                <div class="cnamecont thiscnamecont">
                  <div class="cimg">
                    <img src={img4} alt="" />
                  </div>
                  <div class="cname">
                    <p>Sohail Ahmad</p>
                  </div>
                </div>
                <div class="creviewcont thiscreviewcont">
                  <div class="givenstars">
                    <div class="prostarscont thisprostarscont">
                      <Mystars
                        rating={4}
                        containerclass={"prostarsspan"}
                        StarFullclass={"prostars thisprostars"}
                        StarHalfclass={"prostars thisprostars star-half"}
                        StarEmptyclass={"prostars thisprostars star-empty"}
                      ></Mystars>
                      <span>{4}</span>
                    </div>
                  </div>
                  <div class="reviewposttime">
                    <span>Reviewed on 26-Aug-2024</span>
                  </div>

                  <div class="reviewtxt thisreviewtxt">
                    I am incredibly grateful to Study Guide International for
                    their outstanding service. They guided me through the
                    complex visa process with ease and professionalism. Their
                    support was instrumental in securing my visa, and I highly
                    recommend.
                  </div>

                  <div class="varifiedcont thisvarifiedcont">
                    <Verified></Verified>
                    <div class="varifiedtxt">Verified</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
