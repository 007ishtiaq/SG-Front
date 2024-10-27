import React, { useState, useEffect } from "react";
import { getApplyforms } from "../../../functions/contact";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./ContactForm.css";

export default function SubmittedForms() {
  const [forms, setForms] = useState([]);

  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    loadForms();
  }, []);

  const loadForms = () =>
    getApplyforms(user.token).then((res) => {
      setForms(res.data);
    });

  return (
    <>
      <div>Submitted Forms</div>
      <div>
        <table className="TTtable">
          <thead>
            <tr>
              <th class="ordli">Submitted At</th>
              <th class="ordli">Full Name</th>
              <th class="ordli">Phone Num</th>
              <th class="ordli condi">Email</th>
              <th class="ordli condi">Qualification</th>
              <th class="ordli condi">Visa Type</th>
              <th class="ordli">Reply</th>
            </tr>
          </thead>
          <tbody>
            {forms.map((form) => (
              <tr key={form._id}>
                <td class="ordli">
                  {new Date(form.createdAt).toLocaleString()}
                </td>
                <td class="ordli">{form.Name}</td>
                <td class="ordli">{form.PhoneNum}</td>
                <td class="ordli condi">{form.Email}</td>
                <td class="ordli condi">{form.Qualification}</td>
                <td class="ordli condi">{form.ApplyingForVisaType}</td>
                <td class="ordli">
                  <Link to={`/admin/form/${form._id}`}>
                    <div>{form.isReplied ? "Replied" : "Pending"}</div>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
