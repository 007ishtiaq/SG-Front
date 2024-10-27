import React, { useState, useEffect } from "react";
import { ReactComponent as Rightsvg } from "../../../images/homepage/leftbtn.svg";
import { ReactComponent as Leftsvg } from "../../../images/homepage/rightbtn.svg";
import classes from "./Slider.module.css";
import { getRelatedBanners } from "../../../functions/banner";
import { Link } from "react-router-dom";
import MainSliderSkull from "../../Skeletons/MainSliderSkull";
import banner1 from "../../../images/silderbanner/banner1.webp";
import banner2 from "../../../images/silderbanner/banner2.webp";
import banner3 from "../../../images/silderbanner/banner3.webp";

const Slider = () => {
  const [index, setIndex] = useState(4);
  const [banners, setBanners] = useState([
    {
      image: {
        url: banner2,
        public_id: "bjvgkwqgw5flu3xytqa0",
      },
      _id: "6677c99968337be7bf9c7ea7",
      identity: "Slider",
      bannerNum: 5,
      name: "Appliance",
      slug: "appliance",
      link: "Mylink/GoodFriday",
      createdAt: "2024-06-23T07:07:05.438Z",
      updatedAt: "2024-06-23T07:07:05.438Z",
      __v: 0,
    },
    {
      image: {
        url: banner1,
        public_id: "whumwik9xqh4dsjfds1r",
      },
      _id: "6677c96e68337be7bf9c7e98",
      identity: "Slider",
      bannerNum: 4,
      name: "gift hamper",
      slug: "gift-hamper",
      link: "MynoLink/gifthamper",
      createdAt: "2024-06-23T07:06:22.610Z",
      updatedAt: "2024-06-23T07:06:22.610Z",
      __v: 0,
    },
    {
      image: {
        url: banner3,
        public_id: "yterpaaamyofd6ussk1x",
      },
      _id: "6677c93868337be7bf9c7e89",
      identity: "Slider",
      bannerNum: 3,
      name: "Spinner Wheel",
      slug: "spinner-wheel",
      link: "MyLink/spinner",
      createdAt: "2024-06-23T07:05:28.183Z",
      updatedAt: "2024-06-23T07:05:28.183Z",
      __v: 0,
    },
    {
      image: {
        public_id: "o6cicuguvswqqllw1sbd",
        url: banner2,
      },
      _id: "6677c90968337be7bf9c7e7a",
      identity: "Slider",
      bannerNum: 2,
      name: "Jhola",
      slug: "jhola",
      link: "Linkforbanner",
      createdAt: "2024-06-23T07:04:41.536Z",
      updatedAt: "2024-06-27T03:47:45.043Z",
      __v: 0,
    },
    {
      image: {
        public_id: "ppzrvrljs40vxfwpdzwx",
        url: banner1,
      },
      _id: "6677c8d368337be7bf9c7e6b",
      identity: "Slider",
      bannerNum: 1,
      name: "Friday",
      slug: "friday",
      link: "Linkforbanner",
      createdAt: "2024-06-23T07:03:47.200Z",
      updatedAt: "2024-06-27T03:55:24.668Z",
      __v: 0,
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // useEffect(() => {
  //   getRelatedBanners("Slider").then((b) => {
  // setLoading(false);
  // setBanners(b.data);
  //   });
  // }, []);

  const clickhandlerdot = (i) => {
    setIndex(i);
  };
  const clickhandler = (dir) => {
    if (dir === "left") {
      setIndex(index < banners.length - 1 ? index + 1 : 0);
    } else {
      setIndex(index > 0 ? index - 1 : banners.length - 1);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickhandler();
    }, 5000);
    return () => clearTimeout(timer);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const dotes = Array.from({ length: banners.length }).map((x, i) => {
    return (
      <div
        key={i}
        className={index === i ? classes.active : classes.dot}
        onClick={() => clickhandlerdot(i)}
      ></div>
    );
  });

  return (
    <>
      {loading ? (
        <MainSliderSkull />
      ) : (
        <div className={classes.Slider}>
          <div className={classes.dotes}>{dotes}</div>
          <div className={classes.right} onClick={() => clickhandler("right")}>
            <div className={classes.rightIconContainer}>
              <Leftsvg style={{ width: "10px", fill: "white" }} />
            </div>
          </div>

          {banners.map((slide, i) => (
            <div
              key={slide._id}
              className={
                i === index
                  ? [classes.item, classes.anim].join(" ")
                  : classes.item
              }
            >
              <img
                src={slide.image.url}
                alt="slideItem"
                onLoad={() => setImageLoaded(true)}
                style={{ display: imageLoaded ? "block" : "none" }}
              />
              {!imageLoaded && (
                <MainSliderSkull
                  style={{ display: imageLoaded ? "none" : "inline-block" }}
                />
              )}
            </div>
          ))}

          <div className={classes.left} onClick={() => clickhandler("left")}>
            <div className={classes.leftIconContainer}>
              <Rightsvg style={{ width: "10px", fill: "white" }} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default React.memo(Slider);
