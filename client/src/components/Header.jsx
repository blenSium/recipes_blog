import React, { useState } from "react";
import "../style/header.css";
import cookItLogo from "../assets/cookit_logo.png";
import Login from "./Login";
import { Link } from "react-router-dom";
import SignUP from "./SignUP";

export default function Header() {
  const [showLogIn, setShowLogIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const handleOnCloseLogIn = () => setShowLogIn(false);
  const handleOnCloseSignUp = () => setShowSignUp(false);
  const userId = sessionStorage.getItem("userId");

  return (
    <>
      <nav className="p-3 bg-opacity-90 pt-0">
        <div className="container flex justify-between items-center mx-auto">
          <img src={cookItLogo} className="mr-3 w-40 h-16" alt="Logo" />
          <div className=" w-full md:w-auto" id="navbar-solid-bg">
            <ul className="flex flex-row md:space-x-8 md:mt-0 md:text-sm">
              {userId ? null : (
                <li className="flex items-center">
                  <button
                    className="block py-1 pr-4 pl-3 text-lg text-white hover:underline"
                    aria-current="page"
                    style={{ color: "#FCA2AD" }}
                    onClick={() => setShowLogIn(true)}
                  >
                    Login
                  </button>
                  <span className="mx-1 text-xl" style={{ color: "#FCA2AD" }}>
                    /
                  </span>
                  <button
                    className="block py-1 pr-4 pl-3 text-lg hover:underline"
                    aria-current="page"
                    style={{ color: "#FCA2AD" }}
                    onClick={() => setShowSignUp(true)}
                  >
                    Sign Up
                  </button>
                </li>
              )}
              {userId ? (
                <li>
                  <Link
                    to={"/profile"}
                    className="block py-2 pr-4 pl-3 text-lg text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    style={{ color: "#FCA2AD" }}
                  >
                    Profile
                  </Link>
                </li>
              ) : null}
              {userId ? (
                <li>
                  <button
                    className="block py-2 pr-4 pl-3 text-lg text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    style={{ color: "#FCA2AD" }}
                    onClick={() => {
                      sessionStorage.clear();
                      window.location.reload();
                    }}
                  >
                    Log Out
                  </button>
                </li>
              ) : null}
            </ul>
          </div>
        </div>
      </nav>
      <div className="header"></div>
      <div className="about text-right container pr-5 md:pr-10 pt-10">
        <h3>? COOKIT אז מה זה בעצם</h3>
        <p>
          בלוג מתכונים משותף בו תוכלו למצוא את המתכונים שתמיד חיפשתם או <br />{" "}
          להירשם ולחלוק איתנו את המתכונים המנצחים שלכם
        </p>
      </div>
      {/* <Link to={}>כל המתכונים</Link> */}
      <Login visible={showLogIn} onClose={handleOnCloseLogIn} />
      <SignUP visible={showSignUp} onClose={handleOnCloseSignUp} />
    </>
  );
}
