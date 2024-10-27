import React, { useState, useEffect } from "react";
import Sliderdiv from "../components/SliderDiv/Sliderdiv";
import MegaBanner from "../components/megabanner/MegaBanner";
import { Online } from "react-detect-offline";
import { getRelatedBanners } from "../functions/banner";
import Countriesbanner from "../components/countriesbanner/Countriesbanner";
import Partnersbanner from "../components/partnersbanner/Partnersbanner";
import Visatypes from "../components/visatypes/Visatypes";
import Reviewsbox from "../components/reviewsbox/Reviewsbox";
import Scorebanner from "../components/scorebanner/Scorebanner";
import Stepsbanner from "../components/stepsbanner/Stepsbanner";

const Home = () => {
  // const [banners, setBanners] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   if (navigator.onLine) {
  //     loadBannerData();
  //   }
  // }, [navigator.onLine, Online]);

  // const loadBannerData = () => {
  //   getRelatedBanners("FlashSaleBanner")
  //     .then((res) => {
  //       setBanners(res.data);
  //       console.log(res.data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //       setLoading(false);
  //     });
  // };

  return (
    <>
      <Sliderdiv />
      <div className="centercont">
        {/* <MegaBanner loading={loading} banner={banners[0]} /> */}
        <Partnersbanner />
        <Scorebanner />
        <Visatypes />
        <Countriesbanner />
        <Stepsbanner />
        <Reviewsbox />
      </div>
    </>
  );
};

export default Home;
