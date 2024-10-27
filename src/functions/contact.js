import axios from "axios";

export const submitContact = async (contactdata, authtoken) =>
  await axios.post(`${process.env.REACT_APP_API}/contact`, { contactdata });

export const getContactforms = async (authtoken) =>
  await axios.get(`${process.env.REACT_APP_API}/contactForms`, {
    headers: {
      authtoken,
    },
  });
export const getApplyforms = async (authtoken) =>
  await axios.get(`${process.env.REACT_APP_API}/applyForms`, {
    headers: {
      authtoken,
    },
  });

export const getContactform = async (id, authtoken) =>
  await axios.get(`${process.env.REACT_APP_API}/contactForm/${id}`, {
    headers: {
      authtoken,
    },
  });
export const getApplyform = async (id, authtoken) =>
  await axios.get(`${process.env.REACT_APP_API}/applyForm/${id}`, {
    headers: {
      authtoken,
    },
  });
export const setFormReplied = async (formId, authtoken) =>
  await axios.put(
    `${process.env.REACT_APP_API}/applyForm/replied`,
    { formId },
    {
      headers: {
        authtoken,
      },
    }
  );
export const setReplied = async (formId, authtoken) =>
  await axios.put(
    `${process.env.REACT_APP_API}/contactForm/replied`,
    { formId },
    {
      headers: {
        authtoken,
      },
    }
  );
