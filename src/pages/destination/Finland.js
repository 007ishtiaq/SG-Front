import React, { useState, useEffect } from "react";
import finland from "../../images/destination/finland/finland.webp";
import flag from "../../images/destination/finland/flag.webp";
// import { getRelatedStaticText } from "../../functions/staticText";
import "./Destination.css";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

export default function Finland() {
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
                        src={finland}
                        alt={"123123"}
                        onLoad={() => setImageLoaded(true)}
                        style={{ display: imageLoaded ? "block" : "none" }}
                      />
                      <div className="destname">
                        <span>
                          <img src={flag} alt="" />
                        </span>{" "}
                        Finland
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
                    Study in Finland for Pakistani Students
                  </div>
                  <div className="destsubdata">
                    Studying in Finland presents a distinctive fusion of
                    academic distinction, ingenuity, and natural allure.
                    Renowned globally for its stellar education system, Finland
                    consistently ranks among the top in international
                    educational standings. Finnish institutions like the
                    University of Helsinki and Aalto University offer a broad
                    spectrum of English-taught programs, drawing students from
                    every corner of the globe. Beyond academia, Finland’s
                    unspoiled landscapes—abounding with countless lakes, dense
                    forests, and the enchanting Northern Lights—provide an
                    inspiring canvas for personal growth and exploration.
                    Finland's educational philosophy underscores creativity,
                    critical thinking, and collaborative learning, fostering a
                    dynamic educational milieu. With a strong emphasis on
                    research and innovation, students engage in pioneering
                    projects alongside leading experts in their fields. Whether
                    immersing oneself in Finland’s rich cultural tapestry,
                    savoring Helsinki’s vibrant urban life, or venturing into
                    the wilds of Lapland, studying in Finland guarantees a
                    transformative journey marked by academic excellence and
                    indelible experiences. Finland's Education System Finland
                    extends a warm welcome to international students through its
                    inclusive, high-quality education system distinguished by
                    innovation and student-centered pedagogy. Universities and
                    universities of applied sciences offer a wide array of
                    degree programs, many conducted in English, tailored to meet
                    international students' needs. At the undergraduate level,
                    international students can pursue bachelor’s degrees across
                    diverse disciplines such as business, engineering, natural
                    sciences, arts, and humanities. Finnish universities
                    emphasize hands-on learning, integrating practical projects,
                    internships, and industry collaborations into their
                    curricula. For graduate studies, Finland provides a plethora
                    of master’s programs designed to deepen students’ expertise
                    in their chosen fields. These programs frequently
                    incorporate research opportunities, enabling students to
                    contribute to cutting-edge projects under the mentorship of
                    faculty who are leaders in their fields. One distinguishing
                    feature of Finland's education system is its commitment to
                    equity and accessibility. International students typically
                    have access to the same scholarships, grants, and financial
                    aid options as Finnish students, enhancing affordability.
                    Moreover, Finland’s secure and multicultural environment
                    fosters a supportive atmosphere for international students
                    to thrive. Universities offer comprehensive support
                    services, including orientation programs, language courses,
                    and counseling, to assist international students in
                    acclimating to Finnish life and achieving academic success.
                    In summary, Finland’s education system for international
                    students blends academic excellence, innovation, and robust
                    support, making it an attractive choice for those seeking a
                    high-quality educational experience enriched by cultural
                    immersion and personal growth.
                  </div>
                  {/* <div className="destrow destrowone">
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
