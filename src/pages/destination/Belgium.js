import React, { useState, useEffect } from "react";
import belgium from "../../images/destination/belgium/belgium.webp";
import flag from "../../images/destination/belgium/flag.webp";
// import { getRelatedStaticText } from "../../functions/staticText";
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
                        src={belgium}
                        alt={"123123"}
                        onLoad={() => setImageLoaded(true)}
                        style={{ display: imageLoaded ? "block" : "none" }}
                      />
                      <div className="destname">
                        {" "}
                        <span>
                          <img src={flag} alt="" />
                        </span>{" "}
                        Belgium
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
                    Study in Belgium for Pakistani Students
                  </div>
                  <div className="destsubdata">
                    Studying in Belgium provides a dynamic academic and cultural
                    journey. Recognized for its top-tier educational
                    institutions, Belgium hosts a diverse array of universities
                    and colleges, many offering programs in English, catering to
                    global students. Whether you're captivated by Brussels'
                    historical avenues, Leuven's vibrant student atmosphere, or
                    Ghent's picturesque allure, Belgium's cities serve as ideal
                    settings for academic pursuits. Beyond classrooms, Belgium's
                    central European position facilitates exploration of
                    neighboring nations, enriching experiences with diverse
                    cultures and landscapes. Indulge in Belgian delicacies like
                    chocolates and waffles, and immerse yourself in the nation's
                    celebrated art and architecture, ensuring an unforgettable
                    educational adventure. Education in Belgium extends a
                    welcoming environment for international students, fostering
                    both academic and personal growth. Accessible through
                    Flemish and French-speaking systems, higher education offers
                    a variety of English-taught master's and doctoral programs.
                    Undergraduates typically demonstrate proficiency in Dutch or
                    French, though preparatory language courses support
                    non-native speakers. Graduate studies feature English
                    instruction across disciplines such as business,
                    engineering, humanities, and sciences, attracting a global
                    student body for cross-cultural exchange. Belgium offers
                    scholarships and financial aid, easing the financial burden,
                    alongside tailored support services like orientation,
                    language assistance, and cultural integration. Located
                    centrally in Europe, Belgium facilitates travel and
                    exploration, enabling students to immerse in the continent's
                    cultural richness and varied landscapes. Belgium's education
                    system integrates academic excellence, cultural diversity,
                    and comprehensive support, appealing to seekers of
                    transformative educational experiences.
                  </div>
                  {/* <div className="destrow">
                    <div className="destleft">
                      <div className="destheading">
                        Lectures and examinations
                      </div>
                      <div className="destsubdata">
                        Courses usually include various types of meetings,
                        including lectures, seminars and laboratory sessions
                        with varying group sizes; seminar groups can be as small
                        as a few students whilst lectures can be up to a few
                        hundred. The aim is to develop critical thinking and
                        collaborative skills, and students are expected to be
                        active participants in all forms of meetings. Required
                        reading and independent work is usually extensive,
                        regardless of your field of study, and students are
                        expected to come well-prepared to class. Examinations
                        usually take the form of written or oral tests,
                        laboratory work, group work or special projects. Most
                        programmes conclude with a degree thesis or project.
                      </div>
                    </div>
                    <div className="destright">
                      <img
                        className="bigbannerimg destsideimg"
                        src={lecture}
                        alt=""
                      />
                    </div>
                  </div> */}
                  {/* <div className="destrow">
                    <div className="destrightwide">
                      <img
                        className="bigbannerimg destsideimg"
                        src={programs}
                        alt=""
                      />
                    </div>
                    <div className="destleftnerrow">
                      <div className="destheading">
                        Degree programmes in Sweden
                      </div>
                      <div className="destsubdata">
                        Swedish universities offer degree programmes according
                        to the European standard. This includes bachelor’s,
                        master’s and PhD programmes.
                        <br />
                        <span> Bachelor’s programmes </span>, also known as
                        undergraduate programmes, typically take place after the
                        completion of upper secondary school and are usually
                        three years long (180 ECTS credits). <br />
                        <span>Master’s programmes</span>, also known as graduate
                        programmes, build upon the knowledge developed during
                        bachelor’s-level studies and can be one or two years
                        long (60 or 120 ECTS credits). <br />
                        <span>PhD programmes</span>, also known as doctoral
                        programmes, are research degrees involving several years
                        of work toward a dissertation. The duration and setup of
                        PhD programmes in Sweden vary between universities; see
                        PhD programmes for more details.
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
