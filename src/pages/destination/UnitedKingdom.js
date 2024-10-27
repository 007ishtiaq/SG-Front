import React, { useState, useEffect } from "react";
import uk from "../../images/destination/uk/uk.webp";
import uni1 from "../../images/destination/uk/unis/uni1.webp";
import uni2 from "../../images/destination/uk/unis/uni2.webp";
import uni3 from "../../images/destination/uk/unis/uni3.webp";
import uni4 from "../../images/destination/uk/unis/uni4.webp";
import uni5 from "../../images/destination/uk/unis/uni5.webp";
import uni6 from "../../images/destination/uk/unis/uni6.webp";
import uni7 from "../../images/destination/uk/unis/uni7.webp";
import uni8 from "../../images/destination/uk/unis/uni8.webp";
import uni9 from "../../images/destination/uk/unis/uni9.webp";
import uni10 from "../../images/destination/uk/unis/uni10.webp";
import uni11 from "../../images/destination/uk/unis/uni11.webp";
import uni12 from "../../images/destination/uk/unis/uni12.webp";
import uni13 from "../../images/destination/uk/unis/uni13.webp";
import uni14 from "../../images/destination/uk/unis/uni14.webp";
import uni15 from "../../images/destination/uk/unis/uni15.webp";
import uni16 from "../../images/destination/uk/unis/uni16.webp";
import flag from "../../images/destination/uk/flag.png";
// import { getRelatedStaticText } from "../../functions/staticText";
import "./Destination.css";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

