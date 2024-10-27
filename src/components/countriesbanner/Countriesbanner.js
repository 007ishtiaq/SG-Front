import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import "./Countriesbanner.css";
import sweden from "../../images/democountryimgs/sweden.webp";
import finland from "../../images/democountryimgs/finland.webp";
import belgium from "../../images/democountryimgs/belgium.webp";
import denmark from "../../images/democountryimgs/denmark.webp";
import australia from "../../images/democountryimgs/australia.webp";
import france from "../../images/democountryimgs/france.webp";
import uk from "../../images/democountryimgs/uk.webp";
import cyprus from "../../images/democountryimgs/cyprus.webp";
import ireland from "../../images/democountryimgs/ireland.webp";

const cardData = [
  {
    imgSrc: sweden, // replace with actual image paths as needed
    botNamePre: "Sweden",
    botNamePost: "Sweden",
    path: "/Destinations/sweden",
    description:
      "Studying in Sweden offers world class education, innovative teaching methods, and vibrant student life, surrounded by stunning nature and a focus on sustainability and equality.",
  },
  {
    imgSrc: australia,
    botNamePre: "Australia",
    botNamePost: "Australia",
    path: "/Destinations/Australia",
    description:
      "Studying in Australia offers world-class education, diverse cultural experiences, and stunning landscapes, making it an attractive destination for international students seeking quality and adventure.",
  },
  {
    imgSrc: uk,
    botNamePre: "United Kingdom",
    botNamePost: "United Kingdom",
    path: "/Destinations/United-Kingdom",
    description:
      "Studying in the UK offers prestigious universities, diverse cultural experiences, top-notch research opportunities, and a vibrant student life, enriching both academic and personal growth.",
  },
  {
    imgSrc: denmark,
    botNamePre: "Denmark",
    botNamePost: "Denmark",
    path: "/Destinations/Denmark",
    description:
      "Denmark's study programs blend innovative problem solving, collaborative learning, and a focus on sustainability, providing a unique, globally connected, and student friendly academic environment.",
  },
  {
    imgSrc: finland, // replace with actual image paths as needed
    botNamePre: "Finland",
    botNamePost: "Finland",
    path: "/Destinations/Finland",
    description:
      "Studying in Finland offers a world class education, innovative teaching methods, stunning natural landscapes, and a vibrant, inclusive culture that fosters creativity and critical thinking.",
  },
  {
    imgSrc: ireland,
    botNamePre: "Ireland",
    botNamePost: "Ireland",
    path: "/Destinations/Ireland",
    description:
      "Studying in Ireland offers rich cultural immersion, world class education, and vibrant student life, all set against breathtaking landscapes and a welcoming, innovative community.",
  },
  {
    imgSrc: france,
    botNamePre: "France",
    botNamePost: "France",
    path: "/Destinations/France",
    description:
      "France beckons with its rich artistic heritage, prestigious universities, and innovative research opportunities. Experience a blend of academic excellence and cultural splendor in this captivating European destination.",
  },
  {
    imgSrc: belgium,
    botNamePre: "Belgium",
    botNamePost: "Belgium",
    path: "/Destinations/Belgium",
    description:
      "Belgium's study system emphasizes practical learning, encourages international collaboration, and offers diverse, specialized programs in fields like art, science, and technology, fostering global perspectives and career readiness.",
  },
  {
    imgSrc: cyprus,
    botNamePre: "Cyprus",
    botNamePost: "Cyprus",
    path: "/Destinations/Cyprus",
    description:
      "Studying in European Cyprus offers a blend of Mediterranean charm, quality education, multicultural experiences, and vibrant student life, fostering global perspectives and career opportunities.",
  },
];

export default function Countriesbanner() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="countrymaincont cardcontainer countrycardcontainer">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="countrycont"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <Link to={card.path}>
            <span
              className="imgdiv"
              style={{
                backgroundImage: `linear-gradient(${
                  hoveredIndex === index
                    ? "rgba(0, 0, 0, 0.7)"
                    : "rgba(0, 0, 0, 0)"
                }, ${
                  hoveredIndex === index
                    ? "rgba(0, 0, 0, 0.7)"
                    : "rgba(0, 0, 0, 0)"
                }), url(${card.imgSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <figure className="snip0016">
                <img alt="" src="./bot-img/1.jpg" />
                <figcaption>
                  <h1 className="botnamepre">{card.botNamePre}</h1>
                  <h1 className="botnamepost">
                    <span>{card.botNamePost}</span>
                  </h1>
                  <p>{card.description}</p>
                </figcaption>
              </figure>
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
}
