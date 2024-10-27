import axios from "axios";

export const createStory = async (story, authtoken) =>
  await axios.post(`${process.env.REACT_APP_API}/story`, story, {
    headers: {
      authtoken,
    },
  });

export const removeStory = async (public_id, authtoken) =>
  await axios.delete(`${process.env.REACT_APP_API}/story/${public_id}`, {
    headers: {
      authtoken,
    },
  });

export const getStories = async () =>
  await axios.get(`${process.env.REACT_APP_API}/stories`);
