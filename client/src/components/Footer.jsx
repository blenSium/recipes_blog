import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import RememberMeIcon from '@mui/icons-material/RememberMe';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  return (
    <footer className="p-4 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800" style={{ backgroundColor: "#E0D6D4" }}>
      <span className="text-sm text-gray-500 sm:text-center ">
        © 2022{" "}
        <a href="#" className="hover:underline">
          CookIt
        </a>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm   sm:mt-0">
        <li>
          <a href="https://www.linkedin.com/in/blen-sium-2bb6b5233/" target="_blank" className="mr-4 hover:underline md:mr-6 ">
            <LinkedInIcon/>
          </a>
        </li>
        <li>
          <a href="https://github.com/blenSium" target="_blank" className="mr-4 hover:underline md:mr-6">
            <GitHubIcon/>
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            <RememberMeIcon/>
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            <InstagramIcon/>
          </a>
        </li>
      </ul>
    </footer>
  );
}
