import React from "react";
import "./Ourteam.css";
import person1 from "../../images/team/1.webp";
import person2 from "../../images/team/2.webp";
import person3 from "../../images/team/3.webp";
import person4 from "../../images/team/4.webp";
import person6 from "../../images/team/6.webp";
import person7 from "../../images/team/7.png";
import visionimg from "../../images/vision/visionimg.webp";

export default function Ourteam() {
  return (
    <div className="cardcontainer reviewsbox">
      <div className="insidecont contentcont ">
        <div className="mainteamcont">
          <div class="aboutvisionimgcont">
            <div className="visionimgside">
              <img src={visionimg} alt="" />
            </div>
            <div className="visiontextside">
              <p>
                Empowering learners worldwide with accessible, comprehensive,
                and innovative study resources to foster academic excellence and
                lifelong learning.
              </p>
            </div>
          </div>
          <h1 className="mainteamheading"> Our Team</h1>
          <p>
            Our team, driven by passion and united by purpose, brings together
            diverse expertise to transform education. We are dedicated to
            creating accessible, innovative study resources that empower
            learners worldwide.
          </p>
          <div className="teammaincont">
            <div className="teammainrow teammainrowone">
              <div className="teamcol teamcolmain">
                <div class="team-col">
                  <img src={person1} alt="" />
                </div>
                <div className="teamdetails">
                  <p className="teamdesi">Mentor</p>
                  <p className="teamname">Mr Siddique Minhas</p>
                </div>
              </div>
              <div className="teamstatement">
                <span>Our Mentor:</span>
                <p>
                  At Study Guide International, our success is built upon the
                  extraordinary guidance of our esteemed mentor, Mr. Siddique
                  Minhas. His unparalleled expertise and unwavering commitment
                  have been the cornerstone of our mission, helping countless
                  students realize their dreams of studying abroad. We are
                  nothing without his visionary leadership. Mr. Minhas's
                  mentorship is the driving force behind our meticulous
                  approach, ensuring each student receives the personalized
                  attention and expert advice necessary to navigate the
                  complexities of international education with confidence.
                </p>
              </div>
            </div>
            <div className="teammainrow teammainrowtwo">
              <div className="teamcol teamcolmain">
                <div class="team-col">
                  <img src={person3} alt="" />
                </div>
                <div className="teamdetails">
                  <p className="teamdesi">CEO</p>
                  <p className="teamname">Mr Hassan Zaman Khan</p>
                </div>
              </div>
              <div className="teamstatement">
                <span>CEO's Message:</span>
                <p>
                  Starting the journey to study abroad is more than filling out
                  an application. At Study Guide International, we know each
                  student has unique needs. Whether aiming to study English in
                  the UK or Chemical Engineering in the US, we are here to guide
                  you. From proficiency tests to crafting strong applications,
                  we streamline the entire process. Our commitment ensures every
                  detail is meticulously managed for a compelling application.
                  As the CEO of Study Guide International, I am dedicated to
                  your success. Let us help turn your dreams into reality.
                </p>
              </div>
            </div>
          </div>
          <div class="teamrow">
            <div className="teamcol">
              <div class="team-col">
                <img src={person2} alt="" />
              </div>
              <div className="teamdetails">
                <p className="teamdesi">General Manager</p>
                <p className="teamname">Mr Waseem Ur Rehman</p>
              </div>
            </div>
            <div className="teamcol">
              <div class="team-col">
                <img src={person4} alt="" />
              </div>
              <div className="teamdetails">
                <p className="teamdesi"> </p>
                <p className="teamname">Mr Abdul Hadi Khan</p>
              </div>
            </div>
          </div>
          <div class="teamrow">
            <div className="teamcol">
              <div class="team-col">
                <img src={person7} alt="" />
              </div>
              <div className="teamdetails">
                <p className="teamdesi">Student Counsellor</p>
                <p className="teamname">Ms Tanzeel Khan</p>
              </div>
            </div>
            <div className="teamcol">
              <div class="team-col">
                <img src={person6} alt="" />
              </div>
              <div className="teamdetails">
                <p className="teamdesi">Student Counsellor</p>
                <p className="teamname">Ms Muqdas Shafat</p>
              </div>
            </div>
            <div className="teamcol">
              <div class="team-col">
                <img src={person7} alt="" />
              </div>
              <div className="teamdetails">
                <p className="teamdesi">Office Assistant</p>
                <p className="teamname">Mr Faizan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
