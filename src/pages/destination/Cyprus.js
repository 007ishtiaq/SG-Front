import React, { useState, useEffect } from "react";
import sweden from "../../images/destination/cyprus/Cyprus.webp";
import flag from "../../images/destination/cyprus/flag.webp";
// import { getRelatedStaticText } from "../../functions/staticText";
import "./Destination.css";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

export default function Cyprus() {
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
                        src={sweden}
                        alt={"123123"}
                        onLoad={() => setImageLoaded(true)}
                        style={{ display: imageLoaded ? "block" : "none" }}
                      />
                      <div className="destname">
                        <span>
                          <img src={flag} alt="" />
                        </span>{" "}
                        Cyprus
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
                    Study in Cyprus for Pakistani Students
                  </div>
                  <div className="destsubdata">
                    Studying on the island of Cyprus offers a unique blend of
                    academic excellence and cultural immersion. Renowned for its
                    quality education system, Cyprus boasts a variety of
                    universities and colleges, many of which offer programs in
                    English, accommodating international students. Whether
                    you're enchanted by the historic streets of Nicosia, the
                    lively student scene in Limassol, or the coastal charm of
                    Larnaca, Cyprus's cities provide an ideal backdrop for
                    academic pursuits. Beyond academics, Cyprus's strategic
                    location in the Eastern Mediterranean allows for easy
                    exploration of neighboring countries, enriching your
                    experience with diverse cultures and landscapes. From
                    savoring Cypriot cuisine and wines to exploring the island's
                    rich history and archaeological sites, studying on Cyprus
                    promises an enriching adventure filled with academic growth
                    and cultural discovery. Cyprus's education system is
                    welcoming to international students, offering opportunities
                    for academic and personal development. Universities provide
                    programs in English across various disciplines, attracting
                    students from around the globe and fostering a multicultural
                    environment. For undergraduate studies, proficiency in
                    English is typically required, though some universities
                    offer language support programs. At the graduate level,
                    numerous English-taught programs are available, including
                    fields such as business, engineering, humanities, and
                    sciences, ensuring a diverse and stimulating academic
                    experience. Furthermore, Cyprus offers scholarships and
                    financial aid to international students, easing the
                    financial burden of studying abroad. Support services such
                    as orientation programs, language assistance, and cultural
                    integration activities are also available, ensuring a smooth
                    transition and enjoyable stay on the island. Overall,
                    studying on Cyprus offers a unique blend of academic rigor,
                    cultural diversity, and supportive infrastructure, making it
                    an attractive destination for those seeking a transformative
                    educational experience in the Eastern Mediterranean.
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
