import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./AdminSmallNav.css";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

export default function AdminSmallNav() {
  const [currentActive, setCurrentActive] = useState("");

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();

  useEffect(() => {
    setCurrentActive(query.get("page"));
    const Allactives = document.querySelectorAll(".clsremove");
    Allactives.forEach((Elemactive) => {
      Elemactive.classList.remove("active");
    });
    const default_active = document.querySelector(`.${query.get("page")}`);
    default_active.classList.add("active");
  }, [query.get("page")]);

  return (
    <div className="navaboveside">
      <ul class="manageacul">
        <Link to="/AdminPanel?page=SubmittedForms">
          <li
            class={`manageacli clsremove SubmittedForms ${
              currentActive === "SubmittedForms" ? "active" : ""
            }`}
          >
            Submitted Forms
          </li>
        </Link>
        <Link to="/AdminPanel?page=ContactForms">
          <li
            class={`manageacli clsremove ContactForms${
              currentActive === "ContactForms" ? "active" : ""
            }`}
          >
            Contact Forms
          </li>
        </Link>
        <Link to="/AdminPanel?page=OptinEmails">
          <li
            class={`manageacli clsremove OptinEmails${
              currentActive === "OptinEmails" ? "active" : ""
            }`}
          >
            Opt-In Emails
          </li>
        </Link>
      </ul>
    </div>
  );
}
