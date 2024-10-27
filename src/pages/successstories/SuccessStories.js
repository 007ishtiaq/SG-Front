import React, { useState, useEffect } from "react";
import "./SuccessStories.css";
import { Online } from "react-detect-offline";
import { useDispatch } from "react-redux";
import { getStories } from "../../functions/stories";
import ModalImage from "react-modal-image";

export default function SuccessStories() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (navigator.onLine) {
      loadstories();
    } else {
      dispatch({
        type: "SET_NETMODAL_VISIBLE",
        payload: true,
      });
    }
  }, [navigator.onLine, Online]);

  const loadstories = () => {
    getStories()
      .then((res) => {
        setStories(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div class="succcont">
      <div className="cardcontainer reviewsbox">
        <div className="insidecont contentcont ">
          <div class="succheadcont">
            <p>Success Stories</p>
          </div>
          <div class="contactsubcont successheading">
            <p>
              Discover seamless visa solutions that have empowered countless
              travelers to explore the world effortlessly. Trust our expertise
              to turn your travel aspirations into reality.
            </p>

            <div className="storiescont">
              {stories.map((s, index) => (
                <div key={s.index} className="story">
                  <ModalImage small={s.image.url} large={s.image.url} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
