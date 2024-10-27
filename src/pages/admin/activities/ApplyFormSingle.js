import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getApplyform, setFormReplied } from "../../../functions/contact";
import { toast } from "react-hot-toast";
import AdminsideNavcopy from "../../../components/nav/AdminsideNavcopy";
import Switch from "../../../components/Switch/Switch";
import "./ContactFormSingle.css";

export default function ApplyFormSingle({ match }) {
  const [form, setForm] = useState([]);
  const [isReplied, setIsReplied] = useState(false);

  const { user } = useSelector((state) => ({ ...state }));

  const { id } = match.params;

  useEffect(() => {
    loadApplyform();
  }, [id, isReplied]);

  const loadApplyform = () =>
    getApplyform(id, user.token)
      .then((res) => {
        // console.log(JSON.stringify(res.data, null, 4));
        setForm(res.data);
        if (res.data) {
          setIsReplied(res.data.isReplied);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.status === 401 && "Unauthrised");
      });

  const setformReplied = () => {
    setFormReplied(form._id, user.token)
      .then((res) => {
        // console.log(res.data);
        setIsReplied(res.data.isReplied);
        toast.success("Reply Status Updated");
      })
      .catch((error) => {
        toast.error(`Reply Status failed`);
        console.error(error);
      });
  };
  return (
    <div class="manageacmaincont">
      <div class="manageaccont">
        <AdminsideNavcopy currentActive="SubmittedForms" />
        <div class="navrightside">
          <div className="formhead">
            <p>Form</p>
          </div>
          <div className="formsub">
            <p>
              {" "}
              <span className="cformheading"> Submitted At: </span>{" "}
              {new Date(form.createdAt).toLocaleString()}{" "}
            </p>
            <p>
              {" "}
              <span className="cformheading"> Full Name </span> {form.Name}{" "}
            </p>
            <p>
              {" "}
              <span className="cformheading"> Phone Number </span>{" "}
              {form.PhoneNum}{" "}
            </p>
            <p>
              {" "}
              <span className="cformheading"> Email </span> {form.Email}{" "}
            </p>
            <p>
              {" "}
              <span className="cformheading"> Gender </span> {form.Gender}{" "}
            </p>
            <p>
              {" "}
              <span className="cformheading"> Address </span> {form.Address}{" "}
            </p>
            <p>
              {" "}
              <span className="cformheading"> Qualification </span>{" "}
              {form.Qualification}{" "}
            </p>
            <p>
              {" "}
              <span className="cformheading"> Institution </span>{" "}
              {form.Institution}{" "}
            </p>
            <p>
              {" "}
              <span className="cformheading"> Passing Year: </span>{" "}
              {form.PassingYear}{" "}
            </p>
            <p>
              {" "}
              <span className="cformheading">
                {" "}
                Country Interested In:{" "}
              </span>{" "}
              {form.CountryInterestedIn}{" "}
            </p>
            <p>
              {" "}
              <span className="cformheading"> EnglishLanguageTestr: </span>{" "}
              {form.EnglishLanguageTest}{" "}
            </p>
            <p>
              {" "}
              <span className="cformheading"> TestName: </span> {form.TestName}{" "}
            </p>
            <p>
              {" "}
              <span className="cformheading"> TestMarks: </span>{" "}
              {form.TestMarks}{" "}
            </p>
            <p>
              {" "}
              <span className="cformheading"> EstimatedBudget: </span>{" "}
              {form.EstimatedBudget}{" "}
            </p>
            <p>
              {" "}
              <span className="cformheading"> AnyQuery: </span> {form.AnyQuery}{" "}
            </p>

            {/* <p>
              {" "}
              <span className="cformheading"> Image </span>{" "}
              {form.image ? (
                <img class="cformimg" src={form.image.url} alt={form.email} />
              ) : (
                "No attachment"
              )}{" "}
            </p> */}
            <span className="actionswitchcform">
              Reply Status:
              <Switch checked={isReplied} handlechange={setformReplied} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
