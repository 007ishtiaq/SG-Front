import React, { useState, useEffect } from "react";
import sweden from "../../images/destination/denmark/denmark.webp";
import flag from "../../images/destination/denmark/flag.png";
// import { getRelatedStaticText } from "../../functions/staticText";
import "./Destination.css";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

export default function Denmark() {
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
                        Denmark
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
                    Studying in Denmark: A Unique Blend of Learning and Culture
                  </div>
                  <div className="destsubdata">
                    Embarking on an educational journey in Denmark provides a
                    unique blend of rigorous academics and rich cultural
                    experiences. With its renowned forward-thinking education
                    system, Denmark fosters a dynamic learning environment that
                    emphasizes innovative teaching methods and critical
                    analysis. From the bustling city life of Copenhagen to the
                    tranquil beauty of the Danish countryside, students
                    experience a society deeply committed to sustainability,
                    equality, and creativity. Danish universities present a
                    multitude of programs conducted in English, catering to a
                    broad spectrum of academic interests. Beyond academics,
                    students immerse themselves in Danish culture, exploring its
                    iconic design principles and vibrant food scene. Whether
                    cycling through historic urban areas or engaging in local
                    community projects, studying in Denmark promotes personal
                    development, cross-cultural understanding, and unforgettable
                    experiences. ### Higher Education in Denmark for
                    International Students Denmark’s higher education system is
                    highly regarded for its quality and inventive teaching
                    strategies. Here's a snapshot of what international students
                    can expect: #### Undergraduate Programs International
                    students can apply directly to bachelor's programs at Danish
                    universities. Requirements vary by institution and program
                    but generally include proficiency in English and meeting
                    specific academic standards. #### Master’s Programs
                    Denmark's emphasis on research and innovation makes it an
                    ideal place for graduate studies. Universities offer
                    master’s programs in various disciplines such as business,
                    engineering, humanities, and social sciences, all available
                    in English. #### Ph.D. Programs Research-oriented
                    universities in Denmark offer Ph.D. programs where
                    international students can engage in original research under
                    expert supervision, contributing to their field of study.
                    ### Admissions and Requirements International applicants
                    need to meet certain criteria, including English proficiency
                    (often demonstrated through exams like TOEFL or IELTS),
                    academic transcripts, and sometimes letters of
                    recommendation or personal statements. ### Tuition Fees and
                    Scholarships Tuition fees vary by institution and program,
                    but many Danish universities provide scholarships and
                    financial aid to international students based on merit,
                    talent, or financial need. Additionally, specific government
                    scholarships are available for non-EU/EEA students. ###
                    Student Life and Support Denmark is celebrated for its high
                    quality of life, safety, and welcoming atmosphere for
                    international students. Universities offer comprehensive
                    support services, including help with housing, visas,
                    language courses, and integration programs. In summary,
                    Denmark offers international students a robust educational
                    system with diverse opportunities for academic and personal
                    growth within a vibrant and inclusive society.
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