export default function UnitedKingdom() {
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
                        src={uk}
                        alt={"123123"}
                        onLoad={() => setImageLoaded(true)}
                        style={{ display: imageLoaded ? "block" : "none" }}
                      />
                      <div className="destname">
                        <span>
                          <img src={flag} alt="" />
                        </span>{" "}
                        United Kingdom
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
                <div className="uniscont">
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
                  <div className="uniself">
                    <img className="uniimg" src={uni11} alt="" />
                  </div>
                  <div className="uniself">
                    <img className="uniimg" src={uni12} alt="" />
                  </div>
                  <div className="uniself">
                    <img className="uniimg" src={uni13} alt="" />
                  </div>
                  <div className="uniself">
                    <img className="uniimg" src={uni14} alt="" />
                  </div>
                  <div className="uniself">
                    <img className="uniimg" src={uni15} alt="" />
                  </div>
                  <div className="uniself">
                    <img className="uniimg" src={uni16} alt="" />
                  </div>
                </div>
                <div className="destcontentcont">
                  <div className="destmainheading">
                    Study in Knited Kingdom for Pakistani Students
                  </div>
                  <div className="destsubdata">
                    UK qualifications are globally esteemed, reflecting the
                    nation's rich educational heritage. As one of the oldest
                    educational systems, it offers a robust foundation in
                    essential skills needed to thrive in the competitive global
                    market. <br />
                    <span> Global Influence: </span> Graduates from UK
                    institutions have made significant impacts worldwide.
                    Notable alumni include: <span>Bill Clinton</span> (former
                    President of the USA)<span> Wole Soyinka </span>(Nobel
                    laureate in Literature)
                    <span> Imran Khan</span> (cricket legend and Prime Minister
                    of Pakistan) These individuals highlight the global
                    influence and prestige associated with UK education.
                    <br />
                    <span>Diverse Specializations</span> UK educational
                    institutions offer a vast array of specializations, ensuring
                    that students can find courses that align with their true
                    interests, aspirations, and passions. Whether you're
                    interested in arts, sciences, engineering, business, or
                    humanities, there is a program tailored to your needs.{" "}
                    <br />
                    <span> Innovative Learning Environment</span> UK
                    institutions promote critical, creative, and independent
                    thinking through diverse teaching and assessment methods.
                    Students are encouraged to utilize the knowledge they
                    acquire to inspire original ideas and innovative solutions.
                    This approach prepares graduates to think effectively and
                    independently, qualities highly valued by employers. <br />
                    <span> Financial Accessibility</span> UK education offers
                    excellent value through: <br />
                    <span>Early realization of earning potential:</span> Shorter
                    program durations mean students can enter the workforce
                    sooner. <br />
                    <span>Numerous scholarships and bursaries:</span> Many UK
                    institutions offer financial aid to help offset the cost of
                    education. <br />
                    <span>Nearly free healthcare:</span>
                    Students benefit from the National Health Service (NHS).
                    <br />
                    <span>Student discounts:</span> Through the National Union
                    of Students (NUS), students receive discounts on various
                    goods and services. <br />
                    <span> Multicultural Experience</span> The UK is a
                    cosmopolitan and inclusive society, hosting various ethnic
                    groups and nationalities. This diversity enriches students'
                    understanding of different cultures and perspectives. Living
                    and studying in such an environment prepares students to
                    operate in a globalized world. <br />
                    <span>Program Duration</span> UK programs are typically
                    shorter than those in other countries, allowing students to
                    complete their studies and begin their careers more quickly:{" "}
                    <span>Undergraduate:</span> 3 years
                    <span>Postgraduate:</span> 1 year <br />
                    <span>UK Education System</span> <br />
                    <br />
                    <span>Undergraduate:</span> *Entry Requirements*: 13 years
                    of education required for direct entry. - Specific grade
                    requirements vary by field: 65% and above for humanities.
                    70-80% and above for science, commerce, and engineering.
                    Additional qualifications or experience may be considered.
                    Must be 18 years old by the start of the program.
                    <br />
                    <span>Postgraduate:</span> *Entry Requirements*: 16 years of
                    education required for direct entry. Generally, a 60% and
                    above score in the first degree is required, though some
                    institutions accept 55% and above. GMAT scores (500-650) may
                    be needed for management programs. Relevant work experience
                    (1-3 years) is often required for MBA programs, with some
                    universities setting a minimum entry age of 25.
                    <br />
                    <span>English Proficiency</span> *IELTS*: Minimum score of
                    6.5 for postgraduate studies, 6.0 for undergraduate studies.
                    *TOEFL*: Minimum score of 237 for postgraduate studies, 223
                    for undergraduate studies. Some exemptions are possible
                    based on the university's assessment of the candidate's
                    English skills. <br />
                    <span>Application Process</span> <br />
                    <span> Undergraduate:</span>
                    *Application Method*: Applications are made through UCAS
                    (Universities and Colleges Admissions Service). Up to 6
                    universities can be applied to on one application. *Special
                    Programs*: *Sandwich Programs*: Combine periods of study
                    with time spent in industry, extending the course duration
                    to 4 years. *Foundation Programs*: One-year programs
                    designed as an alternative route for students to bridge the
                    gap between their qualifications and the requirements for a
                    degree program. <br />
                    <span> Postgraduate:</span> *Application Method*:
                    Application forms are available at various offices. Some
                    universities charge an application fee. It's recommended to
                    apply at least 6-8 months in advance, especially for popular
                    universities. *Required Documents*: Attested copies of
                    academic transcripts (O/A levels, X/XII, and bachelor's
                    degree). At least two academic reference letters from
                    professors. One work recommendation (if applicable).
                    Statement of Purpose. Curriculum Vitae/Resume. IELTS/TOEFL
                    score reports (if required). Portfolio (for art and design
                    courses). Additional certificates and achievements
                    (state/national level, extracurricular activities). <br />
                    <span> Student Visas</span>
                    Obtaining a student visa is generally straightforward.
                    Applicants from Pakistan must provide a Confirmation of
                    Acceptance for Studies (CAS) from a UK university and
                    evidence of financial support for tuition and living costs.
                    Dedicated visa counselors assist with the process. The visa
                    typically covers the entire course duration and permits
                    multiple entries. <br />
                    <span> Employment Opportunities</span> Students at
                    government colleges/universities can work up to 20 hours per
                    week during term time and full-time during vacations. This
                    opportunity allows students to gain valuable work experience
                    while supporting their studies financially.
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
