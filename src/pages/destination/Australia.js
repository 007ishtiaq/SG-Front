import React, { useState, useEffect } from "react";
import ausralia from "../../images/destination/australia/australia.webp";
import lecture from "../../images/destination/sweden/lecture.webp";
import programs from "../../images/destination/sweden/programs.webp";
// import uni1 from "../../images/destination/sweden/unis/uni1.png";
// import uni2 from "../../images/destination/sweden/unis/uni2.png";
// import uni3 from "../../images/destination/sweden/unis/uni3.png";
// import uni4 from "../../images/destination/sweden/unis/uni4.png";
// import uni5 from "../../images/destination/sweden/unis/uni5.png";
// import uni6 from "../../images/destination/sweden/unis/uni6.png";
// import uni7 from "../../images/destination/sweden/unis/uni7.png";
// import uni8 from "../../images/destination/sweden/unis/uni8.png";
// import uni9 from "../../images/destination/sweden/unis/uni9.png";
// import uni10 from "../../images/destination/sweden/unis/uni10.png";
// import { getRelatedStaticText } from "../../functions/staticText";
import flag from "../../images/destination/australia/flag.jpg";
import "./Destination.css";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

export default function Destination() {
  const [loading, setLoading] = useState(false);
  const [alldestinations, setAlldestinations] = useState([]);
  const [imageLoaded, setImageLoaded] = useState(false);

  // useEffect(() => {
  //   getRelatedStaticText("destinations").then((res) => {
  //     setAlldestinations(res.data);
  //     setLoading(false);
  //   });
  // }, []);

  return (
    <div>
      <div className="centercont">
        <div class="cardcontainer">
          <div class="insidecont">
            <div class="contentcont">
              <div class="productsarea">
                {loading ? (
                  <div className="Skeletonsize">
                    <Skeleton className="Skeletonsize" count={1} />
                  </div>
                ) : (
                  <Link to="#">
                    <div className="topdestcont">
                      <img
                        className="bigbannerimg"
                        src={ausralia}
                        alt={"123123"}
                        onLoad={() => setImageLoaded(true)}
                        style={{ display: imageLoaded ? "block" : "none" }}
                      />
                      <div className="destname">
                        <span>
                          <img src={flag} alt="" />
                        </span>{" "}
                        Australia
                      </div>
                    </div>
                    {!imageLoaded && (
                      <Skeleton
                        height={252}
                        className="Skeletonsize"
                        count={1}
                        style={{
                          display: imageLoaded ? "none" : "inline-block",
                        }}
                      />
                    )}
                  </Link>
                )}
                {/* <div className="uniscont">
                  <div className="uniself">
                    <img className="uniimg" src={uni1} alt="" />
                  </div>
                  <div className="uniself">
                    <img className="uniimg" src={uni2} alt="" />
                  </div>
                  <div className="uniself">
                    <img className="uniimg" src={uni3} alt="" />
                  </div>
                  <div className="uniself">
                    <img className="uniimg" src={uni4} alt="" />
                  </div>
                  <div className="uniself">
                    <img className="uniimg" src={uni5} alt="" />
                  </div>
                  <div className="uniself">
                    <img className="uniimg" src={uni6} alt="" />
                  </div>
                  <div className="uniself">
                    <img className="uniimg" src={uni7} alt="" />
                  </div>
                  <div className="uniself">
                    <img className="uniimg" src={uni8} alt="" />
                  </div>
                  <div className="uniself">
                    <img className="uniimg" src={uni9} alt="" />
                  </div>
                  <div className="uniself">
                    <img className="uniimg" src={uni10} alt="" />
                  </div>
                </div> */}
                <div className="destcontentcont">
                  <div className="destmainheading">
                    Study in Australia for Pakistani Students
                  </div>
                  <div className="destsubdata">
                    Embarking on an educational journey in Australia promises a
                    rich and transformative experience, blending academic rigor
                    with cultural immersion and breathtaking natural beauty.
                    Esteemed for its top-tier universities and colleges,
                    Australia offers a diverse array of programs across numerous
                    disciplines, from business and engineering to the arts and
                    sciences. Outside the academic realm, students can immerse
                    themselves in Australia’s awe-inspiring landscapes, dynamic
                    cities, and distinctive wildlife, nurturing a profound
                    appreciation for the nation’s cultural heritage and outdoor
                    lifestyle. Known for its safety, innovation, and superior
                    education, studying in Australia not only imparts valuable
                    skills and knowledge but also expands perspectives, fosters
                    cross-cultural interactions, and creates lasting memories.
                    Australia's exceptional education system draws a significant
                    number of international students each year. Here’s a
                    snapshot of the educational landscape for international
                    students in Australia:
                  </div>
                  <div className="destrow destrowone">
                    <div className="destleft">
                      <div className="destheading">
                        Lectures and examinations
                      </div>
                      <div className="destsubdata">
                        *English Language Courses* Australia is a favored
                        destination for those looking to enhance their English
                        language proficiency. Many international students begin
                        their studies with English language courses to prepare
                        for further academic pursuits. *Vocational Education and
                        Training (VET)* VET institutions specialize in practical
                        skills and industry-specific training, offering
                        certificate, diploma, and advanced diploma programs.
                        These courses are particularly popular among
                        international students interested in fields such as
                        hospitality, tourism, trades, and healthcare. *Higher
                        Education* Australia boasts several universities that
                        rank among the best globally. International students can
                        pursue undergraduate and postgraduate degrees across a
                        wide spectrum of fields, including arts, science,
                        engineering, business, and law. The academic year
                        typically begins in February, with some universities
                        offering additional intakes in July. *Pathways to Higher
                        Education* Various pathways facilitate international
                        students' entry into higher education in Australia.
                        These include foundation studies, English language
                        courses leading to further academic qualifications, and
                        diploma programs from universities and colleges.
                      </div>
                    </div>
                    <div className="destright">
                      <img
                        className="bigbannerimg destsideimg"
                        src={lecture}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="destrow destrowtwo">
                    <div className="destrightwide">
                      <img
                        className="bigbannerimg destsideimg"
                        src={programs}
                        alt=""
                      />
                    </div>
                    <div className="destleftnerrow">
                      <div className="destheading">
                        Student Visa Requirements
                      </div>
                      <div className="destsubdata">
                        International students need to secure a student visa to
                        study in Australia. The application process necessitates
                        proof of enrollment in a registered course, sufficient
                        funds for living expenses, and health insurance. Visa
                        regulations may differ based on the course duration and
                        type. <br />
                        <span>Work Rights</span> International students in
                        Australia can work a limited number of hours per week
                        during the academic year and full-time during breaks,
                        providing financial support and work experience. <br />
                        <span>Support Services</span>
                        Australian institutions offer comprehensive support
                        services for international students, including academic
                        assistance, counseling, accommodation help, and cultural
                        integration programs. Additionally, numerous student
                        organizations and clubs provide opportunities for social
                        engagement and extracurricular activities. In summary,
                        Australia offers a welcoming and diverse environment for
                        international students, marked by high-quality
                        education, abundant personal and professional growth
                        opportunities, and a vibrant multicultural community.
                      </div>
                    </div>
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
