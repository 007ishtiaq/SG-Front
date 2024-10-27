import React, { useState, useEffect } from "react";
import france from "../../images/destination/france/france.webp";
import flag from "../../images/destination/france/flag.png";
// import { getRelatedStaticText } from "../../functions/staticText";
import "./Destination.css";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

export default function France() {
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
                        src={france}
                        alt={"123123"}
                        onLoad={() => setImageLoaded(true)}
                        style={{ display: imageLoaded ? "block" : "none" }}
                      />
                      <div className="destname">
                        <span>
                          <img src={flag} alt="" />
                        </span>{" "}
                        France
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
                    Study in France for Pakistani Students
                  </div>
                  <div className="destsubdata">
                    Studying in France presents a uniquely enriching educational
                    journey within one of the world's foremost centers of
                    culture and intellect. Renowned for its esteemed
                    universities, historic landmarks, and dynamic arts scene,
                    France magnetizes students globally seeking to expand their
                    academic vistas. Whether pursuing undergraduate, graduate,
                    or language immersion programs, students benefit from
                    top-tier education delivered by esteemed institutions.
                    France's cultural tapestry extends far beyond academia,
                    offering myriad avenues for exploration. From iconic museums
                    like the Louvre to quaint cafes lining cobblestone streets,
                    France's rich heritage beckons exploration and discovery.
                    With a diverse student body, robust support services, and a
                    warm embrace of cultural diversity, studying in France
                    fosters not just academic prowess but also personal growth
                    and lifelong intercultural exchange. Education Landscape in
                    France France has a longstanding tradition of hosting
                    international students, boasting a globally recognized
                    education system celebrated for its quality and
                    accessibility. Here’s a glimpse into the education framework
                    in France for international scholars: Universities France
                    features numerous public universities offering diverse
                    courses across disciplines. Admission criteria typically
                    include a secondary school diploma for undergraduates and a
                    bachelor's degree for master’s candidates. Many programs are
                    available in English, particularly at the graduate and
                    doctoral levels, ensuring accessibility for international
                    students. Tuition fees are notably competitive, especially
                    at public institutions compared to global standards. Private
                    Institutions Private universities in France offer
                    specialized programs spanning business, arts, and
                    technology. Tuition fees at private institutions generally
                    surpass those of public universities. Admission Procedures
                    International applicants can apply directly through
                    university portals. Certain programs may necessitate
                    standardized test scores like the SAT or GRE, particularly
                    at the master’s or doctoral level. Language proficiency
                    tests such as TOEFL or IELTS are often mandatory for
                    non-native English speakers. For programs taught in French,
                    proficiency is evaluated through exams such as DELF or DALF.
                    Scholarships and Financial Aid France provides a range of
                    scholarships and financial aid options for international
                    students, including the prestigious Eiffel Excellence
                    Scholarship, Erasmus+ grants, and university-specific
                    scholarships. Bilateral agreements with many countries
                    further expand funding opportunities through academic
                    exchange programs. Student Life and Assistance International
                    students benefit from comprehensive support services,
                    encompassing orientation, language training, and guidance on
                    visa and residency protocols. France’s vibrant student
                    communities, found in universities and cities alike, offer
                    diverse clubs, societies, and cultural events. France’s
                    cultural richness, culinary delights, and scenic landscapes
                    provide ample opportunities for leisure and exploration.
                    Overall, France offers an inclusive and nurturing
                    environment for international students, blending top-notch
                    education, diverse cultural encounters, and robust support
                    networks to enrich their academic and personal journeys.
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
