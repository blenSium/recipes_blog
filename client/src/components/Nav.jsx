import React from "react";
import cookItLogo from "../assets/cookit_logo.png";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();
  return (
    <nav className="p-3 bg-opacity-90 pt-0">
      <div className="container flex justify-between items-center mx-auto">
        <img
          src={cookItLogo}
          className="mr-3 w-40 h-16"
          alt="Logo"
          onClick={() => navigate("/")}
        />
        <div className=" w-full md:w-auto" id="navbar-solid-bg">
          <ul className="flex flex-row md:space-x-8 md:mt-0 md:text-sm">
            <li>
              <button
                className="block py-2 pr-4 pl-3 text-lg text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                style={{ color: "#FCA2AD" }}
                onClick={() => {
                  sessionStorage.clear();
                  navigate("/");
                }}
              >
                Log Out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
