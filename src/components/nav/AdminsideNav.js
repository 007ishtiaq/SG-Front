import React, { useState, useEffect } from "react";
import { ReactComponent as Tickchecksvg } from "../../images/manageacUser/tickcheck.svg";
import "./UsersideNav.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUserProfile } from "../../functions/user";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function AdminsideNav() {
  const [userName, setUserName] = useState("");
  // const [currentActive, setCurrentActive] = useState("");

  const { user } = useSelector((state) => ({ ...state }));

  let query = useQuery();

  useEffect(() => {
    // setCurrentActive(query.get("page"));
    const Allactives = document.querySelectorAll(".clsremove");
    Allactives.forEach((Elemactive) => {
      Elemactive.classList.remove("active");
    });
    const default_active = document.querySelector(`.${query.get("page")}`);
    default_active.classList.add("active");
  }, [query.get("page")]);

  useEffect(() => {
    if (user && user.token) {
      getUserProfile(user.token).then((a) => {
        setUserName(a.data.Name.substring(0, 12));
      });
    }
  }, [user]);

  return (
    <div class="navleftside">
      <div class="namecont">
        <p>Hello, {userName}</p>
      </div>
      {user && user.role === "admin" && (
        <div class="varifiedinfocont">
          <div class="varifiedinfo">
            <div class="personvarifiedsvg">
              <Tickchecksvg />
            </div>
            <div class="varifiedinfotext">Admin Account</div>
          </div>
        </div>
      )}

      <Link
        to="/AdminPanel?page=SubmittedForms"
        class="manageacheading clsremove SubmittedForms"
      >
        Submitted Forms
      </Link>

      <ul class="manageacul">
        <Link to="/AdminPanel?page=ContactForms">
          <li class="manageacli clsremove ContactForms">Contact Forms</li>
        </Link>
        <Link to="/AdminPanel?page=OptinEmails">
          <li class="manageacli clsremove OptinEmails">Opt-In Emails</li>
        </Link>
      </ul>

      <Link
        to="/AdminPanel?page=BannerCreate"
        class="manageacheading clsremove BannerCreate"
      >
        Create Banner
      </Link>
      <ul class="manageacul">
        <Link to="/AdminPanel?page=StoriesCreate">
          <li class="manageacli clsremove StoriesCreate">Add Story Banner</li>
        </Link>
        <Link to="/AdminPanel?page=StaticText">
          <li class="manageacli clsremove StaticText">Static Text & Promo</li>
        </Link>
      </ul>

      <Link
        to="/AdminPanel?page=PasswordReset"
        class="manageacheading clsremove PasswordReset"
      >
        Password Reset
      </Link>
    </div>
  );
}
