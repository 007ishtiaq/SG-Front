import React, { useState, useEffect } from "react";
import "./Stories.css";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import CategoryImgupload from "../../../components/forms/CategoryImgupload";
import axios from "axios";
import {
  getStories,
  createStory,
  removeStory,
} from "../../../functions/stories";

const Stories = () => {
  const { user } = useSelector((state) => ({ ...state }));
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [stories, setStories] = useState([]);

  useEffect(() => {
    loadstories();
  }, []);

  const loadstories = () =>
    getStories().then((s) => {
      setStories(s.data);
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    createStory({ story: image }, user.token)
      .then((res) => {
        setLoading(false);
        setImage("");
        toast.success(`"Story Created Successfully`);
        loadstories();
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        if (err.response.status === 400) toast.error(err.response.data);
      });
  };

  const handleRemove = async (public_id) => {
    if (window.confirm("Delete?")) {
      setLoading(true);
      removeStory(public_id, user.token)
        .then((res) => {
          handleImageRemove(public_id);
          setLoading(false);
          toast.success(`Story Deleted Successfully`);
          loadstories();
        })
        .catch((err) => {
          if (err.response.status === 400) {
            setLoading(false);
            toast.error(err.response.data);
          }
        });
    }
  };

  const handleImageRemove = (public_id) => {
    setLoading(true);
    axios
      .post(
        `${process.env.REACT_APP_API}/removeimage`,
        { public_id },
        {
          headers: {
            authtoken: user ? user.token : "",
          },
        }
      )
      .then((res) => {
        setLoading(false);
        setImage("");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <div className="col">
      {loading ? (
        <h4 className="text-danger">Loading..</h4>
      ) : (
        <h4>Create Story</h4>
      )}
      <div className="p-3 submitcont">
        <CategoryImgupload
          image={image}
          setImage={setImage}
          setLoading={setLoading}
          handleImageRemove={handleImageRemove}
        />
        <button
          onClick={handleSubmit}
          disabled={!image}
          className="mybtn btnprimary storybtn"
        >
          Submit
        </button>
      </div>

      <div className="storiescontadmin">
        {stories.map((s, index) => (
          <div key={s.index} className="storyadmin">
            {s.image && (
              <span>
                <img
                  style={{ width: "176px", height: "252px" }}
                  src={s.image.url}
                  alt=""
                />
              </span>
            )}
            <span
              onClick={() => handleRemove(s.image.public_id)}
              className="btn btn-sm float-right storyremovebtn"
            >
              <DeleteOutlined className="text-danger" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
